import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import * as PostAPI from 'lib/api/post';
import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  ADD_REGISTER_SUCCESS,
  ADD_REGISTER_FAILURE,
  ADD_REGISTER_REQUEST,
} from '../reducers/user';

function* register({ payload }) {
  try {
    const json = {
      username: payload.values.username,
      password: payload.values.password,
      email: payload.values.email,
      nickname: payload.values.nickname,
      introduction: payload.values.introduction,
    };

    yield call(PostAPI.register, json);

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

function* addRigster(props) {
  try {
    const json = {
      email: props.email,
      introduction: props.introduce,
      nickname: props.name,
      userId: props.userId,
      headers: {
        Authorization: `Bearer ${props.access}`,
      },
    };

    yield call(PostAPI.addRigster, json);

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

export default function* root() {
  yield all([fork(watchRegister), fork(watchAddRegister)]);
}
