import React from 'react';
import Logo from '../assets/Logo';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import getWindowDimensions from '../hooks/WindowSize';
import Typography from '@mui/material/Typography';

import customerImage from '../assets/images/customer.jpeg';
import home from '../assets/images/home.png';
import Load from '../components/Load';

export default function CustomerLoad() {
  return (
    <Load
      context="새로오신 손님이유? 어서 한번 둘러봐유!"
      button_context="가게 둘러보기"
      link="/stores"
      image={customerImage}
    ></Load>
  );
}
