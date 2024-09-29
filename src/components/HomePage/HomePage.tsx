import { CarouselComponent } from '../CarouselComponent';
import { Box } from '@mui/material';
import Catalog from '../Catalog/Catalog';

export const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <CarouselComponent />
      <Catalog />
    </Box>
  );
};
