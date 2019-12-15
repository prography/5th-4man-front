import { all, fork } from 'redux-saga/effects';
import teamSaga from './team';
import loginSaga from './login';
import registerSaga from './register';
import teamDetailSaga from './teamDetail';
import teamCreateSaga from './teamCreate';

function* rootSaga() {
  yield all([
    fork(teamSaga),
    fork(loginSaga),
    fork(registerSaga),
    fork(teamDetailSaga),
    fork(teamCreateSaga),
  ]);
}

export default rootSaga;
