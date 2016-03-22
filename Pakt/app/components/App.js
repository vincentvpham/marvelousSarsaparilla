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
import TabView from './TabView'
import { Scene, Router, TabBar, Modal, Schema, Actions, Switch } from 'react-native-router-flux';

class TabIcon extends React.Component {
    render(){
        return (
            <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selector: () => {
      console.log(state, 'we have a user??');
      if (!state.users.currentUser) {
        return 'login';
      } else {
        return 'tabbar';
      }
    },
  };
};

const App = () => (
  <View style={{ flex: 1 }}>
    <Router style={{ flex: 0.4 }} scenes={scenes}/>
    <View style={{ flex: 0.1 }}>
    </View>
  </View>
);

// <Scene  key="login" type="replace" component={LoginUser}/>
// <Scene key="createPakt" type="replace" component={CreatePakt}/>
// <Scene key="paktList" type="replace" component={GetPakts}/>
// <Scene key="camera" type="replace" component={Camera}/>
// <Scene key="individualPakt" component={GetCurrentPakt}/>

const scenes = Actions.create(
  <Scene key="root"  component={connect(mapStateToProps, null)(Switch)} tabs={true}>
    <Scene key="login"  title="Login"  component={LoginUser}></Scene>
    <Scene key="tabbar" tabs={true} default="tab4" >
      <Scene key="tab1"  title="Tab #1" icon={TabIcon} navigationBarStyle={{backgroundColor:'red'}} titleStyle={{color:'white'}}>
          <Scene key="tab1_1" component={TabView} title="Tab #1_1" onRight={()=>alert("Right button")} rightTitle="Right" />
          <Scene key="tab1_2" component={TabView} title="Tab #1_2" titleStyle={{color:'black'}}/>
      </Scene>
      <Scene key="tab2" initial={true} title="Tab #2" icon={TabIcon}>
          <Scene key="tab2_1" component={TabView} title="Tab #2_1" onLeft={()=>alert("Left button!")} leftTitle="Left"/>
          <Scene key="tab2_2" component={TabView} title="Tab #2_2"/>
      </Scene>
      <Scene key="tab3" component={CreatePakt} title="Tab #3" hideTabBar={true} icon={TabIcon}/>
      <Scene key="tab4" component={CreatePakt} title="Tab #4" icon={TabIcon}/>
      <Scene key="tab5" component={TabView} title="Tab #5" icon={TabIcon} />
    </Scene>
  </Scene>
);

export default App;
