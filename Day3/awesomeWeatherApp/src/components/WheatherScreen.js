import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image, ActivityIndicator} from 'react-native';
import {Button, Card, TextInput, Title} from 'react-native-paper';
// import {Item} from 'react-native-paper/lib/typescript/src/components/List/List';
// import {Appbar, Title} from 'react-native-paper';
import Header from './Header';
import {globalStyles} from '../global/globalStyles';
const Weather = ({city}) => {
  const [info, setInfo] = useState({
    name: '',
    temp: '',
    humidity: '',
    desc: '',
    icon: '',
  });
  useEffect(() => {
    getWeather();
  });
  const getWeather = () => {
    if (city !== '') {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=5bb859de48ef329e3758640b3fe1ddcc&units=metric`,
      )
        .then((data) => data.json())
        .then((result) => {
          setInfo({
            name: result.name,
            humidity: result.main.humidity,
            temp: result.main.temp,
            desc: result.weather[0].description,
            icon: result.weather[0].icon,
          });
        });
    }
  };
  return (
    <View style={{...globalStyles.container, justifyContent: 'center'}}>
      <View>
        <Title
          style={{
            ...globalStyles.title,
            color: '#00aaff',
            alignContent: 'center',
          }}>
          {info.name}
        </Title>
        <Image
          style={globalStyles.image}
          source={{
            uri: 'https://openweathermap.org/img/w/' + info.icon + '.png',
          }}
        />
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Name - {info.name}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Temperature - {info.temp}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Humidity - {info.humidity}</Title>
        </Card>
        <Card style={styles.card}>
          <Title style={styles.cardTitle}>Description - {info.desc}</Title>
        </Card>
      </View>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
  cardTitle: {
    color: 'purple',
  },
  card: {
    margin: 10,
    padding: 18,
    elevation: 10,
  },
});

