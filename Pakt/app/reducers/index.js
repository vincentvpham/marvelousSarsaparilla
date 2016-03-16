import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import routes from './routes';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  routes,
});

export default todoApp;
