import { all, fork } from 'redux-saga/effects';
import teamSaga from './team';
import loginSaga from './login';
import registerSaga from './register';

function* rootSaga() {
  yield all([fork(teamSaga), fork(loginSaga), fork(registerSaga)]);
}

export default rootSaga;
