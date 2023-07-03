import { SunIcon,SearchIcon } from '@chakra-ui/icons';
import { Box, Button, Flex, Heading, ListItem, Spacer, Text, UnorderedList, useToast } from '@chakra-ui/react';
import Form from '../form';

const BoxComponent = () => {

  return (
    <Box p={4}>
      <Heading size="lg" mb={4}>
      🚀  Welcome to the Weather App 🌟
      </Heading>
      <Text mb={4}>
        The Weather App is a simple yet powerful application that provides you
        with real-time weather information for any location worldwide.
        <br />
        With a clean and intuitive interface, you can easily search for a city
        and instantly get access to the current weather conditions.
      </Text>
      <Form />
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Project Description
      </Text>
      <Text mb={4}>
        This project is all about providing you with up-to-date weather information for any location around the world.
        <Box as="span" role="img" aria-label="Weather icons">☀️⛅️🌦🌧❄️</Box>
      </Text>
      <Text mb={4}>
        With the power of React and TypeScript, we've created a beautiful and intuitive interface that allows you to easily search for a city and get its current weather conditions.
        <Box as="span" role="img" aria-label="Globe icon">🌍🌤️</Box>
      </Text>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        ⚡️ Features:
      </Text>
      <UnorderedList pl={4} mb={4}>
        <ListItem>Real-time weather updates</ListItem>
        <ListItem>Search for any city</ListItem>
        <ListItem>Display of temperature, humidity, wind speed, and more</ListItem>
        <ListItem>Beautifully designed user interface</ListItem>
        <ListItem>Responsive and mobile-friendly</ListItem>
      </UnorderedList>
      <Text fontSize="lg" fontWeight="bold" mb={2}>
        🛠️ Technologies Used:
      </Text>
      <UnorderedList pl={4} mb={4}>
        <ListItem>React: A powerful JavaScript library for building user interfaces</ListItem>
        <ListItem>NextJS: A powerful React framework for building fast and scalable web applications with server-side rendering and a delightful developer experience.</ListItem>
        <ListItem>TypeScript: Adds type safety and enhances developer productivity</ListItem>
        <ListItem>Chakra: A great library for developing UI apps faster</ListItem>
        <ListItem>WeatherAPI: Provides accurate and reliable weather data</ListItem>
      </UnorderedList>
      <Text>
        👨‍💻 Get ready to explore the world's weather in a whole new way! Simply enter a city name and let us handle the rest. Enjoy the journey and stay prepared for whatever the weather brings!
        <Box as="span" role="img" aria-label="Weather icons">☔️⛱️🌈</Box>
      </Text>
      <Text fontWeight="bold" mt={4}>
        Happy weather tracking! <Box as="span" role="img" aria-label="Sun icon">🌤️😊</Box>
      </Text>
    </Box>
  );
};

export default BoxComponent;
