import Logo from '../assets/Logo';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import getWindowDimensions from '../hooks/WindowSize';
import home from '../assets/images/home.png';

interface Props {
  context: string;
  button_context: string;
  link: string;
  image: string;
}

export default function Load({ context, button_context, link, image }: Props) {
  return (
    <Grid
      sx={{
        width: '100%',
        height: '100%'
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '10%'
        }}
      >
        <Logo />
      </Box>
      <Box
        sx={{
          width: getWindowDimensions().width,
          height: '50%',
          borderTopRightRadius: '12rem',
          borderTopLeftRadius: '20rem',
          boxShadow: '0px 4px 4px 0 rgba(0, 0, 0, 0.25)',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover'
        }}
      ></Box>
      <Box
        justifyContent="center"
        sx={{
          height: '30%'
        }}
      >
        <Box
          sx={{
            paddingTop: '1rem',
            width: '100%',
            height: '70%',
            margin: '1rem auto',
            backgroundColor: '#d9d9d9',
            border: 'solid 2px'
          }}
        >
          <Typography
            sx={{
              width: '100%',
              height: '70%',
              margin: '0 0.12rem 0 0.8rem',
              fontFamily: 'Gungseo',
              fontSize: '2.25rem',
              lineHeight: '1.25',
              textAlign: 'left'
            }}
          >
            {context}
          </Typography>
        </Box>
        <Link to={link}>
          <Box
            sx={{
              width: '100%',
              height: '51%',
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              border: 'solid 1px',
              backgroundColor: '#79a7c8'
            }}
          >
            <Grid xs={8} item>
              <Typography
                sx={{
                  width: '100%',
                  height: '50%',
                  fontWeight: '800',
                  padding: '3rem',
                  display: 'flex',
                  justifyContent: 'center',
                  fontSize: '1.8rem'
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 45,
                    justifyContent: 'center',
                    backgroundImage: `url(${home})`
                  }}
                ></Box>
                {button_context}
              </Typography>
            </Grid>
          </Box>
        </Link>
      </Box>
    </Grid>
  );
}
