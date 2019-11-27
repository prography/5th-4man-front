import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/user';

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
      type: actions.SIGN_UP_SUCCESS,
    });
    alert('회원가입 되었습니다.');
    window.location.href = '/';
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
      'https://gaegata.fourman.store/account/check/duplication/',
      json,
    );
    yield put({
      type: actions.USER_CHECK_SUCCESS,
      payload: {
        usernameCheck: data.data.username,
      },
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

function* addRigster({ payload }) {
  try {
    const json = {
      email: payload.email,
      introduction: payload.introduction,
      nickname: payload.nickname,
    };
    yield call(
      [axios, 'patch'],
      `https://gaegata.fourman.store/account/${payload.userId}`,
      json,
    );
    yield put({
      type: actions.ADD_REGISTER_SUCCESS,
    });
    alert('추가정보 저장되었습니다.');
    window.location.href = '/';
  } catch (error) {
    yield put({
      type: actions.ADD_REGISTER_FAILURE,
    });
  }
}

function* watchAddRegister() {
  yield takeLatest(actions.ADD_REGISTER_REQUEST, addRigster);
}

export default function* root() {
  yield all([fork(watchRegister), fork(watchIdCheck), fork(watchAddRegister)]);
}
