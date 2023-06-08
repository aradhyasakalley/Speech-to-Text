import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from './Main';
import SpeechToText from './SpeechToText';
import TextToSpeech from './TextToSpeech';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Speech to Text" component={SpeechToText} />
        <Stack.Screen name="Text to Speech" component={TextToSpeech} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})