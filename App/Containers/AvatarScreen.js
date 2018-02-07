import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import AvatarExample from 'material-elements/src/METester/AvatarExample';
import {SimpleToolbar} from 'material-elements';
import {StackNavigator} from 'react-navigation'
export default class AvatarScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Avatar'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Button"/>
    <AvatarExample/>
  </View>)
  }
}
