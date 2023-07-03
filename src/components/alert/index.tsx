import React, { useRef, useState } from 'react';
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from '@chakra-ui/react';
import WeatherComponent from '../weather';
import { MdCloud } from 'react-icons/md';
interface WeatherData {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      condition: {
        text: string;
      };
      humidity: number;
    };
  }
interface AlertProps {
    inputData: string;
  }
const Alert: React.FC<AlertProps> = ({ inputData }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    // const apiKey = process.env.API_KEY;
    const API_KEY = 'your_own_api'; // from weatherapi.com

    var isDisabled = true;
    if(inputData != ''){
        isDisabled = false;
      }
    const fetchWeatherData = async () => {
        try {
          const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${inputData}`);
          if (response.ok) {
            const data: WeatherData = await response.json();
            setWeatherData(data);
          } else {
            throw new Error('Failed to fetch weather data');
          }
        } catch (error) {
          console.error(error);
        }
      };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const Clicked = async () => {
      setIsLoading(true);
  
      // Simulating an asynchronous action
      fetchWeatherData();
      await new Promise((resolve) =>setTimeout(resolve, 2000));
      setIsLoading(false);
      onOpen();
    };
  return (
    <><br />
      <Button colorScheme='purple'
          rightIcon={<MdCloud />}
          isDisabled = {isDisabled}
          isLoading={isLoading}
          onClick={Clicked}>
        Get Details
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Weather Details
            </AlertDialogHeader>

            <AlertDialogBody>
              <WeatherComponent data = {weatherData} />
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} variant='outline' colorScheme='purple' onClick={onClose} ml={3}>
                Got it
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Alert;
