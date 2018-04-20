import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  StatusBar,
  Image
} from 'react-native'

class Logo extends Component {
  render() { 
    return (  
    <View style={styles.container}>
      <Image style={{width: 40 , height: 70}}
             source={require('../logo.png')}
      />
      <Text style={styles.logoText}> Welcome to Trecky </Text>
    </View>
    )
  }
}
 
const styles= StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  logoText:{
    marginVertical: 15,
    fontSize: 18,
    color: 'rgba(255,255,255, 0.7)'
  }
}) 
export default Logo ;