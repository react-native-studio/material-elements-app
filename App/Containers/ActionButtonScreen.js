import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ActionButtonExample from 'material-elements/src/METester/ActionButtonExample';
import {SimpleToolbar} from 'material-elements';
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
      leftIcon={{name:'menu'}} title="Button"/>
    <ActionButtonExample/>
  </View>)
  }
}
