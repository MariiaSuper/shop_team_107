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

export const Confidential: React.FC = () => {
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
        Політика конфіденційності
      </Typography>

      <CardContent sx={{ py: 0 }}>
        <Typography variant="thirdText" sx={{ color: 'black', mb: 3, fontWeight: 'bold' }}>
          Ця Політика конфіденційності пояснює, як інтернет-магазин генераторів збирає, використовує
          та захищає ваші персональні дані. Ми дбаємо про вашу конфіденційність та прагнемо
          забезпечити безпеку ваших даних.
        </Typography>

        <br />
        <br />
        <List sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>1. Загальні положення</span>
                  </Typography>
                }
                secondary="Ми зобов’язуємося захищати вашу конфіденційність і гарантуємо дотримання прав відповідно до Закону України «Про захист персональних даних». Ця політика конфіденційності описує, які дані ми збираємо, з якою метою, та як ми їх обробляємо."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>2. Які дані ми збираємо</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        При здійсненні покупок або створенні облікового запису на нашому сайті, ми
                        можемо збирати наступні дані:
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>• Ім’я, прізвище</span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Контактний номер телефону
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Адресу електронної пошти
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>• Адресу для доставки</span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Інформацію про покупки та історію замовлень
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • IP-адресу та інформацію про пристрій (для аналітики та захисту від
                        шахрайства)
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>3. Як ми використовуємо ваші дані</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Зібрані дані використовуються з наступною метою:
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Обробка та доставка замовлень
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Зв’язок з вами з питань замовлень та сервісного обслуговування
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Надання спеціальних пропозицій та оновлень (якщо ви погодилися на
                        отримання розсилки)
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Аналітика та поліпшення наших послуг і роботи сайту
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>4. Передача та розкриття даних третім сторонам</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Ми не продаємо і не надаємо ваші персональні дані третім особам, окрім
                        випадків, передбачених законом. Ваші дані можуть бути передані:
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Логістичним компаніям для доставки товарів
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Платіжним системам для здійснення транзакцій
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Випадкам, коли це вимагається законодавством
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>5. Захист ваших даних</span>
                  </Typography>
                }
                secondary="Ми застосовуємо сучасні технології захисту інформації, включаючи шифрування даних і багаторівневий захист доступу. Доступ до персональних даних мають лише уповноважені працівники, які пройшли спеціальну підготовку з безпеки даних."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>6. Зберігання даних</span>
                  </Typography>
                }
                secondary="Ваші персональні дані зберігаються протягом періоду, необхідного для виконання замовлень та дотримання вимог законодавства. У разі, якщо ви бажаєте видалити свій обліковий запис або дані, зв’яжіться з нами, і ми оперативно обробимо ваш запит."
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>7. Права користувача</span>
                  </Typography>
                }
                secondary={
                  <>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Ви маєте право на:
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Доступ до ваших персональних даних
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Виправлення чи видалення даних
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Обмеження обробки даних
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        • Заперечення проти використання ваших даних у маркетингових цілях
                        <br />
                      </span>
                    </Typography>
                    <br />
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ color: theme.palette.primary.main }}>
                      <span style={{ color: theme.palette.grey[500] }}>
                        {' '}
                        Для реалізації будь-яких з цих прав, будь ласка, зв’яжіться з нами за
                        контактною інформацією нижче.
                        <br />
                      </span>
                    </Typography>
                  </>
                }
              />
            </ListItem>
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>8. Зміни в Політиці конфіденційності</span>
                  </Typography>
                }
                secondary="Ми залишаємо за собою право оновлювати цю політику у випадку зміни законодавства або зміни в нашій роботі. Актуальна версія політики завжди буде доступна на цій сторінці. Ми повідомимо вас про значні зміни електронною поштою або через повідомлення на сайті."
              />
            </ListItem>
          </Typography>

          <Typography variant="thirdText" sx={{ color: theme.palette.primary.main }}>
            Ця Політика конфіденційності набуває чинності з моменту її публікації на сайті.
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
