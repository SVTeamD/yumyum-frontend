import React from 'react';
import Logo from '../assets/Logo';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import getWindowDimensions from '../hooks/WindowSize';
import Typography from '@mui/material/Typography';

import merchantImage from '../assets/images/merchant.jpeg';
import home from '../assets/images/home.png';
import Load from '../components/Load';

export default function MerchantLoad() {
  return (
    <Load
      context="아직도 가게 등록을 안했슈? 어서 해봐유!"
      button_context="가게 등록하기"
      link="/stores/new"
      image={merchantImage}
    ></Load>
  );
}
