import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff2ea',
      contrastText: '#000'
    },
    secondary: {
      main: '#f44336',
      contrastText: '#000'
    },
  }
});

declare module '@mui/material/styles' {
    interface Theme {
      status: {
        main: string;
        contrastText: string;
      };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
      status?: {
        main?: string;
        contrastText?: string;
      };
    }
  }