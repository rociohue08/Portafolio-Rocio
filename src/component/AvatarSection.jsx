import React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';

const ProfileAvatar = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
        width: 190, 
        height: 190, 
        border: '10px solid white', 
        borderRadius: '50%', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto', 
        textAlign: 'center', 
      }}
    >
      <Avatar
        alt="Profile Picture"
        src="src/assets/foto.jpg"
        sx={{ width: 170, height: 170 }} 
      />
    </Box>
  );
};

export default ProfileAvatar;
