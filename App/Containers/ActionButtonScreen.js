import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ActionButtonExample from '../Lib/elements/src/METester/ActionButtonExample';
import {SimpleToolbar} from '../Lib/elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class ActionButtonScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'ActionButton'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="ActionButton"/>
    <ActionButtonExample/>
  </View>)
  }
}
