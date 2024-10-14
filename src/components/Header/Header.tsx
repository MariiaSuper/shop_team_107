import { AppBar, Box, Button, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import GridViewIcon from '@mui/icons-material/GridView';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { CloseOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { theme } from '../../theme/theme';
import { styles } from './styles';
import { Menu } from '../Menu';

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [activeButton, setActiveButton] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Mapping buttons to their paths
  const buttonPaths = {
    categories: '/categories',
    basket: '/basket',
    profile: '/profile'
  };

  useEffect(() => {
    for (const [button, path] of Object.entries(buttonPaths)) {
      if (location.pathname.startsWith(path)) {
        setActiveButton(button);
        return;
      }
    }
    setActiveButton(null); // Reset active button when no path matches
  }, [location.pathname]);

  const handleButtonClick = (buttonName: keyof typeof buttonPaths) => {
    const buttonPath = buttonPaths[buttonName];

    if (activeButton === buttonName) {
      navigate('/'); // Navigate to home if the button is active (i.e., close icon is clicked)
    } else {
      navigate(buttonPath); // Navigate to the button's respective page
    }

    setActiveButton(buttonName === activeButton ? null : buttonName); // Toggle active state
  };

  const getButtonStyles = (buttonName: string) => ({
    ...styles.button,
    color: activeButton === buttonName ? theme.palette.secondary.main : theme.palette.grey[50]
  });

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{ px: 2, borderBottomRightRadius: '4px', borderBottomLeftRadius: '4px' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            height: '75px',
            gap: '18px'
          }}>
          <Button sx={styles.button} component={Link} to="/" aria-label="Go to home">
            <Box
              component="img"
              src={`${process.env.PUBLIC_URL}/icons/iconLogo.svg`}
              alt="Logo"
              sx={{
                objectFit: 'cover'
              }}
            />
          </Button>

          <Button
            onClick={() => handleButtonClick('categories')}
            sx={getButtonStyles('categories')}>
            {activeButton === 'categories' ? (
              <CloseOutlined sx={styles.icon} />
            ) : (
              <GridViewIcon sx={styles.icon} />
            )}
            <Typography variant="caption" sx={styles.iconText}>
              Каталог
            </Typography>
          </Button>

          <Button onClick={() => handleButtonClick('basket')} sx={getButtonStyles('basket')}>
            {activeButton === 'basket' ? (
              <CloseOutlined sx={styles.icon} />
            ) : (
              <ShoppingCartOutlinedIcon sx={styles.icon} />
            )}
            <Typography variant="caption" sx={styles.iconText}>
              Кошик
            </Typography>
          </Button>

          <Button onClick={() => handleButtonClick('profile')} sx={getButtonStyles('profile')}>
            {activeButton === 'profile' ? (
              <CloseOutlined sx={styles.icon} />
            ) : (
              <AccountCircleOutlinedIcon sx={styles.icon} />
            )}
            <Typography variant="caption" sx={styles.iconText}>
              Профіль
            </Typography>
          </Button>

          <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>

          <Menu open={drawerOpen} onClose={toggleDrawer(false)} activeButton={activeButton} />
        </Toolbar>
      </AppBar>
    </>
  );
};
