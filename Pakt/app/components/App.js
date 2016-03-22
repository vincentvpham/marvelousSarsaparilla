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
import LoginUser from '../containers/LoginUser';
import CreatePakt from '../containers/CreatePakt';
import GetPakts from '../containers/GetPakts';
import Camera from '../components/Camera';
import GetCurrentPakt from '../containers/GetCurrentPakt';
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Switch } from 'react-native-router-flux';


class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'blue' :'black'}}>{this.props.title}</Text>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selector: () => {
      console.log(state, 'the state upon page render, do we have a user logged in?');
      //if no user is present on the state, we'll route to the login page
      // for some reason , even though I am logged in, the state does not show so, problem with just taylor's emulator?
      //commenting out for now, just showing our other pages
      // if (!state.users.currentUser) {
      //   return 'login';
      // } else {
        return 'tabbar';
      // }
    },
  };
};

const App = () => (
  <View style={{ flex: 1 }}>
    <Router scenes={scenes}/>
  </View>
);

const scenes = Actions.create(
  <Scene key="root"  component={connect(mapStateToProps, null)(Switch)} tabs={true}>
    <Scene key="login"  title="Login"  component={LoginUser}></Scene>
    <Scene key="tabbar" tabs={true} default='createPakt'>
      <Scene key="createPakt" component={CreatePakt} title="Create Pakt" icon={TabIcon}/>
      <Scene key="camera" component={Camera} title="Camera" icon={TabIcon} />
      <Scene key="getPakts" component={GetPakts} title="Pakts" icon={TabIcon} />
    </Scene>
  </Scene>
);

export default App;
