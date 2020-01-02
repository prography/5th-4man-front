import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as PostAPI from 'lib/api/post';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  USER_CHECK_SUCCESS,
  USER_CHECK_FAILURE,
  USER_CHECK_REQUEST,
  ADD_REGISTER_SUCCESS,
  ADD_REGISTER_FAILURE,
  ADD_REGISTER_REQUEST,
  USER_DETAIL_REQUEST,
  USER_DETAIL_SUCCESS,
  USER_DETAIL_FAILURE,
} from '../reducers/user';

function* register({ payload }) {
  try {
    const json = {
      username: payload.username,
      password: payload.password,
      email: payload.email,
      nickname: payload.name,
      introduction: payload.introduce,
    };

    yield call([axios, 'post'], 'https://gaegata.fourman.store/account/', json);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: SIGN_UP_FAILURE,
    });
  }
}

function* watchRegister() {
  yield takeLatest(SIGN_UP_REQUEST, register);
}

function* idCheck({ payload }) {
  try {
    const json = {
      username: payload.username,
    };
    const data = yield call(
      [axios, 'post'],
      'https://gaegata.fourman.store/account/check/duplication/',
      json,
    );
    yield put({
      type: USER_CHECK_SUCCESS,
      payload: {
        usernameCheck: data.data.username,
      },
    });
  } catch (error) {
    yield put({
      type: USER_CHECK_FAILURE,
    });
  }
}

function* watchIdCheck() {
  yield takeLatest(USER_CHECK_REQUEST, idCheck);
}

function* addRigster({ payload }) {
  try {
    const json = {
      email: payload.email,
      introduction: payload.introduce,
      nickname: payload.name,
      headers: {
        Authorization: `Bearer ${payload.access}`,
      },
    };
    yield call(
      [axios, 'patch'],
      `https://gaegata.fourman.store/account/${payload.userId}/`,
      json,
    );
    yield put({
      type: ADD_REGISTER_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: ADD_REGISTER_FAILURE,
    });
  }
}

function* watchAddRegister() {
  yield takeLatest(ADD_REGISTER_REQUEST, addRigster);
}

function* getUserDetail() {
  const userInfo = yield call(PostAPI.getUserDetail);
}

function* watchGetUserDetail() {
  yield takeLatest(USER_DETAIL_REQUEST, getUserDetail);
}

export default function* root() {
  yield all([
    fork(watchRegister),
    fork(watchIdCheck),
    fork(watchAddRegister),
    fork(watchGetUserDetail),
  ]);
}
