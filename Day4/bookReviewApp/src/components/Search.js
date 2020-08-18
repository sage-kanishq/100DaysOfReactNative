import React, {Component, useState} from 'react';
import {Button, StyleSheet, TextInput, View, Text} from 'react-native';

export default function Search({pressHandler, parseResult}) {
  const [bookName, setBookName] = useState('');
  return (
    <View>
      <TextInput
        placeholder="Who's world do you want to dive in"
        style={styles.textInput}
        onChangeText={(text) => {
          setBookName(text);
        }}
      />
      <Button
        title="Search"
        onPress={() => {
          // pressHandler(bookName);
          // setTimeout(parseResult, 3000);
          parseResult(bookName);
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
  },
});
