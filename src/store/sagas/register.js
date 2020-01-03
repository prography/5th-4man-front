import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import * as actions from '../reducers/user';
import * as PostAPI from 'lib/api/post';

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
      type: actions.SIGN_UP_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: actions.SIGN_UP_FAILURE,
    });
  }
}

function* watchRegister() {
  yield takeLatest(actions.SIGN_UP_REQUEST, register);
}

function* addRigster({payload}) {
  try {
    const json = {
      email: payload.email,
      introduction: payload.introduce,
      nickname: payload.name,
      userId: payload.userId,
      headers: {
        Authorization: `Bearer ${payload.access}`,
      },
    };

    yield call(PostAPI.addRigster, json);

    yield put({
      type: actions.ADD_REGISTER_SUCCESS,
    });
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
  yield all([fork(watchRegister), fork(watchAddRegister)]);
}
