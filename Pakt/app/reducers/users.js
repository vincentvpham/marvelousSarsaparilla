import { SET_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions';

function pakts(state = {
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
    default:
      return state;
  }
}

export default pakts;
