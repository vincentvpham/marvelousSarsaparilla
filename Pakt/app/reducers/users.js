import { SET_CURRENT_USER, LOGIN_USER, LOGOUT_CURRENT_USER, REQUEST_FRIENDS, RECEIVE_FRIENDS } from '../actions';

function users(state = {
  currentUser: undefined,
  loggingIn: false,
}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
        loggingIn: false,
      });
    case LOGIN_USER:
      return Object.assign({}, state, {
        loggingIn: true,
      });
    case LOGOUT_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: undefined,
      });
    case REQUEST_FRIENDS:
      return Object.assign({}, state, {
        isFetchingFriends: true,
      });
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, {
        isFetchingFriends: false,
        friends: action.friends,
        lastUpdated: action.receivedAt,
      });
    default:
      return state;
  }
}

export default users;