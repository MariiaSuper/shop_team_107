import React, { useEffect } from 'react';
import {
  Box,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  useTheme
} from '@mui/material';

export const AllArticles: React.FC = () => {
  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Box sx={{ maxWidth: 345, margin: 'auto', pt: 3, mb: 2 }}>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ mb: 2, color: theme.palette.grey[600], ml: 2 }}>
          Як підібрати акумулятор для генератора
        </Typography>
        <CardMedia
          component="img"
          alt="Generator with battery"
          image={`${process.env.PUBLIC_URL}/images/usefulArticlesImage1.png`}
          sx={{ p: 2, width: '100%', height: '220px' }}
        />
        <CardContent>
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
                        Сьогодні на ринку є кілька типів акумуляторів, які підходять для
                        генераторів:
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
      </Box>

      <Box sx={{ maxWidth: 345, margin: 'auto', pt: 3, mb: 2 }}>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ mb: 2, color: theme.palette.grey[600], ml: 2 }}>
          5 порад як зекономити на використанні генератора
        </Typography>
        <CardMedia
          component="img"
          alt="Generator with battery"
          image={`${process.env.PUBLIC_URL}/images/usefulArticlesImage2.png`}
          sx={{ p: 2, width: '100%', height: '220px' }}
        />
        <CardContent sx={{ pb: 0 }}>
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
                          Використовуйте енергоефективні побутові прилади (LED-освітлення,
                          індукційні плити тощо), які споживають менше енергії.
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
                          По можливості використовуйте паливо високої якості, рекомендоване
                          виробником генератора.
                        </span>
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </Typography>
          </List>
        </CardContent>
      </Box>

      <Box sx={{ maxWidth: 345, margin: 'auto', pt: 3, mb: 2 }}>
        <Typography
          gutterBottom
          variant="h2"
          component="div"
          sx={{ mb: 2, color: theme.palette.grey[600], ml: 2 }}>
          Як обрати генератор для квартири: основні поради
        </Typography>
        <CardMedia
          component="img"
          alt="Generator with battery"
          image={`${process.env.PUBLIC_URL}/images/useFulArticlesImage3.png`}
          sx={{ p: 2, width: '100%', height: '220px' }}
        />
        <CardContent sx={{ pb: 0 }}>
          <Typography variant="body2" sx={{ color: theme.palette.grey[400], mb: 3 }}>
            Вибір генератора для дачі – важливе рішення, адже від цього залежить комфорт і
            можливість повноцінного використання електроприладів під час відсутності
            централізованого електропостачання.
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
                          Більш економічні в довгостроковій перспективі через менші витрати на
                          паливо. Вони здатні працювати триваліший час, однак є дорожчими в покупці
                          та важчими за вагою.
                          <br />
                        </span>
                      </Typography>
                      <br />
                      <Typography
                        variant="body2"
                        component="span"
                        sx={{ color: theme.palette.primary.main }}>
                        <span style={{ color: theme.palette.primary.main }}>
                          Газові генератори.
                        </span>
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
        </CardContent>
      </Box>
    </>
  );
};
