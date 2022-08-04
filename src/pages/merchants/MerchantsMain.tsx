/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import List from '@mui/material/List';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import { dts } from '../../utils/types';
import Lists from '../../components/Lists';
import Logo from '../../assets/Logo';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuUpload from '../../components/MenuUpload';
import { BASE_URL_DEV } from '../../apis/configs/constants';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export default function StoreManage() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState([0]);
  const [menuInfo, setMenuInfo] = useState<dts.menuList[]>([
    { title: '', cost: 0, image: '' }
  ]);
  const store_id = 1;
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    axios.get(`${BASE_URL_DEV}/stores/${store_id}/menus`).then((response) => {
      setMenuInfo(response.data);
    });
  }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: '#FFFFFF' }}>
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
              ></Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <List
        disablePadding
        sx={{
          width: '100%',
          bgcolor: 'background,paper',
          borderRadius: '1rem',
          justifyContent: 'space-between'
        }}
      >
        {menuInfo.map((menu, index) => (
          <Lists
            menus={menu}
            index={index}
            setChecked={setChecked}
            checked={checked}
          />
        ))}
      </List>
      <Box
        sx={{
          marginTop: '35.7rem',
          width: '100%',
          height: '51%',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          border: 'solid 1px',
          backgroundColor: '#79a7c8'
        }}
      >
        <Grid xs={8} item>
          <Typography
            onClick={handleClick}
            sx={{
              width: '100%',
              height: '50%',
              fontWeight: '800',
              padding: '3rem',
              display: 'flex',
              justifyContent: 'center',
              fontSize: '1.8rem'
            }}
          >
            메뉴 등록 다시하기!
          </Typography>
        </Grid>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'가게 등록을 다시 하시겠습니까?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            "네"를 누르실 경우 등록페이지로 이동합니다.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>"아니요"</Button>
          <Link to="/stores/new">
            <Button onClick={handleClickClose} autoFocus>
              "네"
            </Button>
          </Link>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
