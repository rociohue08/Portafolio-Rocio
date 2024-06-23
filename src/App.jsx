import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AvatarSection from './component/AvatarSection';
import InfoGrid from './component/InfoGrid';
import Footer from './component/Footer';  
import './App.css';

const App = () => {
  return (
    <Container>
      
      <Typography variant="h4" align="right" mt={4} color={"white"} >
        ITS Cipolletti
      </Typography>
      <AvatarSection />
      <Typography variant='h2' align='center' fontWeight={"fontWeightBold"} color={"white"} marginTop={"20px"} fontFamily={"inherit"}>
        ROCIO HUEÑIR
      </Typography>

      <Typography variant='h4' align='center' style={{ fontFamily: 'Playwrite NG Modern, sans-serif' }} color={"white"} >
      - Portafolio -
      </Typography>
      <InfoGrid />
      <Footer /> 
      
    </Container>
  );
};

export default App;
