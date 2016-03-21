import { combineReducers } from 'redux';
import pakts from './pakts';
import users from './users';

const paktApp = combineReducers({
  pakts,
  users,
});

export default paktApp;
