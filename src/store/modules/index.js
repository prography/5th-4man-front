import { combineReducers } from 'redux';
import list from './list';
import user from './user';

export default combineReducers({
  list,
  user,
});
