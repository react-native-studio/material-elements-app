import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Example from '../Lib/material-elements/src/METester/ToolbarExample';
import {SimpleToolbar} from '../Lib/material-elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class ToolbarScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Toolbar'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Toolbar"/>
    <Example/>
  </View>)
  }
}
