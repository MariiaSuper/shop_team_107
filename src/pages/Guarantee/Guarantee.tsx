import React, { useEffect } from 'react';
import {
  CardContent,
  Typography,
  List,
  Box,
  ListItem,
  ListItemText,
  useTheme,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Guarantee: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box sx={{ maxWidth: 345, pt: 3, m: 0 }}>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ mb: 1, color: theme.palette.grey[600], ml: 2 }}>
        Гарантія
      </Typography>

      <CardContent sx={{ py: 0 }}>
        <Typography variant="body1" sx={{ color: theme.palette.grey[600], mb: 1 }}>
          Ми гарантуємо якість нашої продукції!
        </Typography>

        <List sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>1. Гарантійний термін</span>
                  </Typography>
                }
                secondary="На всі товари, придбані в нашому магазині, надається гарантія терміном від 1 до 15 років з дня покупки."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>2. Гарантійне обслуговування</span>
                  </Typography>
                }
                secondary="У разі виявлення дефектів, що виникли з вини виробника, ми зобов'язуємося провести безкоштовний ремонт або заміну товару на аналогічний протягом гарантійного періоду."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>3. Умови гарантійного обслуговування:</span>
                  </Typography>
                }
                secondary="Товар повинен використовуватися згідно з інструкцією виробника.
                
                Гарантійне обслуговування не надається у випадку механічних пошкоджень, неправильного підключення або використання товару в умовах, не передбачених виробником.
                
                Для отримання гарантійного обслуговування необхідно надати товар у чистому вигляді з оригінальною упаковкою та товарним чеком або гарантійним талоном."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>4. Випадки, що не підлягають гарантії:</span>
                  </Typography>
                }
                secondary="Пошкодження, викликані недбалою експлуатацією.

                Пошкодження, викликані стихійними лихами, нещасними випадками або впливом зовнішніх факторів, що не залежать від виробника.

                Знос товару, викликаний тривалим використанням."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>5.Порядок звернення</span>
                  </Typography>
                }
                secondary="Звертайтесь до нас через кнопку «замовити виклик» для отримання консультацій або деталей щодо повернення товару."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.grey[600] }}>
            Ми завжди готові надати найкраще обслуговування та допомогти з питаннями щодо продукції
          </Typography>
        </List>

        <Box sx={{ pt: 2 }}>
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{
              width: '100%',
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.grey[50],
              borderRadius: '8px',
              height: '34px',
              fontSize: '16px',
              fontWeight: '600',
              lineHeight: '24px',
              textTransform: 'none'
            }}>
            На головну
          </Button>
        </Box>
      </CardContent>
    </Box>
  );
};
