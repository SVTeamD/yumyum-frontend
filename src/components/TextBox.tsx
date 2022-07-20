import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const theme = createTheme({
  typography: {
    button: {
      // color: '#000',
      fontSize: '1.5rem'
    }
  },
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      defaultProps: {
        // The default props to change
        disableRipple: true // No more ripple, on the whole application 💣!
      }
    }
  }
});

export default function FormPropsTextFields() {
  const navigate = useNavigate();
  return (
<<<<<<< HEAD
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
          사진 추가하게 좀 눌러봐유!
        </Button>
      </ThemeProvider>
    </Box>
=======
    <>
      <TextField
        label="가게 이름 입력"
        id="가게 이름 입력"
        sx={{ width: '15rem', height: '3.75rem' }}
      />
    </>
>>>>>>> bbf2920af4442dfb55467f21b64f0fedf95b15ce
  );
}
