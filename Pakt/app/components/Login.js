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
import {Actions} from 'react-native-router-flux';
var FBLogin = require('react-native-facebook-login');
var FBLoginManager = require('NativeModules').FBLoginManager;

const styles = StyleSheet.create({
  centerText: {
    marginTop: 200,
  },
});

class Login extends React.Component {
  render(){
    const { loginFbUser, logoutFbUser, beginLoginFbUser } = this.props;
    var _this = this;
    return (
      <View onPress={beginLoginFbUser()}>
        <FBLogin style={{ marginTop: 200 }}
          permissions={['email', 'user_friends']}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          onLogin={function (data) {
            loginFbUser(data.credentials);
            console.log('Logged in!');
            console.log(data);
            _this.setState({ user: data.credentials });
          }}
          onLogout={function () {
            logoutFbUser();
            console.log('Logged out.');
            _this.setState({ user: null });
          }}
          onLoginFound={function (data) {
            console.log('Existing login found.');
            console.log(data);
            _this.setState({ user: data.credentials });
            loginFbUser(data.credentials);

          }}
          onLoginNotFound={function () {
            console.log('No user logged in.');
            _this.setState({ user: null });
          }}
          onError={function (data) {
            console.log('ERROR');
            console.log(data);
          }}
          onCancel={function () {
            console.log('User cancelled.');
          }}
          onPermissionsMissing={function (data) {
            console.log('Check permissions!');
            console.log(data);
          }}
        />         
      </View>
    );
  }
}

module.exports = Login;