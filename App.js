/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './src/components/Header'
import Converter from './src/components/Converter'

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.header}>
        <Header headerText='Currency Converter' />
      </SafeAreaView>
      <Converter />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#788B91'
  }

});

export default App;
