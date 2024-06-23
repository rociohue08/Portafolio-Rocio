import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        textAlign: 'center', 
        backgroundColor: 'white', 
        borderRadius: 10,
        marginBottom: '20px',
      }}
    >
      <Typography variant="body1" style={{ fontFamily: 'Playwrite NG Modern, sans-serif' }} fontWeight={"bold"} >
        © 2024 Rocio Hueñir. Todos los derechos reservados.
      </Typography>
      
      <Link href="https://www.linkedin.com" target="_blank" rel="noopener" color="inherit">
        LinkedIn
      </Link> | 
      <Link href="https://github.com/rociohue08" target="_blank" rel="noopener" color="inherit">
        GitHub
      </Link>
    </Box>
  );
};

export default Footer;
