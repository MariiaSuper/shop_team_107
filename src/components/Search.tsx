import { Box, InputBase } from '@mui/material';

export const SearchComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'white'
      }}
    >
      <InputBase
        placeholder="Пошук..."
        sx={{ flex: 1, border: '1px solid #ccc', borderRadius: '4px', padding: '4px 8px' }}
      />
    </Box>
  );
};
