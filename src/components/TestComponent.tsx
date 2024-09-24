import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const TestComponent: React.FC = () => {
  const [message, setMessage] = useState('');

  const handleButtonClick = (color: string) => {
    setMessage(`Button with ${color} color clicked!`);
  };

  return (
    <>
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
              sx={{ margin: 1 }}>
              Primary
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleButtonClick('Secondary')}
              sx={{ margin: 1 }}>
              Secondary
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleButtonClick('Success')}
              sx={{ margin: 1 }}>
              Success
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleButtonClick('Error')}
              sx={{ margin: 1 }}>
              Error
            </Button>
            <Button
              variant="contained"
              color="warning"
              onClick={() => handleButtonClick('Warning')}
              sx={{ margin: 1 }}>
              Warning
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleButtonClick('Info')}
              sx={{ margin: 1 }}>
              Info
            </Button>
            <Button
              variant="contained"
              color="info"
              onClick={() => handleButtonClick('Grey')}
              sx={{ margin: 1 }}>
              Grey
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleButtonClick('Light Blue')}
              sx={{ margin: 1 }}>
              Light Blue
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleButtonClick('Dark Green')}
              sx={{ margin: 1 }}>
              Dark Green
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleButtonClick('Dark Red')}
              sx={{ margin: 1 }}>
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
    </>
  );
};

export default TestComponent;
