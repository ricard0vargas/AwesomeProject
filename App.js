/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}> 
      <Text style={styles.welcome}>Hola Mundo</Text>
      <Text style={[styles.welcome, {flex: 1,}]}>Hola Mundo</Text>
      <Text style={styles.welcome}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    //alignItems: 'center',
    backgroundColor: 'orange',
  },
  welcome:{
    flex: 2,
    backgroundColor: 'pink',
    fontSize: 20,
    //textAlign: 'center',
    margin: 10,
  },
  
});

export default App;
