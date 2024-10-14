import { Button, Typography, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

export const Catalog = () => {
  const theme = useTheme();

  const buttonStyle = {
    width: '140px',
    height: '62px',
    fontSize: '14px',
    borderRadius: '8px',
    fontWeight: 590,
    lineHeight: '24px',
    color: theme.palette.grey[500],
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.button.disabled}`,
    textTransform: 'none',
    p: 0
  };

  return (
    <Box sx={{ pt: 5, textAlign: 'center' }}>
      {/* title */}
      <Typography
        sx={{
          alignItems: 'center',
          textAlign: 'left',
          ml: 0,
          mb: '16px',
          color: theme.palette.grey[500]
        }}
        variant="h2"
        gutterBottom>
        Наш каталог товарів
      </Typography>

      {/* container for buttons */}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2
        }}>
        {/* the first row of buttons */}
        <Box sx={{ display: 'flex', gap: 1, boxSizing: 'border-box' }}>
          <Button component={Link} to="categories/generators" variant="outlined" sx={buttonStyle}>
            Генератори
          </Button>
          <Button component={Link} to="categories/batteries" variant="outlined" sx={buttonStyle}>
            Акумуляторні батареї
          </Button>
        </Box>

        {/* the second row of buttons */}
        <Box sx={{ display: 'flex', gap: 1, boxSizing: 'border-box' }}>
          <Button component={Link} to="categories/inverters" variant="outlined" sx={buttonStyle}>
            Інвертори
          </Button>
          <Button component={Link} to="categories/others" variant="outlined" sx={buttonStyle}>
            Інше
          </Button>
        </Box>
      </Box>

      <Box sx={{ pt: 2 }}>
        <Button
          component={Link}
          to="/products"
          variant="contained"
          sx={{
            width: '100%',
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.grey[50],
            borderRadius: '8px',
            height: '34px',
            fontSize: '16px',
            fontWeight: '590',
            lineHeight: '24px',
            textTransform: 'none'
          }}>
          Переглянути товари
        </Button>
      </Box>
    </Box>
  );
};
