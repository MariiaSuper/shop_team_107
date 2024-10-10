// import React from 'react';
// import { Box, Drawer, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
// import CloseOutlined from '@mui/icons-material/CloseOutlined';
// import { Link } from 'react-router-dom';

// interface MenuProps {
//   open: boolean;
//   onClose: () => void;
// }

// const menuItems = [
//   { text: 'Виробники', path: '/manufacturers' },
//   { text: 'Доставка i оплата', path: '/delivery' },
//   { text: 'Гарантія', path: '/warranty' },
//   { text: 'Контакти', path: '/contacts' },
//   { text: 'Профіль', path: '/account/profile' },
//   { text: 'Кошик', path: '/basket' },
//   { text: 'Обране', path: '/favorites' }
// ];

// export const Menu: React.FC<MenuProps> = ({ open, onClose }) => {
//   return (
//     <Drawer anchor="left" open={open} onClose={onClose}>
//       <Box sx={{ width: 250 }} role="presentation">
//         <IconButton onClick={onClose}>
//           <CloseOutlined />
//         </IconButton>
//         <List>
//           {menuItems.map((item) => (
//             <ListItem button key={item.text} component={Link} to={item.path} onClick={onClose}>
//               <ListItemText primary={item.text} />
//             </ListItem>
//           ))}
//         </List>
//         <Typography variant="h6" sx={{ padding: '16px' }}>
//           Наші контакти
//         </Typography>
//         <List>
//           <ListItem>
//             <ListItemText primary="+38 044 111 11 11" />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="+38 067 222 22 22" />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="+38 093 333 33 33" />
//           </ListItem>
//           <ListItem>
//             <ListItemText primary="+38 50 444 44 44" />
//           </ListItem>
//         </List>
//       </Box>
//     </Drawer>
//   );
// };
