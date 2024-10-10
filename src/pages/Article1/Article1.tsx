import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';

export const Article1: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', pt: 3 }}>
      <Typography
        gutterBottom
        variant="h2"
        component="div"
        sx={{ mb: 2, color: theme.palette.grey[600], ml: 2 }}>
        Корисні статті
      </Typography>
      <CardMedia
        component="img"
        alt="Generator with battery"
        image={`${process.env.PUBLIC_URL}/images/usefulArticlesImage1.png`}
        sx={{ p: 2, width: '288px', height: '220px' }}
      />
      <CardContent>
        <Typography variant="h3" component="div" sx={{ color: theme.palette.grey[600], mb: 2 }}>
          Як підібрати акумулятор для генератора
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
          Правильний вибір акумулятора для генератора є важливим кроком, який гарантує надійну та
          ефективну роботу пристрою.
        </Typography>
        <List sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>1. Визначте напругу акумулятора</span>
                  </Typography>
                }
                secondary="Передусім необхідно знати, яку напругу підтримує ваш генератор. Найпоширеніші варіанти – це 12 В і 24 В акумулятори."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>2. Ємність акумулятора</span>
                  </Typography>
                }
                secondary="Ємність акумулятора вимірюється в ампер-годинах (А·год) і визначає, скільки енергії він
                  може зберігати. Це ключовий показник для розуміння того, як довго акумулятор зможе
                  підтримувати генератор без підзарядки."
              />
            </ListItem>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              mb: 2
            }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>3. Тип акумулятора</span>
                  </Typography>
                }
                secondary={
                  <Typography variant="body2" component="span">
                    <span
                      style={{
                        color: theme.palette.grey[500]
                      }}>
                      {' '}
                      Сьогодні на ринку є кілька типів акумуляторів, які підходять для генераторів:
                    </span>
                  </Typography>
                }
              />
            </ListItem>
          </Typography>

          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                secondary={
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ color: theme.palette.grey[500] }}>
                    <span style={{ color: theme.palette.primary.main }}>
                      Свинцево-кислотні акумулятори (AGM та GEL):
                    </span>
                    <span style={{ color: theme.palette.grey[500] }}>
                      {' '}
                      Це традиційні акумулятори, які використовуються в генераторах. Вони мають
                      хорошу стійкість до глибоких розрядів і не потребують обслуговування.
                    </span>
                  </Typography>
                }
              />
            </ListItem>
          </Typography>
          <br />

          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                secondary={
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ color: theme.palette.grey[500] }}>
                    <span style={{ color: theme.palette.primary.main }}>
                      Літій-іонні акумулятори:
                    </span>
                    <span style={{ color: theme.palette.grey[500] }}>
                      {' '}
                      Цей тип стає дедалі популярнішим завдяки своїй малій вазі, високій
                      енергоємності та тривалому терміну служби.{' '}
                    </span>
                  </Typography>
                }
              />
            </ListItem>
          </Typography>
        </List>
      </CardContent>
    </Card>
  );
};
