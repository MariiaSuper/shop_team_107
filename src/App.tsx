import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    button: {
      hover: string;
      pressed: string;
      disabled: string;
    };
  }
  interface PaletteOptions {
    button?: {
      hover?: string;
      pressed?: string;
      disabled?: string;
    };
  }
}
declare module '@mui/material/styles' {
  interface TypographyVariants {
    thirdText: React.CSSProperties;
    thirdText2: React.CSSProperties;
    buttonText: React.CSSProperties;
    tabBarRegular: React.CSSProperties;
    tabBarBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    thirdText?: React.CSSProperties;
    thirdText2?: React.CSSProperties;
    buttonText: React.CSSProperties;
    tabBarRegular: React.CSSProperties;
    tabBarBold: React.CSSProperties;
  }
}
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    thirdText: true;
    thirdText2: true;
    buttonText: true;
    tabBarRegular: true;
    tabBarBold: true;
  }
}

const theme = createTheme({
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
    grey: {
      '600': '#1d1d1d',
      '500': '#3d3d3d',
      '400': '#5d5d5d',
      '300': '#7d7d7d',
      '200': '#9d9d9d',
      '100': '#dcdcdc',
      '50': 'fcfcfc'
    },
    button: {
      hover: '#014343',
      pressed: '#013232',
      disabled: '#c6d7d7'
    }
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '42px',
      color: '#3d3d3d'
    },
    h2: {
      fontWeight: 600,
      fontSize: '24px',
      lineHeight: '36px',
      color: '#3d3d3d'
    },
    h3: {
      fontWeight: 600,
      fontSize: '18px',
      lineHeight: '27px',
      color: '#3d3d3d'
    },
    h4: {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: '24px',
      color: '#3d3d3d'
    },
    body1: {
      fontWeight: 400,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#3d3d3d'
    },
    body2: {
      fontWeight: 400,
      fontSize: '14px',
      lineHeight: '21px',
      color: '#3d3d3d'
    },
    thirdText: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#3d3d3d'
    },
    thirdText2: {
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '12px',
      color: '#3d3d3d'
    },
    buttonText: {
      fontWeight: 600,
      fontSize: '16px',
      lineHeight: '24px',
      color: '#3d3d3d'
    },
    tabBarRegular: {
      fontWeight: 600,
      fontSize: '10px',
      lineHeight: '12px',
      color: '#3d3d3d'
    },
    tabBarBold: {
      fontWeight: 700,
      fontSize: '10px',
      lineHeight: '15px',
      color: '#3d3d3d'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
