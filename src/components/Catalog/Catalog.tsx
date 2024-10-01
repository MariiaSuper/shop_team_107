import { Button, Typography, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 5, textAlign: 'center' }}>
      {/* title */}
      <Typography
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 590,
          fontSize: '24px',
          lineHeight: '31.2px',
          alignItems: 'center',
          textAlign: 'left',
          ml: '0px',
          mb: '16px',
          color: theme.palette.grey[500]
        }}
        variant="h4"
        gutterBottom>
        Наш каталог товарів
      </Typography>

      {/* container for buttons */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2
        }}>
        {/* the first row of buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/generators"
            variant="outlined"
            sx={{
              width: '140px',
              height: '62px',
              fontSize: '14px',
              borderRadius: '8px',
              fontFamily: 'Roboto, Helvetica, sans-serif',
              fontWeight: 590,
              lineHeight: '15.4px',
              color: theme.palette.grey[500],
              border: '1px solid #C6D7D7'
            }}>
            Генератори
          </Button>
          <Button
            component={Link}
            to="/batteries"
            variant="outlined"
            sx={{
              width: '140px',
              height: '62px',
              fontSize: '14px',
              borderRadius: '8px',
              fontFamily: 'Roboto, Helvetica, sans-serif',
              fontWeight: 590,
              lineHeight: '15.4px',
              color: theme.palette.grey[500],
              border: '1px solid #C6D7D7'
            }}>
            Аккумуляторні батареї
          </Button>
        </Box>

        {/* the second row of buttons */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            component={Link}
            to="/inverters"
            variant="outlined"
            sx={{
              width: '140px',
              height: '62px',
              fontSize: '14px',
              borderRadius: '8px',
              fontFamily: 'Roboto, Helvetica, sans-serif',
              fontWeight: 590,
              lineHeight: '15.4px',
              color: theme.palette.grey[500],
              border: '1px solid #C6D7D7'
            }}>
            Інвертори
          </Button>
          <Button
            component={Link}
            to="/others"
            variant="outlined"
            sx={{
              width: '140px',
              height: '62px',
              fontSize: '14px',
              borderRadius: '8px',
              fontFamily: 'Roboto, Helvetica, sans-serif',
              fontWeight: 590,
              lineHeight: '15.4px',
              color: theme.palette.grey[500],
              border: '1px solid #C6D7D7'
            }}>
            Інше
          </Button>
        </Box>
      </Box>

      <Box sx={{ mt: 2 }}>
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
            lineHeight: '17.6px'
          }}>
          Переглянути товари
        </Button>
      </Box>
    </Box>
  );
};

export default ProductCatalog;
