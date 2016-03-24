import { SET_CURRENT_USER, LOGOUT_CURRENT_USER, REQUEST_FRIENDS, RECEIVE_FRIENDS } from '../actions';

function users(state = {
  currentUser: undefined,
}, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return Object.assign({}, state, {
        currentUser: action.currentUser,
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