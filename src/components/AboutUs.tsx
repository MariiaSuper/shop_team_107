import React from 'react';
import { Card, CardContent, Typography, Box, useTheme } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import BuildIcon from '@mui/icons-material/Build';
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
    <Card variant="outlined" sx={{ maxWidth: 500, marginBottom: 1, borderRadius: 2 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          {icon}
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginLeft: '12px',
              fontWeight: '590',
              fontSize: '18px',
              lineHeight: '23.4px',
              color: theme.palette.grey[600],
              cursor: 'pointer'
            }}>
            {title}
          </Typography>
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            marginTop: '12px',
            fontWeight: '400',
            fontSize: '12px',
            lineHeight: '15.6px',
            color: theme.palette.grey[400]
          }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

// Main AboutUs Component with 3 Cards
export const AboutUs = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 4 }}>
      <ServiceCard
        icon={<BoltIcon sx={{ color: '#fdd835', fontSize: 16 }} />}
        title="Електротехнічні рішення"
        description="Забезпечимо якісний і своєчасний монтаж будь-якої складності. Наші переваги: висока кваліфікація, індивідуальний підхід та швидкість виконання робіт."
      />
      <ServiceCard
        icon={<LocalShippingIcon sx={{ color: '#fdd835', fontSize: 16 }} />}
        title="Доставка по Україні"
        description="Швидка доставка по всій Україні. Кур'єрська доставка замовлень по Києву на суму понад 5000 грн."
      />
      <ServiceCard
        icon={<BuildIcon sx={{ color: '#fdd835', fontSize: 16 }} />}
        title="Монтаж і обслуговування"
        description="Сміливо звертайтеся для монтажу та обслуговування генераторів, стабілізаторів, ДБЖ і сонячних систем. Консультуємо, розраховуємо потужність та підбираємо обладнання."
      />
    </Box>
  );
};
