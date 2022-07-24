import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

/*
interface Props {
  context: string;
}

const theme = createTheme({
  typography: {
    button: {
      fontSize: '1.5rem'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
});

export default function FormPropsTextFields({ context }: Props) {
  const navigate = useNavigate();
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        width: '20rem',
        height: '8rem',
        backgroundColor: '#a0a0a0',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7]
        }
      }}
      noValidate
      autoComplete="off"
    >
      <ThemeProvider theme={theme}>
        <Button
          sx={{ color: '#000' }}
          onClick={() => {
            navigate('/MakeStore/TakePhoto');
          }}
        >
          {context}
        </Button>
      </ThemeProvider>
    </Box>
  );
}
*/

import Grid from '@mui/material/Grid';
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
          width: '80%',
          height: '51%',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          border: 'solid 1px',
          backgroundColor: '#D3D3D3'
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
