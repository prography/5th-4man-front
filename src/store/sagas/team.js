import { call, put, all, fork, takeLatest, delay } from 'redux-saga/effects';
import {
  GET_POPULAR_LIST_REQUEST,
  GET_POPULAR_LIST_SUCCESS,
  GET_POPULAR_LIST_FAILURE,
  GET_RECENT_LIST_REQUEST,
  GET_RECENT_LIST_SUCCESS,
  GET_RECENT_LIST_FAILURE,
} from 'store/reducers/team';

import * as PostAPI from 'lib/api/post';

// 인기팀 데이터 불러오기
function* getPopularList() {
  try {
    const items = yield call(PostAPI.getTeamList);

    // items로 데이터 전달
    yield put({ type: GET_POPULAR_LIST_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_POPULAR_LIST_FAILURE, message: e.message });
  }
}

// 최신팀 데이터 불러오기
function* getRecentList() {
  try {
    const items = yield call(PostAPI.getRecentTeamList);

    // items로 데이터 전달
    yield put({ type: GET_RECENT_LIST_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_RECENT_LIST_FAILURE, message: e.message });
  }
}

function* watchPopularList() {
  yield takeLatest(GET_POPULAR_LIST_REQUEST, getPopularList);
}

function* watchRecentList() {
  yield takeLatest(GET_RECENT_LIST_REQUEST, getRecentList);
}

export default function* root() {
  yield all([fork(watchPopularList), fork(watchRecentList)]);
}
