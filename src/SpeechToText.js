import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Voice from '@react-native-voice/voice';
import Icon from 'react-native-vector-icons/FontAwesome';

const SpeechToText = () => {
  const [isListening, setIsListening] = useState(false);
  const [recognizedText, setRecognizedText] = useState('');

  useEffect(() => {
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (e) => {
    const recognizedText = e.value[0];
    console.log('Recognized Text:', recognizedText);
    setRecognizedText(recognizedText);
  };

  const startListening = async () => {
    try {
      await Voice.start('en-US');
      setIsListening(true);
    } catch (error) {
      console.log(error);
    }
  };

  const stopListening = async () => {
    try {
      await Voice.stop();
      setIsListening(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
        <Icon
          name="microphone"
          size={50}
          color="black"
          style={styles.microphoneIcon1}
        />
      <Text style={styles.title}>Speech to Text</Text>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{recognizedText}</Text>
      </View>
      <TouchableOpacity
        style={[styles.buttonContainer, { backgroundColor: 'black' }]}
        onPress={() => (isListening ? stopListening() : startListening())}
      >
        <Text style={styles.buttonText}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </Text>
        <Icon
          name="microphone"
          size={30}
          color="white"
          style={styles.microphoneIcon}
        />
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
  textContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    width: '90%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
  },
  buttonContainer: {
    width: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
  },
  microphoneIcon: {
    marginLeft: 10,
  },
  microphoneIcon1: {
    marginLeft: 10,
  },
});

export default SpeechToText;
