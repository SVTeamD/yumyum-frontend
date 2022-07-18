import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import { Button, Grid } from '@mui/material';
import getWindowDimensions from '../hooks/WindowSize';
import Typography from '@mui/material/Typography';

interface Props {
  name: string;
  link: string;
  image: string;
}

export default function LinkButton({ link, name, image }: Props) {
  return (
    <Link to={link}>
      <Box
        sx={{
          width: getWindowDimensions().width * 0.38,
          height: getWindowDimensions().width * 0.51,
          boxShadow: '1px 3px 5px 5px #9E9E9E',
          borderRadius: '8%',
          backgroundColor: '#c4c4c4',
          '&:hover': {
            // backgroundColor: '#2e2f2f',
            opacity: [0.9, 0.8, 0.7]
          }
        }}
      >
        <Box
          sx={{
            width: getWindowDimensions().width * 0.38,
            height: getWindowDimensions().width * 0.38,
            borderRadius: '8%',
            boxShadow: '1px 3px 5px 5px #9E9E9E',
            backgroundImage: `url(${image})`,
            backgroundSize: 'contain',
            backgroundColor: '#fff2ea',
            '&:hover': {
              // backgroundColor: '#2e2f2f',
              opacity: [0.9, 0.8, 0.7]
            }
          }}
        ></Box>
        <Typography
          align="center"
          sx={{
            width: getWindowDimensions().width * 0.3,
            height: getWindowDimensions().width * 0.13,
            fontFamily: 'Gungseo',
            fontSize: getWindowDimensions().width * 0.052,
            margin: '0 auto',
            marginTop: '1.5rem'
          }}
        >
          {name}
        </Typography>
      </Box>
    </Link>
  );
}
