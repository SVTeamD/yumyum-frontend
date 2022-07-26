import { Box } from '@mui/system';
import { relative } from 'node:path/win32';
import React, { Component } from 'react';
import Load from '../components/Load';
import TextBox from '../components/TextBox';
import MenuEdit from '../components/MenuEdit';

export default function ManageStore() {
  return (
    <Box
      sx={{
        marginTop: '12rem',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center'
      }}
    >
      <MenuEdit></MenuEdit>
    </Box>
  );
}
