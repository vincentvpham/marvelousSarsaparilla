import 'babel-polyfill';
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import paktApp from './reducers';
import Pakt from './components/App';

const store = createStore(
  paktApp,
  applyMiddleware(thunkMiddleware, createLogger())
);

export default class PaktApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pakt />
      </Provider>
    );
  }
}
