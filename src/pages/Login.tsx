import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import TitleLogo from '../assets/TitleLogo';

export default function Login() {
  const REST_API_KEY = '32477a8641e9c8898852ad84876cb9ba';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh' }}
    >
      <Box
        sx={{
          padding: '11rem',
          border: 'solid 4px'
        }}
      >
        <TitleLogo />
        <Typography
          align="center"
          sx={{
            marginTop: '2rem',
            marginBottom: '15rem',
            fontFamily: 'Gungseo',
            fontSize: '3rem'
          }}
        >
          어서와유!
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <a href={KAKAO_AUTH_URL} id="custom-login-btn">
            <img
              src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
              width="218"
            />
          </a>
        </div>
      </Box>
    </Grid>
  );
}
