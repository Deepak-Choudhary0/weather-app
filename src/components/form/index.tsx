import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Icon,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import styles from './style.module.css';
import Alert from '../alert';
import { SearchIcon } from '@chakra-ui/icons';

const Form: React.FC = () => {
  const [City, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
      setInput(e.target.value);
    }
  const isError = City === '';

  return (
    <div className={styles.form}>
      <FormControl isInvalid={isError}>
        <FormLabel>City Name</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <Icon as={SearchIcon} color="gray.500" />
          </InputLeftElement>
          <Input type='text' className ={styles.input} value={City} onChange={handleInputChange} />
        </InputGroup>
        {!isError ? (
          <FormHelperText>
            Enter the City Name you'd like to get Weather Details.
          </FormHelperText>
        ) : (
          <FormErrorMessage>City Name is required.</FormErrorMessage>
        )}
        <Alert inputData = {City} />
      </FormControl>
    </div>
  );
};

export default Form;
