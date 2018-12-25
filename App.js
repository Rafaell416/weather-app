import React from 'react'
import {
  Text, 
  Platform, 
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native'
import SearchInput from './src/components/SearchInput'

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
        <SearchInput placeholder="Search any city"/>
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
  }
})
