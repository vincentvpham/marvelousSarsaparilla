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
import NavBar from './NavBar';
import SwitchRoute from '../containers/SwitchRoute';
import { Router, routerReducer, Route, Container, Animations, Schema } from 'react-native-redux-router';
import Login from '../components/Login';
import Pakts from '../components/Pakts';
import Camera from '../components/Camera';

const App = () => (
  <View>{/*
    <Router>
      <Route name="login" component={Login} initial={true} title="Login"/>
      {/*<Route name="pakts" component={Pakts} title="Pakts"/>
      <Route name="camera" component={Camera} title="Camera"/>
    </Router>*/}
    <SwitchRoute /> 

  </View>
)

export default App;
