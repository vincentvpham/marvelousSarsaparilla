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
var FBLogin = require('react-native-facebook-login');

const styles = StyleSheet.create({
  centerText: {
    marginTop: 200,
  },
});

class Login extends React.Component {
  render(){
    return (
      <View >
        <FBLogin style= {styles.centerText} />               
      </View>
    );
  }
}

module.exports = Login;