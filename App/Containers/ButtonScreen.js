import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import ButtonExample from 'material-elements/src/METester/ButtonExample';
import {SimpleToolbar} from 'material-elements';
import {StackNavigator} from 'react-navigation'
class Button_ extends Component{
  render(){
    return (<ButtonExample/>)
  }
}
export default class ButtonScreen extends Component{
  NavigationActions=this.props.navigation
  static navigationOptions={
    title:'Button'
  }
  componentDidMount(){
  }
  render(){
  return(<View style={{flex:1}}>
    <SimpleToolbar onLeftIconPress={()=>this.NavigationActions.navigate('DrawerOpen')} leftIconName={'menu'} title="Button"/>
    <ButtonExample/>
  </View>)
  }
}
