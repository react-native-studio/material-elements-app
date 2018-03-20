import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Example from '../Lib/material-elements/src/METester/MenuExample';
import {SimpleToolbar} from '../Lib/material-elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class MenuScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Menu'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Menu"/>
    <Example/>
  </View>)
  }
}
