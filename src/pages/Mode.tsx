import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Logo';
import Grid from '@mui/material/Grid';
import LinkButton from '../components/LinkButton';
import Users from '../apis/v1/Users';

import customerImage from '../assets/images/customer.jpeg';
import merchantImage from '../assets/images/merchant.jpeg';

export default function Mode() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [token, setToken] = React.useState<null | string>(null);
  const [userId, setUserId] = React.useState();
  const [nickName, setNickName] = React.useState('');
  const [profileImage, setProfileImage] = React.useState('');
  const [ageRange, setAgeRange] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [login, setLogin] = React.useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    window.Kakao.Auth.logout(function () {
      localStorage.setItem('login', 'false');
      console.log(window.Kakao.Auth.getAccessToken());
    });
    window.location.reload();
  };

  const registerUser = async (isCustomer: boolean) => {
    getProfile();
    const data = await Users.createUser({
      user_type: isCustomer,
      name: nickName,
      gender: gender,
      age_range: ageRange,
      phone_num: '01066663333'
    });
    console.log(data);
  };

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      const data = await window.Kakao.API.request({
        url: '/v2/user/me'
      });

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      setLogin(true);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    setToken(localStorage.getItem('bearer'));
    getProfile();
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#fff2ea' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between'
          }}
        >
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{
              mr: 2
            }}
          >
            <MenuIcon />
          </IconButton>
          <Logo />
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
              >
                <Avatar src={profileImage} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                onChange={handleChange}
              >
                {!login && (
                  <MenuItem href="/login" component="a" onClick={handleClose}>
                    로그인
                  </MenuItem>
                )}
                {login && (
                  <>
                    <MenuItem>어서오세요 {nickName}님</MenuItem>
                    <MenuItem onClick={handleLogout}>로그아웃</MenuItem>
                  </>
                )}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item xs={2}>
          <Grid container alignItems="center">
            <Grid style={{ padding: '1rem' }}>
              <LinkButton
                link="/merchant"
                name="주인장이유?"
                image={merchantImage}
                action={registerUser}
                isCustomer={false}
              />
            </Grid>
            <Grid style={{ padding: '1rem' }}>
              <LinkButton
                link="/customer"
                name="손님이유?"
                image={customerImage}
                action={registerUser}
                isCustomer={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
