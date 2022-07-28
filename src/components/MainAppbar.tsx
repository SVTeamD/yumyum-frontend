import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Logo';

export default function MainAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [token, setToken] = React.useState<null | string>(null);
  const [userId, setUserId] = React.useState();
  const [nickName, setNickName] = React.useState();
  const [profileImage, setProfileImage] = React.useState();
  const [ageRange, setAgeRange] = React.useState();
  const [gender, setGender] = React.useState();
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

  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      const data = await window.Kakao.API.request({
        url: '/v2/user/me'
      });
      console.log(data.properties);

      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
      setAgeRange(data.properties.age_range);
      setGender(data.properties.gender);
      setLogin(true);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    console.log(localStorage.getItem('bearer'));
    setToken(localStorage.getItem('bearer'));
    getProfile();
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#fff2ea' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="default"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="div"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexGrow: 1,
              textAlign: 'center'
            }}
          >
            <Logo />
          </Typography>
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
    </Box>
  );
}
