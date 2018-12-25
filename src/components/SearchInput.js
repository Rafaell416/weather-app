'use strict'
import React from 'react'
import {
  TextInput,
  StyleSheet
} from 'react-native'
import PropTypes from 'prop-types'

function SearchInput ({ placeholder }) {
  return (
    <TextInput
      placeholder={ placeholder }
      style={ styles.textInput }
      placeholderTextColor='white'
      autoCorrect={ false }
      clearButtonMode="while-editing"
      keyboardAppearance="dark"
      returnKeyType="search"
      underlineColorAndroid="transparent"
    />
  )
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
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

export default SearchInput