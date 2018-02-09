import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Example from 'material-elements/src/METester/SimpleToolbarExample';
import {SimpleToolbar} from 'material-elements';
import {StackNavigator} from 'react-navigation'
export default class SimpleToolbarScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'SimpleToolbar'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="SimpleToolbar"/>
    <Example/>
  </View>)
  }
}
