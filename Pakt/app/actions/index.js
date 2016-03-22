import fetch from 'isomorphic-fetch';
export const REQUEST_PAKTS = 'REQUEST_PAKTS';
export const RECEIVE_PAKTS = 'RECEIVE_PAKTS';
export const SET_CURRENT_PAKT = 'SET_CURRENT_PAKT';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

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

function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    currentUser: user,
  };
}

function logoutCurrentUser() {
  return {
    type: LOGOUT_CURRENT_USER,
  };
}

function getFbInfo(userCredentials) {
  return dispatch => {
    return fetch(`https://graph.facebook.com/v2.3/${userCredentials.userId}?fields=name,email&access_token=${userCredentials.token}`)
      .then(response => response.json())
      .then(json => dispatch(setCurrentUser(json)));
  };
}

export function fetchPaktsIfNeeded() { 
  return (dispatch, getState) => {
    return dispatch(fetchPakts());
  };
}

export function submitPakt(pakt) {
  return dispatch => {
    return fetch("http://127.0.0.1:3000/api/pakt", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pakt),
    });
  };
}

export function setCurrentPakt(pakt) {
  return {
    type: SET_CURRENT_PAKT,
    currentPakt: pakt,
  };
}

export function logoutUser() {
  return (dispatch) => {
    dispatch(logoutCurrentUser());
  };
}

export function loginNewUser(userCredentials) {
  return (dispatch, getState) => {
    return dispatch(getFbInfo(userCredentials));
  };
}
