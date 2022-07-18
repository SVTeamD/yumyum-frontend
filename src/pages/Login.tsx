import React, { Component } from 'react';
import { Grid, Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import Logo from '../assets/Logo';
import logo from '../assets/images/logo.png';

export default function Login() {
  const REST_API_KEY = '32477a8641e9c8898852ad84876cb9ba';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

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
        <Box
          component="img"
          sx={{
            alignItems: 'center',
            width: '8rem',
            height: '5rem'
          }}
          alt="The house from the offer."
          src={logo}
        />
        <Typography
          align="center"
          sx={{
            marginTop: '2rem',
            marginBottom: '1rem',
            fontSize: '2rem',
            fontFamily: 'Gungseo'
          }}
        >
          어서오셔유!
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
          간편하게 로그인하고
          <br />
          다양한 서비스를 이용하세요.
        </Typography>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <a href={KAKAO_AUTH_URL} id="custom-login-btn">
            <div
              style={{
                borderRadius: '50px',
                backgroundImage: `url(${require('../assets/images/kakao_login_medium_wide.png')})`,
                backgroundSize: 'cover',
                margin: '10px auto',
                color: 'transparent',
                width: '20rem',
                height: '3rem'
              }}
            ></div>
          </a>
        </div>
      </Box>
    </Grid>
  );
}
