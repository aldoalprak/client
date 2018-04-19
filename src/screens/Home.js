import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import BluetoothScan from '../components/BluetoothScan';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AddDevice from './AddDevice';

class Home extends Component {

  static navigationOptions = {
    tabBarLabel: `Treki App`,
    drawerIcon: ({tintColor}) => {
      return (
        <MaterialIcons
          name="track-changes"
          size={24}
          style={{color: tintColor}}
        >
        </MaterialIcons>
      );
    }
  }

  render() {
    return (
      <View>
        <BluetoothScan/>
        <Button
          onPress={() => this.props.navigation.navigate('DrawerOpen')}
          title="Hamburger"
        />
      </View>
    );
  }
}


const Drawer = DrawerNavigator(
  {
    Home: {
      path: '/',
      screen: Home
    },
    AddDevice: {
      path: '/adddevice',
      screen: AddDevice
    }
  },
  {
    initialRouteName: 'Home',
    drawerPosition: 'left'
  }
)

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
})

export default Drawer;
