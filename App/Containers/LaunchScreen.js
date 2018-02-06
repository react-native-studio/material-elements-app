import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  static navigationOptions={
    title:'lmy'
  }
  render () {
    return (
      <View style={styles.mainContainer}>
      </View>
    )
  }
}
