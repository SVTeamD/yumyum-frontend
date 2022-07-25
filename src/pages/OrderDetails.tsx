import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import order from '../assets/images/order.jpeg';
import Paper from '@mui/material/Paper';

export default function OrderDetails() {
  const dummy = {};
  return (
    <Grid container direction="column">
      <Box
        sx={{
          flexFlow: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto',
          padding: '2rem',
          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
        }}
      >
        <Paper>
          <Box
            component="img"
            sx={{
              alignItems: 'center'
            }}
            alt="Order Complete."
            src={order}
          />
        </Paper>
        <Typography
          align="center"
          sx={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '2rem',
            fontFamily: 'Gungseo'
          }}
        >
          주문해줘서 감사해유!
        </Typography>
        <Typography
          align="center"
          sx={{
            marginTop: '2rem',
            marginBottom: '1rem',
            color: '#2E2F2F',
            fontSize: '1rem'
          }}
        >
          주문상세
        </Typography>
      </Box>
    </Grid>
  );
}
