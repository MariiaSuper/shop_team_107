import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface CatalogItem {
  label: string;
  path: string;
}

const items: CatalogItem[] = [
  { label: 'Генератори', path: '/generators' },
  { label: 'Аккумуляторні батареї', path: '/batteries' },
  { label: 'Інвертори', path: '/inverters' },
  { label: 'Інше', path: '/others' }
];

const Catalog: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Box sx={{ textAlign: 'center', p: 3 }}>
      <Typography
        sx={{
          fontFamily: 'Roboto, sans-serif',
          fontWeight: 590,
          fontSize: '24px',
          lineHeight: '31.2px',
          color: '#1d1d1d',
          textAlign: 'left',
          ml: '0px',
          mb: '16px'
        }}>
        Наш каталог товарів
      </Typography>

      <Grid container spacing={1} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={6} sm={3} key={item.label}>
            <Button
              fullWidth={false}
              variant="outlined"
              sx={{
                width: '140px',
                height: '62px',
                pt: '0',
                gap: '8px',
                padding: '0',
                borderRadius: '8px',
                border: '1px solid #C6D7D7',
                opacity: 1
              }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto, Helvetica, sans-serif',
                  fontSize: '12px',
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                  fontWeight: 590,
                  lineHeight: '15.4px',
                  textAlign: 'left',
                  color: '#3D3D3D'
                }}>
                {item.label}
              </Typography>
            </Button>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 4, width: '50%' }}
        onClick={() => handleNavigation('/all-products')}>
        Переглянути товари
      </Button>
    </Box>
  );
};

export default Catalog;
