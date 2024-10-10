import { CarouselComponent } from '../../components/CarouselComponent';
import { Box } from '@mui/material';
import { AboutUs } from '../../components/AboutUs';
import { UsefulArticlesComponent } from '../../components/UsefulArticlesComponent/UsefulArticlesComponent';
import { Catalog } from '../../components/Catalog/Catalog';

export const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <CarouselComponent />
      <Catalog />
      <AboutUs />
      <UsefulArticlesComponent />
    </Box>
  );
};
