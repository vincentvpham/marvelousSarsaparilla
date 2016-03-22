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
import LoginUser from '../containers/LoginUser';
import CreatePakt from '../containers/CreatePakt';
import GetPakts from '../containers/GetPakts';
import Camera from '../components/Camera';
import GetCurrentPakt from '../containers/GetCurrentPakt';

import { Scene, Router, TabBar, Modal, Schema, Actions } from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene type="replace" key="login" initial={true} component={LoginUser} title="Login" />
    <Scene key="createPakt" type="replace" component={CreatePakt} title="CreatePakt"/>
    <Scene key="paktList" type="replace" component={GetPakts} title="PaktList" />
    <Scene key="camera" type="replace" component={Camera} title="Camera" />
    <Scene key="individualPakt" component={GetCurrentPakt} title="Individual Pakt" />
  </Scene>
);

const App = () => (
  <View style={{ flex: 1 }}>
    <Router style={{ flex: 0.4 }} scenes={scenes} />
    <View style={{ flex: 0.1 }}>
      <SwitchRoute />
    </View>
  </View>
);

export default App;
