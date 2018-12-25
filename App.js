import React from 'react'
import {
  Text, 
  Platform, 
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native'
import SearchInput from './src/components/SearchInput'

export default class App extends React.Component {
  state = { text: '', location: '' }

  _handleChnageLocation = text => this.setState({ text })

  _handleSubmit = () => {
    const { text } = this.state
    if ( !text ) return

    this.setState({ location: text, text: '' })
  }

  render() {
    const { text, location } = this.state
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
          source={require('./assets/bg/clear.png')}
          style={styles.imageContainer}
        >
          <Text style={[styles.largeText, styles.textStyle]}>{ location }</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

          <SearchInput 
            placeholder="Search any city"
            handleChangeText={ this._handleChnageLocation }
            value={ text }
            onSubmit={ this._handleSubmit }
          />
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18  
  },
  textStyle: {
    textAlign: 'center',
    fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto',
    color: '#4a4a4a'
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
