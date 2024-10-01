// import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';
// import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
// import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import GridViewIcon from '@mui/icons-material/GridView';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
// import { CloseOutlined, ZoomOut } from '@mui/icons-material';

// import { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { theme } from '../../theme/theme';
// import { SearchComponent } from '../Search';
// import { styles } from './styles';
// import { ButtonNames } from '../../types/enum/header';

// export const Header = () => {
//   const location = useLocation();

//   const [activeButtons, setActiveButtons] = useState({
//     catalog: false,
//     search: false,
//     basket: false,
//     profile: false,
//     menu: false
//   });

//   useEffect(() => {
//     if (location.pathname.includes('/account/profile')) {
//       setActiveButtons({
//         catalog: false,
//         search: false,
//         basket: false,
//         profile: true,
//         menu: false
//       });
//     } else {
//       setActiveButtons({
//         catalog: false,
//         search: false,
//         basket: false,
//         profile: false,
//         menu: false
//       });
//     }
//   }, [location.pathname]);

//   const handleButtonClick = (buttonName: keyof typeof activeButtons) => {
//     if (buttonName === 'profile' && location.pathname.includes('/account/profile')) {
//       return;
//     }

//     setActiveButtons((prevState) => ({
//       ...prevState,
//       [buttonName]: !prevState[buttonName]
//     }));
//   };

//   const getButtonStyles = (isActive: boolean) => ({
//     ...styles.button,
//     color: isActive ? theme.palette.secondary.main : theme.palette.grey[50]
//   });

//   return (
//     <AppBar
//       position="sticky"
//       sx={{
//         padding: {
//           xs: '24px 16px'
//         }
//       }}>
//       <Toolbar
//         sx={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           minHeight: '100%'
//         }}>
//         <Button sx={styles.button} component={Link} to="/" aria-label="Go to home">
//           <Box
//             component="img"
//             src={`${process.env.PUBLIC_URL}/icons/Logo.svg`}
//             alt="Logo"
//             sx={{
//               objectFit: 'cover'
//             }}
//           />
//         </Button>

//         <Button
//           onClick={() => handleButtonClick(ButtonNames.Catalog)}
//           sx={getButtonStyles(activeButtons.catalog)}>
//           {activeButtons.catalog ? (
//             <CloseOutlined sx={styles.icon} />
//           ) : (
//             <GridViewIcon sx={styles.icon} />
//           )}
//           <Typography variant="caption" sx={styles.iconText}>
//             Каталог
//           </Typography>
//         </Button>

//         <Button
//           onClick={() => handleButtonClick(ButtonNames.Search)}
//           sx={getButtonStyles(activeButtons.search)}>
//           {activeButtons.search ? (
//             <ZoomOut sx={styles.icon} />
//           ) : (
//             <SearchTwoToneIcon sx={styles.icon} />
//           )}
//           <Typography variant="caption" sx={styles.iconText}>
//             Пошук
//           </Typography>
//         </Button>

//         <Button
//           onClick={() => handleButtonClick(ButtonNames.Basket)}
//           sx={getButtonStyles(activeButtons.basket)}>
//           <ShoppingCartOutlinedIcon sx={styles.icon} />
//           <Typography variant="caption" sx={styles.iconText}>
//             Кошик
//           </Typography>
//         </Button>

//         <Button
//           component={Link}
//           to="/account/profile"
//           onClick={() => handleButtonClick(ButtonNames.Profile)}
//           sx={getButtonStyles(activeButtons.profile)}>
//           <AccountCircleOutlinedIcon sx={styles.icon} />
//           <Typography variant="caption" sx={styles.iconText}>
//             Профіль
//           </Typography>
//         </Button>

//         <Button
//           onClick={() => handleButtonClick(ButtonNames.Menu)}
//           sx={getButtonStyles(activeButtons.menu)}>
//           {activeButtons.menu ? (
//             <MenuOpenSharpIcon sx={styles.icon} />
//           ) : (
//             <MenuIcon sx={styles.icon} />
//           )}
//           <Typography variant="caption" sx={styles.iconText}>
//             Меню
//           </Typography>
//         </Button>
//       </Toolbar>

//       {activeButtons.search && <SearchComponent />}
//     </AppBar>
//   );
// };
export const Header = () => {
  <p>header</p>;
};
