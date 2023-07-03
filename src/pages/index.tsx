import { ChakraProvider } from '@chakra-ui/react';
import BoxComponent from '../components/box'
import Form from '../components/form'
import styles from './styles.module.css';
import { useState } from 'react';
import Head from 'next/head';
const HomePage = () => {
  const API_KEY = 'a836e9ec72a3470e83c62426230107';
  const [weatherData, setWeatherData] = useState(null);
  return (
    <ChakraProvider>
      <Head>
        <title>Weather App</title>
        <link rel="icon" href="/weather.png" />
      </Head>
      <div className={styles.container}>
        <BoxComponent />
      </div>
    </ChakraProvider>
  );
};

export default HomePage;
