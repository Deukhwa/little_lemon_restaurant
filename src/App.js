import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Nav />} />
        //...
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
