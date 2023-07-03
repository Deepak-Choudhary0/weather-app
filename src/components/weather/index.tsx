import React, { useState, useEffect } from 'react';

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
interface WeatherProps {
    data: WeatherData | null;
  }
const WeatherComponent: React.FC<WeatherProps> = ({ data }) =>  {
  
  if (!data) {
    return <div>Loading weather data...</div>;
  }

  const { location, current } = data;

  return (
    <div>
      <h2>Weather in {location.name} ( {location.country} )</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
      <p>Humidity: {current.humidity}%</p>
    </div>
  );
};

export default WeatherComponent;
