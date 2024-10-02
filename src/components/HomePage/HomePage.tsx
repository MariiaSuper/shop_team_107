import { CarouselComponent } from '../CarouselComponent';
import { Box } from '@mui/material';
import UsefulArticlesComponent from '../UsefulArticlesComponent/UsefulArticlesComponent';

export const HomePage = () => {
  return (
    <Box display="flex" flexDirection="column" mx={2}>
      <CarouselComponent />
      <UsefulArticlesComponent />
    </Box>
  );
};
