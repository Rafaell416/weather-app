import React from 'react'
import {
  Text, 
  View,
  Platform, 
  StyleSheet,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
      >
        <Text style={[styles.largeText, styles.textStyle]}>Barranquilla</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24º</Text>
        <TextInput
          placeholder="Search any city"
          style={ styles.textInput }
          placeholderTextColor='white'
          autoCorrect={ false }
          clearButtonMode="while-editing"
          keyboardAppearance="dark"
          returnKeyType="search"
        />
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18  
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
  },
  textInput: {
    height: 40,
    width: 300,
    marginTop: 20,
    backgroundColor: '#bdc3c7',
    paddingHorizontal: 10,
    color: 'white',
    alignSelf: 'center',
    marginHorizontal: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation: 5,
  }
})
