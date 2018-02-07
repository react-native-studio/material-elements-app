import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import Example from 'material-elements/src/METester/ListItemExample';
import {SimpleToolbar} from 'material-elements';
import {StackNavigator} from 'react-navigation'
export default class ListItemScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'ListItem'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Button"/>
    <Example/>
  </View>)
  }
}
