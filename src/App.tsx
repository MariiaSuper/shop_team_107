import { Outlet } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import TestComponent from './components/TestComponent';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#027979'
    },
    secondary: {
      main: '#dc004e'
    },
    success: {
      main: '#4caf50'
    },
    error: {
      main: '#f44336'
    },
    warning: {
      main: '#ff9800'
    },
    info: {
      main: '#2196f3'
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

        <TestComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
