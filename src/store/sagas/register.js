import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/user';

function* register({ payload }) {
  try {
    alert(payload.email);
    console.log(payload);
    // const json = {
    //   code: payload.code,
    // };
    // const data = yield call(
    //   [axios, 'post'],
    //   'http://gaegata.fourman.store/account/token/',
    //   json,
    // );

    yield put({
      type: actions.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      tpye: actions.SIGN_UP_FAILURE,
    });
  }
}

function* watchRegister() {
  yield takeLatest(actions.SIGN_UP_REQUEST, register);
}

export default function* root() {
  yield all([fork(watchRegister)]);
}
