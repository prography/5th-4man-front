import { all, fork } from 'redux-saga/effects';
import teamSaga from './team';
import loginSaga from './login';

function* rootSaga() {
  yield all([fork(teamSaga), fork(loginSaga)]);
}

export default rootSaga;
