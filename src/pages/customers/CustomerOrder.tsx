import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MainAppBar from '../../components/MainAppbar';
import ScrollView from '../../components/ScrollView';

export default function CustomerOrder() {
  return (
    <>
      <MainAppBar />
      <ScrollView />
    </>
  );
}
