import { Box, Text, Heading } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={5} maxW="md" m="auto" mt="20vh" bg="white" boxShadow="md">
      <Heading fontSize="2xl" fontWeight="bold">About the App</Heading>
      <Text mt={4}>
        This application provides a platform to explore stories related to Large Language Models (LLMs) from Hacker News. Users can search, view, and favorite stories that interest them.
      </Text>
    </Box>
  );
};

export default About;