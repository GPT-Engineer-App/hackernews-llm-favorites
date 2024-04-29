import { Box, VStack, Heading, Text, Input, Button, Image, useColorModeValue, SimpleGrid, IconButton } from '@chakra-ui/react';
import { FaHeart, FaSearch } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';

const Index = () => {
  const [stories, setStories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch(`https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(searchTerm)}+LLMs`)
      .then(response => response.json())
      .then(data => setStories(data.hits))
      .catch(error => console.error('Error fetching stories:', error));
  }, [searchTerm]);

  const addToFavorites = (story) => {
    setFavorites([...favorites, story]);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
  };

  return (
    <Box bg={useColorModeValue('gray.50', 'gray.900')} minH="100vh" py={12} px={6} bgImage="url('/images/landing-page-background.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={8} w="full" maxW="md" mx="auto">
        <Heading fontSize="4xl" textAlign="center" color="white">Discover LLM Stories</Heading>
        <Text fontSize="lg" color="gray.300">Explore recent Hacker News stories mentioning Large Language Models.</Text>
        <Input placeholder="Search stories..." onChange={handleSearch} size="lg" />
        <SimpleGrid columns={1} spacing={5} w="full">
          {stories.map(story => (
            <Box key={story.objectID} p={5} shadow="md" borderWidth="1px" bg={useColorModeValue('white', 'gray.700')} borderRadius="md">
              <Heading fontSize="xl">{story.title}</Heading>
              <Text mt={4}>{story.author}</Text>
              <IconButton aria-label="Add to favorites" icon={<FaHeart />} onClick={() => addToFavorites(story)} />
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Box>
  );
};

export default Index;