import { combineReducers } from 'redux';
import team from './team';
import modal from './modal';
import user from './user';
import teamDetail from './teamDetail';
import teamCreate from './teamCreate';

// 리듀서들을 하나로 합침
export default combineReducers({
  team,
  modal,
  user,
  teamDetail,
  teamCreate,
});
