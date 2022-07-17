import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from './assets/Logo';
import { Button, Grid } from '@mui/material';
import LinkButton from './components/LinkButton';

import customerImage from './images/customer.jpeg';
import merchantImage from './images/merchant.jpeg';
import getWindowDimensions from './hooks/WindowSize';

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
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" style={{ background: '#fff2ea' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between'
            // justifyContent: 'center'
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
                {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
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
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={2}>
          <Grid container alignItems="center">
            <Grid style={{ padding: '1rem' }}>
              <Box
                sx={{
                  width: getWindowDimensions().width * 0.38,
                  height: getWindowDimensions().width * 0.51,
                  borderRadius: '8%',
                  backgroundColor: '#c4c4c4',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7]
                  }
                }}
              >
                <Box
                  sx={{
                    width: getWindowDimensions().width * 0.38,
                    height: getWindowDimensions().width * 0.38,
                    borderRadius: '8%',
                    backgroundImage: `url(${merchantImage})`,
                    backgroundSize: 'contain',
                    backgroundColor: '#fff2ea',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7]
                    }
                  }}
                ></Box>
                <Typography
                  align="center"
                  sx={{
                    width: getWindowDimensions().width * 0.3,
                    height: getWindowDimensions().width * 0.13,
                    fontFamily: 'Gungseo',
                    fontSize: getWindowDimensions().width * 0.05,
                    alignItem: 'center',
                    margin: '0 auto'
                  }}
                >
                  주인장이유?
                </Typography>
              </Box>
            </Grid>
            <Grid style={{ padding: '1rem' }}>
              <Box
                sx={{
                  width: getWindowDimensions().width * 0.38,
                  height: getWindowDimensions().width * 0.51,
                  borderRadius: '8%',
                  backgroundColor: '#c4c4c4',
                  '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7]
                  }
                }}
              >
                <Box
                  sx={{
                    width: getWindowDimensions().width * 0.38,
                    height: getWindowDimensions().width * 0.38,
                    borderRadius: '8%',
                    backgroundImage: `url(${customerImage})`,
                    backgroundSize: 'contain',
                    backgroundColor: '#fff2ea',
                    '&:hover': {
                      backgroundColor: 'primary.main',
                      opacity: [0.9, 0.8, 0.7]
                    }
                  }}
                ></Box>
                <Typography
                  align="center"
                  sx={{
                    width: getWindowDimensions().width * 0.3,
                    height: getWindowDimensions().width * 0.13,
                    fontFamily: 'Gungseo',
                    fontSize: getWindowDimensions().width * 0.05,
                    margin: '0 auto'
                  }}
                >
                  손님이유?
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
