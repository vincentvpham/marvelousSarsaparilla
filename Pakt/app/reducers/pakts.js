import { REQUEST_PAKTS, RECEIVE_PAKTS, SET_CURRENT_PAKT, ACCEPT_PAKT } from '../actions';
var _ = require('lodash');

function p_u(state, action) {
  switch (action.type) {
    case ACCEPT_PAKT:
      if (state.id !== action.id) {
        return state;
      }
      return Object.assign({}, state, {
        accepted: true,
      });
    default:
      return state;
  }
}

function pakt(state, action) {
  switch (action.type) {
    case ACCEPT_PAKT:
      return Object.assign({}, state, {
        Pakt_Users: state.map(user =>
          p_u(user, action)
        ),
      });
    default:
      return state;
  }
}

function pakts(state = {
  isFetching: false,
  items: [],
  currentPakt: undefined,
  currentPaktIndex: undefined,
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
      const currentPaktIndex = _.findIndex(state.items,
        { id: action.currentPakt.id });
      return Object.assign({}, state, {
        currentPakt: action.currentPakt,
        currentPaktIndex,
      });
    case ACCEPT_PAKT:
      return Object.assign({}, state, {
        items: state.items.map(i =>
          pakt(i, action)
        ),
        currentPakt: pakt(state.currentPakt, action),
      });
    default:
      return state;
  }
}

export default pakts;
