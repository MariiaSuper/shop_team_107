// import React from 'react';
// import { Button, Grid, Typography, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// interface CatalogItem {
//   label: string;
//   path: string;
// }

// const items: CatalogItem[] = [
//   { label: 'Генератори', path: '/generators' },
//   { label: 'Аккумуляторні батареї', path: '/batteries' },
//   { label: 'Інвертори', path: '/inverters' },
//   { label: 'Інше', path: '/others' }
// ];

// const Catalog: React.FC = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path: string) => {
//     navigate(path);
//   };

//   return (
// <Box sx={{ textAlign: 'center', pt: 5 }}>
//   <Typography
//     sx={{
//       fontFamily: 'Roboto, sans-serif',
//       fontWeight: 590,
//       fontSize: '24px',
//       lineHeight: '31.2px',
//       color: '#1d1d1d',
//       textAlign: 'left',
//       ml: '0px',
//       mb: '16px'
//     }}>
//     Наш каталог товарів
//   </Typography>

//   <Grid container spacing={1} justifyContent="center">
//     {items.map((item) => (
//       <Grid item xs={6} sm={3} key={item.label}>
//         <Button
//           fullWidth={false}
//           variant="outlined"
//           sx={{
//             width: '140px',
//             height: '62px',
//             pt: '0',
//             gap: '8px',
//             padding: '0',
//             borderRadius: '8px',
//             border: '1px solid #C6D7D7',
//             opacity: 1
//           }}>
//           <Typography
//             sx={{
//               fontFamily: 'Roboto, Helvetica, sans-serif',
//               fontSize: '12px',
//               alignItems: 'center',
//               alignContent: 'center',
//               justifyContent: 'center',
//               fontWeight: 590,
//               lineHeight: '15.4px',
//               textAlign: 'left',
//               color: '#3D3D3D'
//             }}>
//             {item.label}
//           </Typography>
//         </Button>
//       </Grid>
//     ))}
//   </Grid>

//   <Button
//     variant="contained"
//     color="primary"
//     sx={{ mt: 4, width: '50%' }}
//     onClick={() => handleNavigation('/all-products')}>
//     Переглянути товари
//   </Button>
// </Box>

//   );
// };

// export default Catalog;

import React from 'react';
import { Button, Typography, Box, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductCatalog = () => {
  const theme = useTheme();

  return (
    <Box sx={{ pt: 5, textAlign: 'center' }}>
      {/* Заголовок */}
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

      {/* Контейнер для кнопок */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2
          // mt: 2
        }}>
        {/* Перший ряд кнопок */}
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

        {/* Другий ряд кнопок */}
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

      {/* Кнопка для перегляду товарів */}
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
