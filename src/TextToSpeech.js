import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Tts from 'react-native-tts';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TextToSpeech = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    Tts.speak(text);
  };

  return (
    <View style={styles.container}>
      <Icon
          name="multitrack-audio"
          size={80}
          color="black"
          style={styles.microphoneIcon1}
        />
      <Text style={styles.title}>Text to Speech</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text to speak"
        value={text}
        onChangeText={setText}
      />
      <TouchableOpacity style={styles.button} onPress={speakText}>
        <Text style={styles.buttonText}>Speak</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  microphoneIcon1: {
    paddingBottom:20,
    marginLeft: 10,
  },
});

export default TextToSpeech;
