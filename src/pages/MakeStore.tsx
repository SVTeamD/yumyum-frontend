import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Logo';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CategorySelect from '../components/CategorySelect';
import { fontSize } from '@mui/system';
import { Typography } from '@mui/material';
import home from '../assets/images/home.png';
import ImageUpload from '../components/ImageUpload';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuUpload from '../components/MenuUpload';

export default function Mode() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };
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
    <>
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
                ></Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>

        <Box
          sx={{
            marginTop: '1rem',
            marginLeft: '1.5rem',
            display: 'flex',
            alignContent: 'left',
            justifyContent: 'left',
            fontSize: '1.5rem'
          }}
        >
          <div>가게 이름이 뭐라구유?</div>
        </Box>
        <Box
          sx={{
            marginTop: '0.5rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <ImageUpload></ImageUpload>
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <CategorySelect></CategorySelect>
        </Box>
        <Box
          sx={{
            marginTop: '1rem',
            marginLeft: '1.5rem',
            display: 'flex',
            alignContent: 'left',
            justifyContent: 'left',
            fontSize: '1.5rem'
          }}
        >
          <div>차림표 추가해봐유!</div>
        </Box>
        <Box
          sx={{
            marginTop: '0.5rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
          }}
        >
          <MenuUpload></MenuUpload>
        </Box>
        <Box
          sx={{
            marginTop: '0.5rem',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem'
          }}
        >
          <div>
            <div>가게의 메뉴판을 찍어주세여!</div>
            <div>자동으로 메뉴가 등록됩니다!</div>
          </div>
        </Box>
        <Box
          sx={{
            marginTop: '0.5rem',
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
              가게 등록 마치기!
            </Typography>
          </Grid>
        </Box>
      </Box>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'가게 등록을 마치겠습니까?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            가게 명판과 메뉴판의 내용을 확인하세요.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose}>다시확인</Button>
          <Button onClick={handleClickClose} autoFocus>
            등록하기
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
