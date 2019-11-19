import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/user';

function* loginApi() {
  const data = yield axios.get(
    'https://github.com/login/oauth/authorize?client_id=a7863c21770a0dd4c503',
  );
  return data;
}

function* login() {
  try {
    const data = yield call(loginApi);
    yield put({
      type: actions.LOG_IN_GITHUB_CODE_SUCCESS,
    });
    window.location.href = data.request.responseURL;
  } catch (error) {
    yield put({
      tpye: actions.LOG_IN_GITHUB_CODE_FAILURE,
      error,
    });
  }
}

function* watchLogin() {
  yield takeLatest(actions.LOG_IN_GITHUB_CODE_REQUEST, login);
}

function* loginAuth({ payload }) {
  try {
    const json = {
      code: payload.code,
    };
    const data = yield call(
      [axios, 'post'],
      'http://gaegata.fourman.store/account/token/',
      json,
    );

    yield put({
      type: actions.LOG_IN_GITHUB_TOKEN_SUCCESS,
      payload: {
        access: data.data.access,
        refresh: data.data.refresh,
        userId: data.data.user_id,
        isNew: data.data.is_new,
      },
    });
  } catch (error) {
    yield put({
      tpye: actions.LOG_IN_GITHUB_TOKEN_FAILURE,
    });
  }
}

function* watchLoginAuth() {
  yield takeLatest(actions.LOG_IN_GITHUB_TOKEN_REQUEST, loginAuth);
}

export default function* root() {
  yield all([fork(watchLogin), fork(watchLoginAuth)]);
}
