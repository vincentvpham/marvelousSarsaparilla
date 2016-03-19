import { REQUEST_PAKTS, RECEIVE_PAKTS, SET_CURRENT_PAKT } from '../actions';
var _ = require('lodash');

function pakts(state = {
  isFetching: false,
  items: [],
  currentPakt: undefined,
}, action) {
  switch (action.type) {
    case REQUEST_PAKTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_PAKTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.pakts,
        lastUpdated: action.receivedAt,
      });
    case SET_CURRENT_PAKT:
      const currentPakt = _.find(state.items, function(pakt) {
        return pakt.id === action.currentPaktId;
      });

      return Object.assign({}, state, {
        currentPakt: currentPakt,
      });
    default:
      return state;
  }
}

export default pakts;
