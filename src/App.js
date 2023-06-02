import { useState } from 'react';
import { Box, ChakraProvider, Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
