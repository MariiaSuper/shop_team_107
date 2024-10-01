import { AboutUs } from '../AboutUs';
import { CarouselComponent } from '../CarouselComponent';
import { Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <CarouselComponent />
      <AboutUs />
    </Box>
  );
};
