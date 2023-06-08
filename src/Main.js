import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'
const Main = () => {
    const navigation = useNavigation();
    return (
      <View style={styles.container}>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Speech to Text')}
        >
          <Text style={styles.buttonText}>Speech to Text</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Text to Speech')}
        >
          <Text style={styles.buttonText}>Text to Speech</Text>
        </TouchableOpacity>
      </View>
    );
  };
  

export default Main

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 5,
      marginVertical: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });