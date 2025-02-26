import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RootStack from './src/RootStack';

function App(): React.JSX.Element {

  return (
    <NavigationContainer>
    <RootStack/>
    </NavigationContainer>
    

  );
}

const styles = StyleSheet.create({
});

export default App;
