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
  centerText: {
    marginTop: 200,
  },
});

class Login extends React.Component {
  render(){
    return (
      <View >
        <Text style= {styles.centerText} >Login page</Text>               
      </View>
    );
  }
}

module.exports = Login;