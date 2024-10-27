import React from 'react';
import { Box, Typography, Link, Stack } from '@mui/material';
import { theme } from '../theme/theme';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const contacts = [
  { id: 1, number: '+38 044 111 11 11' },
  { id: 2, number: '+38 067 222 22 22' },
  { id: 3, number: '+38 093 333 33 33' },
  { id: 4, number: '+38 050 444 44 44' }
];

export const ContactList: React.FC = () => {
  return (
    <Box sx={{ pb: 2, px: 2 }}>
      <Typography variant="h4" sx={{ pb: 1, color: theme.palette.grey[600] }}>
        Звʼязатися з нами
      </Typography>

      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
        {contacts.map((contact) => (
          <Typography
            key={contact.id}
            variant="thirdText"
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Box sx={{ alignItems: 'center', display: 'flex' }}>
              <PhoneIcon
                sx={{ color: '#027979', marginRight: '2px', width: '16px', height: '16px' }}
              />
              <a
                href={`tel:${contact.number.replace(/\s/g, '')}`}
                style={{
                  textDecoration: 'none',
                  color: theme.palette.grey[400],
                  cursor: 'pointer'
                }}>
                {contact.number}
              </a>
            </Box>
          </Typography>
        ))}

        <Typography
          variant="thirdText"
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ alignItems: 'center', display: 'flex' }}>
            <EmailIcon
              sx={{ color: '#027979', marginRight: '2px', width: '16px', height: '16px' }}
            />
            <a
              href="mailto:bakerlab@example.com"
              className="contacts__link"
              target="_blank"
              style={{
                textDecoration: 'none',
                color: theme.palette.grey[400],
                cursor: 'pointer'
              }}
              rel="noreferrer">
              mail@com.ua
            </a>
          </Box>
        </Typography>
      </Stack>
    </Box>
  );
};

export const Footer: React.FC = () => {
  return (
    <Box sx={{ pt: 5, px: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          gap: '20px'
        }}>
        <Box sx={{ flex: '1 1 30%', px: 2 }}>
          <Typography variant="h4" gutterBottom sx={{ color: theme.palette.grey[600], mb: '20px' }}>
            Для покупця
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyle: 'none',
              padding: 0,
              m: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}>
            <li>
              <Typography variant="thirdText">
                <Link
                  href="/manufacturers"
                  sx={{ textDecoration: 'none', color: theme.palette.grey[400] }}>
                  Виробники
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="thirdText">
                <Link
                  href="/confidential"
                  sx={{ textDecoration: 'none', color: theme.palette.grey[400] }}>
                  Політика конфіденційності
                </Link>
              </Typography>
            </li>
            <li>
              <Typography variant="thirdText">
                <Link
                  href="/categories"
                  sx={{ textDecoration: 'none', color: theme.palette.grey[400] }}>
                  Всі категорії
                </Link>
              </Typography>
            </li>
          </Box>
        </Box>

        <ContactList />
      </Box>

      <Box>
        <Box>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ color: theme.palette.grey[600], mb: '20px', px: 2, pt: 1 }}>
            Прийом дзвінків
          </Typography>
          <Box sx={{ px: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Typography variant="thirdText" sx={{ color: theme.palette.grey[400] }}>
              Пн-Пт: 09-18:00
            </Typography>
            <Typography variant="thirdText" sx={{ color: theme.palette.grey[400] }}>
              Сб: 09-17:00
            </Typography>
            <Typography variant="thirdText" sx={{ color: theme.palette.grey[400] }}>
              Нд: вихідний
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: 'center', marginTop: '20px', px: 3, pb: 2 }}>
        <Typography variant="thirdText" sx={{ color: theme.palette.primary.main }}>
          Всі права захищені магазином, 2024
        </Typography>
      </Box>
    </Box>
  );
};
