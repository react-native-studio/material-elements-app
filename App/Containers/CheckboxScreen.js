import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import CheckboxExample from 'material-elements/src/METester/CheckboxExample';
import RadioButtonExample from 'material-elements/src/METester/RadioButtonExample'
import {SimpleToolbar} from 'material-elements';
import {StackNavigator} from 'react-navigation'
class Button_ extends Component{
  render(){
    return (<ButtonExample/>)
  }
}
export default class CheckboxScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Chexbox && Radio'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar
      onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')}
      leftIcon={{name:'menu'}} title="Chexbox && Radio"/>
    <CheckboxExample/>
    <RadioButtonExample/>
  </View>)
  }
}
