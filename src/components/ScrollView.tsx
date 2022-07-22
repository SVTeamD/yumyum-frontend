import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import MenuList from './MenuList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary
}));

export default function ScrollView() {
  return (
    <>
      <Box sx={{ width: '100%', padding: '1rem' }}>
        <Stack spacing={2}>
          <MenuList />
        </Stack>
      </Box>
    </>
  );
}
