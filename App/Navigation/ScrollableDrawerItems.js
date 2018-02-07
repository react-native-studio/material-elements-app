import React,{Component} from 'react';
import {StyleSheet,View,Text,ScrollView,Platform} from 'react-native';
import PropTypes from 'prop-types';
import { DrawerItems,SafeAreaView } from 'react-navigation';
import {Color} from 'material-elements'

const ScrollableDrawerItems = (props) => (
  <ScrollView style={styles.container}>
    <View style={styles.headerContainer}>
    <Text style={{fontSize:24,color:'white'}}>material-elements</Text>
    </View>
      <DrawerItems {...props} />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer:{
    height:Platform.OS==='ios'?44+20:56,
    alignItems:'center',
    justifyContent:'center',
    paddingTop: Platform.OS==='ios'?20:0,
    backgroundColor:Color.blue500
  }
});
export default ScrollableDrawerItems
