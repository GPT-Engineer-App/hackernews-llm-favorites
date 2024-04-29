import { Box, Flex, Text, Link, Spacer } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <Flex as="nav" bg="gray.800" color="white" p={3} align="center">
      <Box p="2">
        <Link as={RouterLink} to="/" _hover={{ textDecor: 'none' }}>Home</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link as={RouterLink} to="/about" _hover={{ textDecor: 'none' }}>About</Link>
      </Box>
    </Flex>
  );
};

export default NavBar;