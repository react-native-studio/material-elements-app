import React,{Component} from 'react';
import {StyleSheet,View,Text} from 'react-native';
import PropTypes from 'prop-types';
import {IconToggle} from '../Lib/elements/src/index'
import StepIcon from '../Lib/elements/src/Steppers/StepIcon'
export default class SteppersScreen extends Component{
  render(){
    return(<View style={{marginTop:24}}>
      <StepIcon horizontal={false} text="1"/>
    </View>)
  }
}
