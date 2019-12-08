import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/user';
import { CLOSE_MODAL } from '../reducers/modal';
import * as authUtils from '../../utils/auth';

function* loginAuth({ payload }) {
  try {
    const json = {
      username: payload.username,
      password: payload.password,
    };
    const data = yield call(
      [axios, 'post'],
      'https://gaegata.fourman.store/account/token/',
      json,
    );
    authUtils.setToken({
      access: data.data.access,
      refresh: data.data.refresh,
    });
    yield put({
      type: actions.LOG_IN_SUCCESS,
      payload: {
        userId: data.data.user_id,
      },
    });
    yield put({
      type: CLOSE_MODAL,
    });
  } catch (error) {
    yield put({
      type: actions.LOG_IN_FAILURE,
    });
  }
}

function* watchLoginAuth() {
  yield takeLatest(actions.LOG_IN_REQUEST, loginAuth);
}

function* loginGithubAuth({ payload }) {
  try {
    const json = {
      code: payload.code,
    };
    const data = yield call(
      [axios, 'post'],
      'https://gaegata.fourman.store/account/token/',
      json,
    );
    authUtils.setToken({
      access: data.data.access,
      refresh: data.data.refresh,
    });
    yield put({
      type: actions.LOG_IN_GITHUB_TOKEN_SUCCESS,
      payload: {
        access: data.data.access,
        refresh: data.data.refresh,
        isNew: data.data.is_new,
      },
    });
  } catch (error) {
    yield put({
      tpye: actions.LOG_IN_GITHUB_TOKEN_FAILURE,
    });
  }
}

function* watchLoginGithubAuth() {
  yield takeLatest(actions.LOG_IN_GITHUB_TOKEN_REQUEST, loginGithubAuth);
}

export default function* root() {
  yield all([fork(watchLoginAuth), fork(watchLoginGithubAuth)]);

  const token = authUtils.getToken();
  if (token) {
    authUtils.setToken(token);
    yield put({
      type: actions.AUTH_SUCCESS,
      payload: token,
    });
  }
}
