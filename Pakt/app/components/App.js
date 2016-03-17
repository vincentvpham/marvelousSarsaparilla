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
import Create from './Create';
import {Scene, Router, TabBar, Modal, Schema, Actions} from 'react-native-router-flux'

var styles = StyleSheet.create({
  navbar: {
    marginTop: 40,
  }
});

const scenes = Actions.create(
        <Scene  key="root">
            <Scene type="replace" key="login" initial={true} component={Login} title="Login"/>
            <Scene key="creater" type="replace" component={Create} title="Create"/>
            {/*<Scene key="camera" type="replace" component={Camera} title="Camera"/>*/}
            {/*<Scene key="pakts" type="replace" component={Pakts} title="Pakts"/>*/}
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
