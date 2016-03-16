import 'babel-polyfill';
import React, { Component } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import Pakt from './components/App';

let store = createStore(todoApp);

export default class PaktApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Pakt />
      </Provider>
    );
  }
}
