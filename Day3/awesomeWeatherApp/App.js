import React, {useState} from 'react';
import {LogBox} from 'react-native';
import Home from './src/screens/HomeScreen';

const App = () => {
  // const [city, setCity] = useState('');
  return (
    <>
      <Home />
    </>
  );
};

export default App;

LogBox.ignoreAllLogs(true);
