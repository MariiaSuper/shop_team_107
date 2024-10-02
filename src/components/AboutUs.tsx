import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { SvgIconComponent } from '@mui/icons-material';

interface ServiceCardProps {
  icon: React.ReactElement<SvgIconComponent>;
  title: string;
  description: string;
}

// Reusable ServiceCard Component
const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  const theme = useTheme();

  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 500,
        marginBottom: 1,
        borderRadius: 2,
        border: `1px solid ${theme.palette.button.disabled}`
      }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Typography
            variant="h3"
            component="div"
            sx={{
              cursor: 'pointer',
              ml: '12px'
            }}>
            {title}
          </Typography>
        </Box>
        <Typography
          variant="thirdText"
          sx={{
            marginTop: '12px'
          }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Main AboutUs Component with 2 Cards
export const AboutUs = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', pt: 4 }}>
      <ServiceCard
        icon={<BoltIcon sx={{ color: '#fdd835', fontSize: 16 }} />}
        title="Електротехнічні послуги"
        description="Забезпечимо якісний і своєчасний монтаж будь-якої складності. Наші переваги: висока кваліфікація, індивідуальний підхід та швидкість виконання робіт."
      />
      <ServiceCard
        icon={<LocalShippingIcon sx={{ color: '#fdd835', fontSize: 16 }} />}
        title="Доставка по Україні"
        description="Швидка доставка по всій Україні. Термін доставки 3-5 днів."
      />
    </Box>
  );
};
