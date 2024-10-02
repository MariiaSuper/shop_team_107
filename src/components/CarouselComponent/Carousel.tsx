import Carousel from 'react-material-ui-carousel';
import { Card, CardMedia, Box, useTheme } from '@mui/material';

const items = [
  {
    image: '/images/sliderHomePage/Banner1@2x.png'
  },
  {
    image: '/images/sliderHomePage/Banner2@2x.png'
  },
  {
    image: '/images/sliderHomePage/Banner3@2x.png'
  },
  {
    image: '/images/sliderHomePage/Banner4@2x.png'
  }
];

function MobileCarousel() {
  const theme = useTheme();

  return (
    <Box sx={{ width: '100%' }} pt={2}>
      <Carousel
        autoPlay={true}
        animation="slide"
        indicators={true}
        duration={500}
        navButtonsAlwaysVisible={false}
        navButtonsAlwaysInvisible={false}
        cycleNavigation={true}
        fullHeightHover={true}
        swipe={true}
        indicatorIconButtonProps={{
          style: {
            width: '11px',
            height: '11px',
            marginRight: '12px',
            color: theme.palette.primary.light,
            border: `1px solid ${theme.palette.primary.main}`
          }
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: theme.palette.primary.main,
            marginTop: 0
          }
        }}
        indicatorContainerProps={{
          style: {
            paddingTop: '8px',
            marginTop: 0,
            textAlign: 'center'
          }
        }}>
        {items.map((item, index) => (
          <Card key={index}>
            <CardMedia
              component="img"
              image={item.image}
              sx={{
                // minHeight: 200,
                objectFit: 'cover'
              }}
            />
          </Card>
        ))}
      </Carousel>
    </Box>
  );
}

export default MobileCarousel;