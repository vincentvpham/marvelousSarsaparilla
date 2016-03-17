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
import Pakts from './Pakts';
import {Scene, Router, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

var styles = StyleSheet.create({
  navbar: {
    marginTop: 40,
  }
});

const scenes = Actions.create(
        <Scene  key="root">
            <Scene type="replace" key="login" initial={true} component={Login} title="Login"/>
            <Scene key="pakts" type="replace" component={Pakts} title="Pakts"/>
            {/* <Scene key="camera" component={Camera} title="Camera"/>*/}
        </Scene>
);

const App = () => (
  <View style={{flex: 1}}>
    <Router style={{flex: .4}} scenes={scenes}/>
    <View style={{flex: .1}}>
      <SwitchRoute style= {styles.navItem}/> 
    </View>
  </View>
)

export default App;
