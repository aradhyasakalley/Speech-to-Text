/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SpeechToText from './src/SpeechToText';
import TextToSpeech from './src/TextToSpeech';
import StackNavigator from './src/StackNavigator';


const App = () => {

  return (
   <StackNavigator/>
  );
}



export default App;
