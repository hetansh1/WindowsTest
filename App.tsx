/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainText}>Welcome back to Windows.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'aqua',
  },
  mainText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
