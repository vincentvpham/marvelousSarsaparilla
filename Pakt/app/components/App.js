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
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Switch } from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
    selector: () => {
      console.log(state, 'we have a user??');
      if (!state.users.currentUser) {
        return 'login';
      } else {
        return 'createPakt';
      }
    },
  };
};



const App = () => (
  <View style={{ flex: 1 }}>
    <Router style={{ flex: 0.4 }} scenes={scenes}/>
    <View style={{ flex: 0.1 }}>
      <SwitchRoute />
    </View>
  </View>
);

const scenes = Actions.create(
  <Scene key="root"  component={connect(mapStateToProps, null)(Switch)} tabs={true}
               selector={props=>props.items ? "CreatePakt" : "Login"}>
    <Scene  key="login" type="replace" component={LoginUser}/>
    <Scene key="createPakt" type="replace" component={CreatePakt}/>
    <Scene key="paktList" type="replace" component={GetPakts}/>
    <Scene key="camera" type="replace" component={Camera}/>
    <Scene key="individualPakt" component={GetCurrentPakt}/>
  </Scene>
);

export default App;
