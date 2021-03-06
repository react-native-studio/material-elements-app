import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ToastExample from '../Lib/elements/src/METester/ToastExample';
import {SimpleToolbar} from '../Lib/elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class ToastScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Toast'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Toast"/>
    <ToastExample/>
  </View>)
  }
}
