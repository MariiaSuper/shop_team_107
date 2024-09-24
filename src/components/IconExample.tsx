import React from 'react';
import { Home, Menu, Search, Favorite } from '@mui/icons-material'; // Import several icons

function IconExample() {
  return (
    <div>
      <Home fontSize="large" color="primary" /> {/* Home icon, large and primary color */}
      <Menu fontSize="small" color="secondary" /> {/* Menu icon, small and secondary color */}
      <Search style={{ fontSize: 50, color: 'green' }} /> {/* Search icon with custom styling */}
      <Favorite color="error" /> {/* Favorite icon, colored red */}
    </div>
  );
}

export default IconExample;
