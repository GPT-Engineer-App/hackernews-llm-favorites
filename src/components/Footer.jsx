import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" p={3} textAlign="center">
      <Text>© 2023 LLM Stories. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;