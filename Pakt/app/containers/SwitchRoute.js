import { connect } from 'react-redux';
// import { changeRoute } from '../actions';
import NavBar from '../components/NavBar';
import { changeRoute } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onNavPress: (name) => {
      dispatch(changeRoute(name));
    },
  };
};

const SwitchRoute = connect(
  null,
  mapDispatchToProps
)(NavBar);

export default SwitchRoute;
