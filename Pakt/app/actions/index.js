import fetch from 'isomorphic-fetch';
export const REQUEST_PAKTS = 'REQUEST_PAKTS';
export const RECEIVE_PAKTS = 'RECEIVE_PAKTS';
export const SET_CURRENT_PAKT = 'SET_CURRENT_PAKT';

function requestPakts() {
  return {
    type: REQUEST_PAKTS,
  };
}

function receivePakts(json) {
  return {
    type: RECEIVE_PAKTS,
    pakts: json,
    receivedAt: Date.now(),
  };
}

function fetchPakts() {
  return dispatch => {
    dispatch(requestPakts());
    return fetch('http://127.0.0.1:3000/api/pakts/1')
      .then(response => response.json())
      .then(json => dispatch(receivePakts(json)));
  };
}

export function fetchPaktsIfNeeded() { 
  return (dispatch, getState) => {
    return dispatch(fetchPakts());
  };
}

export function setCurrentPakt(pakt) {
  return {
    type: SET_CURRENT_PAKT,
    currentPakt: pakt,
  };
}