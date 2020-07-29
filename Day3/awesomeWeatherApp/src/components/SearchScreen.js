/* eslint-disable semi */
import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
// import {Appbar, Title} from 'react-native-paper';
import Header from './Header';

const Search = ({setSearchResult, value}) => {
  return (
    <View>
      <TextInput
        label="Select City"
        value={value}
        theme={{colors: {primary: '#00aaff'}}}
        onChangeText={(text) => {
          setSearchResult(text);
        }}
      />

    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  button: {
    margin: 10,
  },
  buttonText: {
    color: '#fff',
  },
});
