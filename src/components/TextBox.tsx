import React from 'react';
import TextField from '@mui/material/TextField';
import { height } from '@mui/system';

export default function TextBox() {
  return (
    <>
      <TextField
        label="가게 이름 입력"
        id="가게 이름 입력"
        sx={{ width: '15rem', height: '3.75rem' }}
      />
    </>
  );
}
