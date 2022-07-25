import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import MenuList from './MenuList';
import StoreDetails from './StoreDetails';

export default function OrderMain() {
  const stores = {
    name: '아리안',
    images: 'https://source.unsplash.com/random/200x200'
  };
  return (
    <>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <StoreDetails stores={stores} />
        <br />
        <Paper sx={{ borderRadius: '1rem' }}>
          <MenuList />
        </Paper>
      </Box>
    </>
  );
}
