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

export const Article2: React.FC = () => {
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
        image={`${process.env.PUBLIC_URL}/images/usefulArticlesImage2.png`}
        sx={{ p: 2, width: '288px', height: '220px' }}
      />
      <CardContent sx={{ pb: 0 }}>
        <Typography variant="h3" component="div" sx={{ color: theme.palette.grey[600], mb: 2 }}>
          5 порад як зекономити на використанні генератора
        </Typography>
        <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
          Бензинові генератори — це ефективний спосіб забезпечити автономне електропостачання, але
          їх використання може стати досить витратним через вартість палива.
        </Typography>

        <List sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>1.Вибір генератора з оптимальною потужністю</span>
                  </Typography>
                }
                secondary="Однією з головних причин перевитрати палива є використання генератора з потужністю, що значно перевищує ваші потреби."
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
                    <span>Як діяти:</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>1.1</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Перед покупкою генератора визначте загальну потужність приладів, які
                        плануєте використовувати.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>1.2</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Вибирайте генератор із потужністю на 20-30% більше від розрахованої, щоб
                        забезпечити запас енергії для можливих пікових навантажень, але не надто
                        великий.
                      </span>
                    </Typography>
                  </>
                }
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
                    <span>2.Переваги інверторних генераторів</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>2.1</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Знижена витрата палива завдяки адаптації до реальних потреб.
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
                        Менший рівень шуму і викидів.
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
                        Більш тривалий час автономної роботи при однаковій кількості палива.
                        <br />
                      </span>
                    </Typography>
                  </>
                }
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
                    <span>3.Економний режим роботи</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>3.1</span>
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
                      <span style={{ color: theme.palette.primary.main }}>3.2</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Вимикайте генератор, якщо потреба в електроенергії тимчасово відсутня,
                        замість того, щоб він працював на холостому ходу.
                        <br />
                      </span>
                    </Typography>
                  </>
                }
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
                    <span>4.Оптимізація використання електроприладів</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>4.1</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        По можливості чергуйте використання приладів, щоб знизити загальне
                        навантаження на генератор.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>4.2</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Використовуйте енергоефективні побутові прилади (LED-освітлення, індукційні
                        плити тощо), які споживають менше енергії.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>4.3</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Уникайте роботи великих електроприладів одночасно, якщо це можливо,
                        наприклад, пральної машини і електричної плити.
                        <br />
                      </span>
                    </Typography>
                  </>
                }
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
                    <span>5.Використання якісного палива.</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>5.1</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Використовуйте лише свіже паливо і не зберігайте бензин протягом тривалого
                        часу, щоб уникнути утворення відкладень у баці.
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.primary.main }}>5.2</span>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        По можливості використовуйте паливо високої якості, рекомендоване виробником
                        генератора.
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>
        </List>
      </CardContent>
    </Card>
  );
};
