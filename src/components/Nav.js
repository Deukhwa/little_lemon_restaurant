import { Box, HStack, Image } from '@chakra-ui/react';

const NavigationBar = () => {
  return (
    <Box py={4} bg="gray.200">
      <HStack
        spacing={4}
        alignItems="center"
        justifyContent="space-between"
        px={8}
      >
        <Box w="8" h="8" bg="gray.500" transform="rotate(-45deg)" />
        <HStack spacing={8}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/reservations">Reservations</a>
          <a href="/order">Order Online</a>
          <a href="/login">Login</a>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavigationBar;
