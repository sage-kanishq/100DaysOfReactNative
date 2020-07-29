import React, {useState} from 'react';
import {
  StatusBar,
  Text,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Search from '../components/SearchScreen';
import {globalStyles} from '../global/globalStyles.js';
import Weather from '../components/WheatherScreen';
import Header from '../components/Header';

const Home = () => {
  const [city, setCity] = useState('');
  return (
    <>
      <Header name="Weather App" />
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        style={globalStyles.container}>
        <ScrollView style={globalStyles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#00aaff" />
          <Search setSearchResult={setCity} value={city} />
          <Weather city={city} />
        </ScrollView>
      </TouchableWithoutFeedback>
    </>
  );
};

export default Home;