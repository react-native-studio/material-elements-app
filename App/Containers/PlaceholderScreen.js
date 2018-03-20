import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import Example from '../Lib/material-elements/src/METester/PlaceHolderExample';
import {SimpleToolbar} from '../Lib/material-elements/src/index';
import {StackNavigator} from 'react-navigation'
export default class PlaceholderScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Placeholder'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <ScrollView style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Placeholder"/>
    <Example/>
    </ScrollView>
  </View>)
  }
}
