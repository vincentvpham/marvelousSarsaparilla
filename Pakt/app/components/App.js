import GetPakts from '../containers/GetPakts';
import LoginUser from '../containers/LoginUser';
import Landing from '../components/Landing';
import CreatePakt from '../containers/CreatePakt';
import Camera from '../components/Camera';
import GetCurrentPakt from '../containers/GetCurrentPakt';
import { connect } from 'react-redux';
import { Scene, Router, TabBar, Modal, Schema, Actions, Switch } from 'react-native-router-flux';
import SendPicture from '../containers/SendPicture';
import Header from '../components/Header';

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

//tabs for bottom navBar
class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'blue' :'black'}}>{this.props.title}</Text>
    );
  }
}

//function determines if user is logged in, if not, returns the 'login' id 
const mapStateToProps = (state) => {
  return {
    selector: () => {
      if (!state.users.currentUser) {
        return 'landing';
      } else {
        return 'tabbar';
      }
    },
  };
};

const App = () => (
  <View style={{ flex: 1, backgroundColor: '#F5FCFF' }}>
    <View style={{ flex: .12 }}>
      <Header title={'PAKT'}/>
    </View>
    <View style={{ flex: .88 }}>
      <Router scenes={scenes}/>
    </View>
  </View>
);

const scenes = Actions.create(
  <Scene key="root"  component={connect(mapStateToProps, null)(Switch)} tabs={true} >
    <Scene key="landing"  title="Landing"  component={Landing}></Scene>
    <Scene key="tabbar" tabs={true} default='getPakts'>
      <Scene hideNavBar='true' key="pakts" title="Pakts" icon={TabIcon} >
        <Scene key="getPakts" component={GetPakts} title="GetPakts"/>
        <Scene key="individualPakt" component={GetCurrentPakt} title="IndividualPakt"/>
      </Scene>
      <Scene hideNavBar='true' key="createPakt" component={CreatePakt} title="Create Pakt" icon={TabIcon}/>
      <Scene hideNavBar='true' key="camera" component={Camera, SendPicture} title="Camera" icon={TabIcon} />
    </Scene>
  </Scene>
);

export default App;