import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const Header = (props) => {
  return (
    <Appbar.Header theme={{colors: {primary: '#00aaff'}}} style={styles.header}>
      <Title style={styles.headerTitle}>{props.name}</Title>
    </Appbar.Header>
  );
};

export default Header;
const styles = StyleSheet.create({
  headerTitle: {
    color: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
