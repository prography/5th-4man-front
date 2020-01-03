import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import * as PostAPI from 'lib/api/post';
import * as actions from '../reducers/user';
import { CLOSE_MODAL } from '../reducers/modal';
import * as authUtils from '../../utils/auth';

function* loginAuth(props) {
  try {
    const data = yield call(PostAPI.loginAuth, props.payload);

    authUtils.setToken({
      access: data.data.access,
    });

    yield put({
      type: actions.LOG_IN_SUCCESS,
      payload: {
        userId: data.data.user_id,
        access: data.data.access,
        username: data.data.username,
        isLoggedIn: true,
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

function* loginGithubAuth(props) {
  try {
    const data = yield call(PostAPI.loginGithubAuth, props.payload);
    authUtils.setToken({
      access: data.data.access,
    });
    yield put({
      type: actions.LOG_IN_GITHUB_TOKEN_SUCCESS,
      payload: {
        access: data.data.access,
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

function* getMyUserDetail(token) {
  try {
    const data = yield call(PostAPI.myUserDetail, token);

    yield put({
      type: actions.USER_DETAIL_SUCCESS,
      payload: {
        userId: data.data.id,
        isLoggedIn: true,
        username: data.data.username,
      },
    });
  } catch (error) {
    yield put({
      type: actions.USER_DETAIL_FAILURE,
    });
  }
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
    yield getMyUserDetail(token);
  }
}
