import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';
import { Link } from 'react-router-dom';

export const Article3: React.FC = () => {
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
        image={`${process.env.PUBLIC_URL}/images/useFulArticlesImage3.png`}
        sx={{ p: 2, width: '288px', height: '220px' }}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h3" component="div" sx={{ color: theme.palette.grey[600], mb: 2 }}>
          Як обрати генератор для квартири: основні поради
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
          Вибір генератора для дачі – важливе рішення, адже від цього залежить комфорт і можливість
          повноцінного використання електроприладів під час відсутності централізованого
          електропостачання.
        </Typography>

        <List sx={{ pt: 0, pb: 0 }}>
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
                    <span>1.Тип генератора: бензиновий, дизельний чи газовий?</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>
                        Бензинові генератори.
                      </span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Це найпоширеніший варіант для дачі. Вони легкі, компактні й прості в
                        обслуговуванні. Бензин легко знайти, але ціна на нього вища, ніж на інші
                        види палива.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>
                        Дизельні генератори.
                      </span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Більш економічні в довгостроковій перспективі через менші витрати на паливо.
                        Вони здатні працювати триваліший час, однак є дорожчими в покупці та важчими
                        за вагою.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>Газові генератори.</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Вони екологічніші й дешевші в експлуатації за рахунок використання
                        природного газу або пропан-бутанової суміші.
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>

          <Typography
            variant="h3"
            component="div"
            sx={{ color: theme.palette.primary.main, mb: 2 }}>
            2. Потужність генератора
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
            Для правильного вибору потужності генератора важливо визначити, які електроприлади
            планується підключати.
            <br />
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: theme.palette.primary.main,
              mb: 2
            }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>Ось кілька порад:</span>
                      <br />
                      <span style={{ color: theme.palette.primary.main }}>2.1</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Увімкніть економний режим, коли не потрібно живити прилади з високою
                        потужністю.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>2.2</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Вимикайте генератор, якщо потреба в електроенергії тимчасово відсутня,
                        замість того, щоб він працював на холостому ходу.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>2.3</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Для дачі з електроопаленням або використанням енергоємного обладнання може
                        знадобитися генератор потужністю від 5 кВт і вище.
                        <br />
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>
        </List>

        <Box sx={{ pt: 2 }}>
          <Button
            component={Link}
            to="/all-articles"
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
            Інші статті
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
