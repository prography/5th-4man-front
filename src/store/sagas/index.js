import { all, fork } from 'redux-saga/effects';
import teamSaga from './team';

function* rootSaga() {
  yield all([fork(teamSaga)]);
}

export default rootSaga;
