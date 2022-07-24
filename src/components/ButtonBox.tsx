import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import home from '../assets/images/home.png';

interface Props {
  button_context: string;
  link: string;
}

export default function ButtonBox({ button_context, link }: Props) {
  return (
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
  );
}
