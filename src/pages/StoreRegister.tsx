import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Logo';

import TextBox from '../components/TextBox';
import MultipleSelect from '../components/MultipleSelect';
import ButtonBox from '../components/ButtonBox';

export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <AccountCircle />
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
              >
                <MenuItem href="/login" component="a" onClick={handleClose}>
                  카카오 로그인
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Typography
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Typography variant="h4">
          <div>가게 이름이 뭐라고유?</div>

          <TextBox
            button_context="사진 추가하게 좀 눌러봐유!"
            link="/MakeStore/TakePhoto"
          ></TextBox>

          <div>무슨 장사 해유?</div>
          <div>
            <MultipleSelect />
          </div>
          <div>차림표 추가해봐유</div>

          <TextBox
            button_context="사진 추가하게 좀 눌러봐유!"
            link="/MakeStore/TakePhoto"
          ></TextBox>

          <div>가계의 메뉴판을 찍어주세요! 자동으로 메뉴가 등록됩니다</div>
          <ButtonBox button_context="가게 등록 마치기" link=""></ButtonBox>
        </Typography>
      </Typography>
    </Box>
  );
}
