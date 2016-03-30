import { REQUEST_PAKTS, REFRESH_PAKTS, RECEIVE_PAKTS, SET_CURRENT_PAKT, ACCEPT_PAKT, DECLINE_PAKT } from '../actions';
var _ = require('lodash');

function paktUser(state, action) {
  switch (action.type) {
    case ACCEPT_PAKT:
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
        Pakt_User: paktUser(state.Pakt_User, action),
      });
    default:
      return state;
  }
}

function pakts(state = {
  isFetching: false,
  isRefreshing: false,
  items: [],
  currentPakt: undefined,
  currentPaktIndex: undefined,
}, action) {
  switch (action.type) {
    case REQUEST_PAKTS:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case REFRESH_PAKTS:
      return Object.assign({}, state, {
        isRefreshing: true,
      });
    case RECEIVE_PAKTS:
      return Object.assign({}, state, {
        isFetching: false,
        isRefreshing: false,
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
        items: state.items.map((item, index) => {
          if (index === state.currentPaktIndex) {
            return pakt(item, action);
          }
          return item;
        }
      ),
        currentPakt: pakt(state.currentPakt, action),
      });
    case DECLINE_PAKT:
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, state.currentPaktIndex),
          ...state.items.slice(state.currentPaktIndex + 1),
        ],
      });
    default:
      return state;
  }
}

export default pakts;
