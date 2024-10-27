import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Typography,
  useTheme
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Category {
  name: string;
  route: string;
  icon: JSX.Element;
}

const categories: Category[] = [
  {
    name: 'Генератори (електростанції)',
    route: '/generators',
    icon: <img src="/icons/iconForOurCatalog.jpg" alt="generators" />
  },
  {
    name: 'Акумуляторні батареї',
    route: '/batteries',
    icon: <img src="/icons/iconForOurCatalog.jpg" alt="batteries" />
  },
  {
    name: 'Інвертори',
    route: '/inverters',
    icon: <img src="/icons/iconForOurCatalog.jpg" alt="inverters" />
  },
  {
    name: 'Інше',
    route: '/others',
    icon: <img src="/icons/iconForOurCatalog.jpg" alt="others" />
  }
];

export const OurCatalog: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleNavigate = (route: string) => {
    navigate(route);
  };

  return (
    <Typography variant="body2" sx={{ height: '100vh' }}>
      <List
        sx={{
          pt: 3,
          gap: 1,
          display: 'flex',
          flexDirection: 'column'
        }}>
        {categories.map((category) => (
          <Typography key={category.name} variant="body2">
            <ListItem
              onClick={() => handleNavigate(category.route)}
              sx={{
                justifyContent: 'space-between',
                p: 0
              }}>
              <Typography
                variant="body2"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  p: 0,
                  color: theme.palette.grey[600]
                }}>
                <ListItemIcon sx={{ width: '16px', height: '16px', minWidth: '36px' }}>
                  {category.icon}
                </ListItemIcon>
                <Typography
                  variant="body2"
                  sx={{ color: theme.palette.grey[600], fontSize: '14px', lineHeight: '21px' }}>
                  <ListItemText
                    primaryTypographyProps={{
                      variant: 'body2',
                      color: theme.palette.grey[600]
                    }}
                    primary={category.name}
                  />
                </Typography>
              </Typography>
              <IconButton edge="end" onClick={() => handleNavigate(category.route)}>
                <ArrowForwardIosIcon
                  sx={{ p: 0, width: '16px', height: '16px', color: theme.palette.primary.main }}
                />
              </IconButton>
            </ListItem>
          </Typography>
        ))}
      </List>
    </Typography>
  );
};
