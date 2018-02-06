import { StackNavigator,DrawerNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import ButtonScreen from "../Containers/ButtonScreen";

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  ButtonScreen: { screen: ButtonScreen }
}, {
  // Default config for all screens
  //headerMode: 'none',
  initialRouteName: 'ButtonScreen',
  navigationOptions: {
    //headerStyle: styles.header
  }
})

export default PrimaryNav
