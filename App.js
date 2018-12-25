import React from 'react'
import {
  Text, 
  View,
  Platform, 
  StyleSheet,
  ImageBackground,
  ActivityIndicator,
  KeyboardAvoidingView
} from 'react-native'
import SearchInput from './src/components/SearchInput'
import { fetchLocationId, fetchWeather } from './src/utils/api'

export default class App extends React.Component {
  state = { 
    text: '', 
    location: '',
    location: '',
    temperature: 0,
    weather: '',
    loading: false,
    error: false
  }

  componentDidMount () {
    this._handleUpdateLocation("San Francisco")
  }

  _handleChangeText = text => this.setState({ text })

  _handleSubmit = () => {
    const { text } = this.state
    if ( !text ) return

    this._handleUpdateLocation( text )
    this.setState({ text: '' })
  }

  _handleUpdateLocation = async city => {
    try {
      this.setState({ loading: true })
      const locationId = await fetchLocationId( city )
      const { location, temperature, weather } = await fetchWeather( locationId )
      this.setState({ 
        location, 
        temperature, 
        weather, 
        loading: false, 
        error: false 
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: true
      })
    }
  }

  render() {
    const { text, location, temperature, weather, loading, error } = this.state
    return (
      <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding"
      >
        <ImageBackground
          source={require('./assets/bg/clear.png')}
          style={styles.imageContainer}
        >
        {
          loading 
            ? <ActivityIndicator color="#4a4a4a" size="large"/>
            : (error 
                ? <Text style={[styles.smallText, styles.textStyle]}>
                    Could not load weather, please try a different
                    city.
                  </Text>
                : <View>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    { location }
                  </Text>
                  <Text style={[styles.smallText, styles.textStyle]}>
                    { weather }
                  </Text>
                  <Text style={[styles.largeText, styles.textStyle]}>
                    { temperature }º
                  </Text>
                </View> 
              )
        }
         <SearchInput 
            placeholder="Search any city"
            handleChangeText={ this._handleChangeText }
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
