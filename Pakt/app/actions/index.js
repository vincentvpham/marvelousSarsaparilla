import fetch from 'isomorphic-fetch';
export const REQUEST_PAKTS = 'REQUEST_PAKTS';
export const RECEIVE_PAKTS = 'RECEIVE_PAKTS';

function requestPakts() {
  return {
    type: REQUEST_PAKTS,
  }
}

function receivePakts(json) {
  return {
    type: RECEIVE_PAKTS,
    pakts: json,
    receivedAt: Date.now(),
  }
}

function fetchPakts() {
  return dispatch => {
    dispatch(requestPakts());
    return fetch('http://127.0.0.1:3000/api/pakts/')
      .then(response => response.json())
      .then(json => dispatch(receivePakts(json)));
  };
}

// function shouldFetchPakts(state, reddit) {
//   const posts = state.postsByReddit[reddit]
//   if (!posts) {
//     return true
//   }
//   if (posts.isFetching) {
//     return false
//   }
//   return posts.didInvalidate
// }

export function fetchPaktsIfNeeded() { 
  return (dispatch, getState) => {
    // if (shouldFetchPakts(getState(), reddit)) {
    if (true) {
      return dispatch(fetchPakts());
    }
  };
}
