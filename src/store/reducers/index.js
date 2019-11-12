import { combineReducers } from 'redux';
import team from './team';
import user from './user';

// 리듀서들을 하나로 합침
export default combineReducers({
  team,
  user,
});
