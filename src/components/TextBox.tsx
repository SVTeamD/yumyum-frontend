import React from 'react';
import TextField from '@mui/material/TextField';
import { height } from '@mui/system';

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
    <>
      <TextField
        label="가게 이름 입력"
        id="가게 이름 입력"
        sx={{ width: '15rem', height: '3.75rem' }}
      />
    </>
  );
}
