import { Box } from '@mui/system';
import { relative } from 'node:path/win32';
import React, { Component } from 'react';
import Load from '../components/Load';
import TextBox from '../components/TextBox';
import CategorySelect from '../components/CategorySelect';

export default function MakeStore() {
  return (
    <div>
      <CategorySelect></CategorySelect>
    </div>
  );
}
