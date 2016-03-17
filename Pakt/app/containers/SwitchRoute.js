import { connect } from 'react-redux';
// import { changeRoute } from '../actions';
import NavBar from '../components/NavBar';
import { changeRoute } from '../actions';
import {Actions} from 'react-native-router-flux'

const mapDispatchToProps = (dispatch) => {
  return {
    onNavPress: (name) => {
      Actions[name]();
    },
  };
};

const SwitchRoute = connect(
  null,
  mapDispatchToProps
)(NavBar);

export default SwitchRoute;
