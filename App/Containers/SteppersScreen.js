import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import {IconToggle} from '../Lib/material-elements/src/index'
import StepIcon from '../Lib/material-elements/src/Steppers/StepIcon'
export default class SteppersScreen extends Component{
  render(){
    return(<View style={{marginTop:24}}>
      <StepIcon horizontal={false} text="1"/>
    </View>)
  }
}
