import React, {useEffect} from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import Result from './src/screens/ResultScreen';

const App = () => {
  useEffect(() => {});
  return (
    <>
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <Result query="Harry Potter" />
    </TouchableWithoutFeedback>
    </>
  );
};

export default App;
