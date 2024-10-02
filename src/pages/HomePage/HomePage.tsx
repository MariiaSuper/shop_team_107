import { CarouselComponent } from '../../components/CarouselComponent';
import { Box } from '@mui/material';
import Catalog from '../../components/Catalog/Catalog';
import { AboutUs } from '../../components/AboutUs';

export const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <CarouselComponent />
      <Catalog />
      <AboutUs />
    </Box>
  );
};
