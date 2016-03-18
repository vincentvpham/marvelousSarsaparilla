import { REQUEST_PAKTS, RECEIVE_PAKTS } from '../actions';

function pakts(state = {
  isFetching: false,
  items: [],
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
    default:
      return state;
  }
}

export default pakts;
