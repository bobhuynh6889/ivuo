/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet} from 'react-native';

import RootNavigation from './src/navigation/AppNavigation';
// import BottomTabs from './src/navigation/BottomTabs';

function App(): JSX.Element {
  return (
    <View style={style.container}>
      <RootNavigation />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
