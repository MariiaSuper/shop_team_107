import React from 'react';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Button,
  Stack,
  ListItemIcon
} from '@mui/material';
import CloseOutlined from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';
import { theme } from '../theme/theme';
import { styles } from './Header/styles';
import { Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface MenuProps {
  open: boolean;
  onClose: () => void;
  activeButton: string | null;
}

const menuItems = [
  { text: 'Виробники', path: '/manufacturers' },
  { text: 'Доставка i оплата', path: '/delivery' },
  { text: 'Гарантія', path: '/guarantee' },
  { text: 'Контакти', path: '/contacts' }
];

const contacts = [
  { id: 1, number: '+38 044 111 11 11' },
  { id: 2, number: '+38 067 222 22 22' },
  { id: 3, number: '+38 093 333 33 33' },
  { id: 4, number: '+38 050 444 44 44' }
];

export const ContactList: React.FC = () => {
  return (
    <Box sx={{ pt: 3, pb: 2, px: 2 }}>
      {/* Title */}
      <Typography variant="body1" sx={{ pb: 1, color: theme.palette.grey[600] }}>
        Наші контакти
      </Typography>

      {/* List of contacts */}
      <Stack spacing={2}>
        {contacts.map((contact) => (
          <Box key={contact.id}>
            {/* Icon */}
            <PhoneIcon
              sx={{ color: '#027979', marginRight: '2px', width: '16px', height: '16px' }}
            />

            {/* Clickable phone number */}
            <a
              href={`tel:${contact.number.replace(/\s/g, '')}`}
              style={{ textDecoration: 'none', color: theme.palette.grey[400], cursor: 'pointer' }}>
              {contact.number}
            </a>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export const Menu: React.FC<MenuProps> = ({ open, onClose, activeButton }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: '70vw' }} role="presentation">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '70vw',
            maxWidth: '1200px',
            margin: '0 auto',
            pt: 3,
            px: 2,
            pb: 0.5
          }}>
          <Button sx={styles.button} component={Link} to="/" aria-label="Go to home">
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/icons/Logo2.svg`}
              alt="Logo"
              sx={{
                objectFit: 'cover'
              }}></Box>
          </Button>

          <Button
            onClick={onClose}
            aria-label="Close menu"
            sx={{ color: theme.palette.grey[400], minWidth: 3 }}>
            <CloseOutlined />
          </Button>
        </Box>

        <Divider
          sx={{
            margin: '0 auto',
            backgroundColor: theme.palette.button.disabled,
            height: '1px',
            mx: 2
          }}
        />

        <Typography sx={{ gap: 1.5, display: 'flex', flexDirection: 'column', pt: 3, pb: 1.5 }}>
          <List sx={{ gap: 1, display: 'flex', flexDirection: 'column', py: 0 }}>
            {menuItems.map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                onClick={onClose}
                sx={{
                  backgroundColor: activeButton === item.path ? '#f0f0f0' : 'transparent',
                  py: 0 // Style for active item
                }}>
                <ListItemText
                  primary={
                    <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                      <span>{item.text}</span>
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Typography>

        <Divider
          sx={{
            margin: '0 auto',
            backgroundColor: theme.palette.button.disabled,
            height: '1px',
            mx: 2
          }}
        />

        <Typography sx={{ gap: 1.5, display: 'flex', flexDirection: 'column', py: 3 }}>
          <List sx={{ gap: 1, display: 'flex', flexDirection: 'column', py: 0 }}>
            <ListItem component={Link} to="/profile" onClick={onClose} sx={{ py: 0, gap: 1 }}>
              <ListItemIcon sx={{ minWidth: 24, height: 24 }}>
                <AccountCircleOutlinedIcon sx={{ color: theme.palette.primary.main }} />{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    <span>Профіль</span>
                  </Typography>
                }
              />
            </ListItem>

            <ListItem component={Link} to="/basket" onClick={onClose} sx={{ py: 0, gap: 1 }}>
              <ListItemIcon sx={{ minWidth: 24, height: 24 }}>
                <ShoppingCartOutlinedIcon sx={{ color: theme.palette.primary.main }} />{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    <span>Кошик</span>
                  </Typography>
                }
              />
            </ListItem>

            <ListItem component={Link} to="/favorites" onClick={onClose} sx={{ py: 0, gap: 1 }}>
              <ListItemIcon sx={{ minWidth: 24, height: 24 }}>
                <FavoriteBorderIcon sx={{ color: theme.palette.primary.main }} />{' '}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2" sx={{ color: theme.palette.grey[600] }}>
                    <span>Обране</span>
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Typography>

        <Divider
          sx={{
            margin: '0 auto',
            backgroundColor: theme.palette.button.disabled,
            height: '1px',
            mx: 2
          }}
        />

        <ContactList />
      </Box>
    </Drawer>
  );
};
