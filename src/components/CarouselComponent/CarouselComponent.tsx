import { Box, Typography } from '@mui/material';
import Carousel from './Carousel';

export const CarouselComponent = () => {
  return (
    <Box pt={2} gap={1} display="flex" flexDirection="column">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: '20px',
          gap: '4px',
          cursor: 'pointer'
        }}>
        <img
          style={{ width: '16px', height: '16px' }}
          src="/icons/ElectroDefault.svg"
          alt="Електротехнічні рішення для вашого дому."
        />
        <Typography sx={{ textAlign: 'left' }} variant="thirdText">
          Електротехнічні рішення для вашого дому.
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          height: '20px',
          gap: '4px',
          cursor: 'pointer'
        }}>
        <img
          style={{ width: '16px', height: '16px' }}
          src="/icons/DeliveryTrack.svg"
          alt="Електротехнічні рішення для вашого дому."
        />
        <Typography sx={{ textAlign: 'left' }} variant="thirdText">
          Доставка по Україні.
        </Typography>
      </Box>
      <Carousel />
    </Box>
  );
};
