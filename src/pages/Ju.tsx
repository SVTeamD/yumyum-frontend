import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Logo from '../assets/Logo';
import Grid from '@mui/material/Grid';
import LinkButton from '../components/LinkButton';

import customerImage from '../assets/images/customer.jpeg';
import merchantImage from '../assets/images/merchant.jpeg';
import UploadButtons from '../components/UploadButtons';
import CategorySelect from '../components/CategorySelect';
import JuCrop from '../components/JuCrop';
import { fontSize } from '@mui/system';
import { Typography } from '@mui/material';
import home from '../assets/images/home.png';
import { Height } from '@mui/icons-material';

export default function Mode() {
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
    <div>
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
      </Box>
      <div className="px-4">
        <JuCrop />
      </div>
    </div>
  );
}
