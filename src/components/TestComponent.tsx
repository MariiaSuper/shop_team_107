import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2'
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

const TestComponent: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = (color: string) => {
    setMessage(`Button with ${color} color clicked!`);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Welcome to Material-UI Testing!
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick('Primary')}
              sx={{ margin: 1 }}
            >
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleButtonClick('Secondary')}
              sx={{ margin: 1 }}
            >
              Secondary
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleButtonClick('Success')}
              sx={{ margin: 1 }}
            >
              Success
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleButtonClick('Error')}
              sx={{ margin: 1 }}
            >
              Error
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleButtonClick('Warning')}
              sx={{ margin: 1 }}
            >
              Warning
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleButtonClick('Info')}
              sx={{ margin: 1 }}
            >
              Info
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleButtonClick('Grey')}
              sx={{ margin: 1 }}
            >
              Grey
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick('Light Blue')}
              sx={{ margin: 1 }}
            >
              Light Blue
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleButtonClick('Dark Green')}
              sx={{ margin: 1 }}
            >
              Dark Green
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleButtonClick('Dark Red')}
              sx={{ margin: 1 }}
            >
              Dark Red
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {message && (
        <Typography variant="h6" color="textSecondary" align="center" sx={{ marginTop: 2 }}>
          {message}
        </Typography>
      )}
    </ThemeProvider>
  );
};

export default TestComponent;
