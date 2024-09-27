import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
// import TestComponent from './components/TestComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PaletteColor } from '@mui/material/styles/createPalette';
// import IconExample from './components/IconExample';

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
      '50': 'fcfcfc'
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

        {/* <TestComponent />
        <IconExample /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
