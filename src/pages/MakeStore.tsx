import { Box } from '@mui/system';
import { relative } from 'node:path/win32';
import React, { Component } from 'react';
import Load from '../components/Load';
import TextBox from '../components/TextBox';
import CategorySelect from '../components/CategorySelect';
import UploadButtons from '../components/UploadButtons';

export default function MakeStore() {
  return (
    <Box>
      <Box
        sx={{
          marginTop: '12rem',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <UploadButtons></UploadButtons>
      </Box>
      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <CategorySelect></CategorySelect>
      </Box>
      <Box
        sx={{
          marginTop: '5rem',
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center'
        }}
      >
        <UploadButtons></UploadButtons>
      </Box>
    </Box>
  );
}
