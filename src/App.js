import { useState } from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';

import Nav from './components/Nav';
import './App.css';
import HeroSection from './components/HeroSection';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <ChakraProvider>
      <Box textAlign="center" py={8}>
        <Container maxW="container.lg">
          <Nav />
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
