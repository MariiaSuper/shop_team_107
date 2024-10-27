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

export const DeliveryAndPayment: React.FC = () => {
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
        Доставка і оплата
      </Typography>

      <CardContent sx={{ py: 0 }}>
        <Typography variant="h4" sx={{ color: theme.palette.primary.main, mb: 1 }}>
          Як діє доставка товарів до відділень служб доставки?
        </Typography>

        <Typography variant="h4" sx={{ color: theme.palette.grey[400], mb: 1 }}>
          Будь ласка, перевіряйте відсутність механічних пошкоджень і комплектацію, наявність усіх
          одиниць товару при отриманні замовлення в присутності працівника служби доставки. ROZETKA
          не гарантує вирішення спірних ситуацій з товаром на вашу користь, якщо товар не був
          перевірений при отриманні.
        </Typography>

        <List sx={{ pt: 0, pb: 0 }}>
          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <>
                    <Typography variant="h3" sx={{ pb: 1 }}>
                      <span>Які умови доставки до відділень Нової пошти?</span>
                    </Typography>
                    <Typography sx={{ pb: 1 }}>
                      <span>Умови доставки товарів</span>
                    </Typography>
                  </>
                }
                secondary="1.Термін доставки: 1-3 дні."
              />
            </ListItem>

            <ListItemText secondary="2.Термін зберігання – 3 робочих дні." />
            <ListItemText secondary="3.Доступна оплата пластиковим та електронним подарунковим сертифікатом." />
            <ListItemText secondary="4.Коли замовлення надійде до відділення, ви отримаєте SMS-сповіщення." />
          </Typography>

          <Typography variant="h3" sx={{ color: theme.palette.primary.main, mb: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemText
                primary={
                  <Typography sx={{ pb: 1 }}>
                    <span>Вартість доставки</span>
                  </Typography>
                }
                secondary="Вартість доставки однієї одиниці товару залежить від ваги та габаритів."
              />
            </ListItem>
            <ListItemText secondary="У разі купівлі кількох товарів вартість доставки перераховується." />
            <ListItemText secondary="При виборі оплати готівкою ви не платите додатково за переведення коштів." />
            <ListItemText secondary="Остаточна сума до сплати за товар продавця Rozetka вказується при підтвердженні замовлення." />
            <ListItemText secondary="Умови доставки товарів інших продавців можуть відрізнятися." />
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
