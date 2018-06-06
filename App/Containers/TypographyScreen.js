import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Example from '../Lib/elements/src/METester/TypographyExample';
import {SimpleToolbar} from '../Lib/elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class TypographyScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Typography'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Typography"/>
    <Example/>
  </View>)
  }
}
