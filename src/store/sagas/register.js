import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/user';

function* register({ payload }) {
  console.log(payload);
  try {
    const json = {
      username: payload.username,
      password: payload.password,
      email: payload.email,
      nickname: payload.name,
      introduction: payload.introduce,
    };
    const data = yield call(
      [axios, 'post'],
      'http://gaegata.fourman.store/account/',
      json,
    );

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

function* idCheck({ payload }) {
  try {
    const json = {
      username: payload.username,
    };
    const data = yield call(
      [axios, 'post'],
      'http://gaegata.fourman.store/account/check/duplication/',
      json,
    );
    console.log(data);
    yield put({
      type: actions.USER_CHECK_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actions.USER_CHECK_FAILURE,
    });
  }
}

function* watchIdCheck() {
  yield takeLatest(actions.USER_CHECK_REQUEST, idCheck);
}

export default function* root() {
  yield all([fork(watchRegister), fork(watchIdCheck)]);
}
