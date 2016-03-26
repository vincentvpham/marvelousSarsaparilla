import { connect } from 'react-redux';
import { loginNewUser, beginLoginFbUser } from '../actions';
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
    beginLoginFbUser: () => {
      dispatch(beginLoginFbUser());
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
