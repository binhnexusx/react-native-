/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import RenderText from './src/components/common/RenderText';
import Greeting from './src/components/common/Greeting';
import Count from './src/components/common/Count';
import LinearEquationSolver from './src/components/common/LinearEquationSolver';
import Parent from './src/components/common/Parent.jsx';
function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <LinearEquationSolver />
      <Parent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
