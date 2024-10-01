import { Box } from '@mui/material';
import Carousel from './Carousel';
import styles from './CarouselComponent.module.scss';

export const CarouselComponent = () => {
  return (
    <Box mt={2} gap={1} display="flex" flexDirection="column">
      <div className={styles.line}>
        <img
          src="/icons/ElectroDefault.svg"
          alt="Електротехнічні рішення для вашого дому."
          className="carouselIcon"
        />
        <p className={styles.carouselDescription}>Електротехнічні рішення для вашого дому.</p>
      </div>
      <div className={styles.line}>
        <img
          src="/icons/DeliveryTrack.svg"
          alt="Електротехнічні рішення для вашого дому."
          className="carouselIcon"
        />
        <p className={styles.carouselDescription}>Доставка по Україні.</p>
      </div>
      <Carousel />
    </Box>
  );
};
