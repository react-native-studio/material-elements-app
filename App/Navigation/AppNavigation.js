import { StackNavigator,DrawerNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'
import ButtonScreen from "../Containers/ButtonScreen";
import CheckboxScreen from "../Containers/CheckboxScreen";
import ToastScreen from "../Containers/ToastScreen";
import AvatarScreen from "../Containers/AvatarScreen";
import ActionButtonScreen from "../Containers/ActionButtonScreen";
import BottomSheetScreen from "../Containers/BottomSheetScreen";
import ListItemScreen from "../Containers/ListItemScreen";
import MenuScreen from "../Containers/MenuScreen";
import DialogScreen from "../Containers/DialogScreen";
import ToolbarScreen from "../Containers/ToolbarScreen";
import SimpleToolbarScreen from "../Containers/SimpleToolbarScreen";
import ScrollableDrawerItems from './ScrollableDrawerItems'
import PlaceholderScreen from "../Containers/PlaceholderScreen";
import IndicatorScreen from "../Containers/IndicatorScreen";
import BadgeScreen from "../Containers/BadgeScreen";

// Manifest of possible screens
const PrimaryNav = DrawerNavigator({
  ButtonScreen: { screen: ButtonScreen },
  CheckboxScreen:{screen:CheckboxScreen},
  Toast:{screen:ToastScreen},
  Avatar:{screen:AvatarScreen},
  ActionButton:{screen:ActionButtonScreen},
  BottomSheet:{screen:BottomSheetScreen},
  lISTITEM:{screen:ListItemScreen},
  MENU:{screen:MenuScreen},
  DIALOG:{screen:DialogScreen},
  TOOLBAR:{screen:ToolbarScreen},
  STOOLBAR:{screen:SimpleToolbarScreen},
  placeholder:{screen:PlaceholderScreen},
  Indicator:{screen:IndicatorScreen},
  Badge:{screen:BadgeScreen}
}, {
  // Default config for all screens
  //headerMode: 'none',
  initialRouteName: 'ButtonScreen',
  contentComponent:ScrollableDrawerItems,
  navigationOptions: {
    //headerStyle: styles.header
  }
})

export default PrimaryNav
