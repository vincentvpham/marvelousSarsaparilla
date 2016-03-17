import React, {
  AppRegistry,
  Component,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PropTypes,
} from 'react-native';
import {Actions} from 'react-native-router-flux'

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'lightgray',
    flex: 1,
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  navItem: {
    flex: 1,
    textAlign: 'center'

  }
});

const NavBar = ({ onNavPress }) => (
  <View style= {styles.navBar}>    
    <Text style= {styles.navItem} onPress={Actions.pakts}>Pakts</Text>
    <Text style= {styles.navItem} onPress={Actions.login}> Login </Text>
  </View>
);

export default NavBar;
