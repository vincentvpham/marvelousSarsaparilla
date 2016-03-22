import { connect } from 'react-redux';
import { loginNewUser } from '../actions';
import { logoutUser } from '../actions';
import Login from '../components/Login';
import {Actions} from 'react-native-router-flux';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginFbUser: (userCrendentials) => {
      dispatch(loginNewUser(userCrendentials));
    },

    logoutFbUser: () => {
      dispatch(logoutUser());
    },

  };
};

const LoginUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginUser;
