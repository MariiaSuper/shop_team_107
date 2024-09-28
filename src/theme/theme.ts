import { createTheme } from '@mui/material';
import { PaletteColor } from '@mui/material';

declare module '@mui/material/styles' {
  interface Palette {
    button: PaletteColor;
  }
  interface PaletteOptions {
    button?: {
      hover?: string;
      pressed?: string;
      disabled?: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#027979',
      light: '#fbffff'
    },
    secondary: {
      main: '#dede1c'
    },
    success: {
      main: '#8fe478'
    },
    error: {
      main: '#e6735f'
    },
    warning: {
      main: '#fbd13e'
    },
    info: {
      main: '#4599e7'
    },
    button: {
      hover: '#ff5722',
      pressed: '#013232',
      disabled: '#c6d7d7'
    },
    grey: {
      '600': '#1d1d1d',
      '500': '#3d3d3d',
      '400': '#5d5d5d',
      '300': '#7d7d7d',
      '200': '#9d9d9d',
      '100': '#dcdcdc',
      '50': '#fcfcfc'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0
        }
      }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
});
