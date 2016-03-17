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
import SwitchRoute from '../containers/SwitchRoute';
import Login from './Login';
import Creator from './Creator';
import PaktList from './PaktList';

import {Scene, Router, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

const scenes = Actions.create(
  <Scene  key="root">
    <Scene type="replace" key="login" initial={true} component={Login} title="Login"/>
    <Scene key="creator" type="replace" component={Creator} title="Create"/>
    <Scene key="paktList" type="replace" component={PaktList} title="PaktList"/>
    {/*<Scene key="camera" type="replace" component={Camera} title="Camera"/>*/}
  </Scene>
);

const App = () => (
  <View style={{flex: 1}}>
    <Router style={{flex: .4}} scenes={scenes}/>
    <View style={{flex: .1}}>
      <SwitchRoute/> 
    </View>
  </View>
)

export default App;
