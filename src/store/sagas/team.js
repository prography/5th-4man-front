import { call, put, all, fork, takeLatest, delay } from 'redux-saga/effects';
import {
  GET_TEAMLIST_REQUEST,
  GET_TEAMLIST_SUCCESS,
  GET_TEAMLIST_FAILURE,
  GET_POPULAR_LIST_REQUEST,
  GET_POPULAR_LIST_SUCCESS,
  GET_POPULAR_LIST_FAILURE,
  GET_RECENT_LIST_REQUEST,
  GET_RECENT_LIST_SUCCESS,
  GET_RECENT_LIST_FAILURE,
} from 'store/reducers/team';

import * as PostAPI from 'lib/api/post';

// worker Saga: USER_FETCH_REQUESTED 액션에 대해 호출될 것입니다
function* getTeamList() {
  try {
    const items = yield call(PostAPI.getPosts);

    // 로딩 테스트 하기 위해서 딜레이 2초 줌
    yield delay(2000);

    // items로 데이터 전달
    yield put({ type: GET_TEAMLIST_SUCCESS, items });
  } catch (e) {
    yield put({ type: GET_TEAMLIST_FAILURE, message: e.message });
  }
}

// 인기팀 데이터 불러오기
function* getPopularList() {
  try {
    const items = yield call(PostAPI.getTeamList);

    // 로딩 테스트 하기 위해서 딜레이 2초 줌
    yield delay(2000);

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

    // 로딩 테스트 하기 위해서 딜레이 2초 줌
    yield delay(2000);

    // items로 데이터 전달
    yield put({ type: GET_RECENT_LIST_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_RECENT_LIST_FAILURE, message: e.message });
  }
}

function* watchTeamList() {
  yield takeLatest(GET_TEAMLIST_REQUEST, getTeamList);
}

function* watchPopularList() {
  yield takeLatest(GET_POPULAR_LIST_REQUEST, getPopularList);
}

function* watchRecentList() {
  yield takeLatest(GET_RECENT_LIST_REQUEST, getRecentList);
}

export default function* root() {
  yield all([
    fork(watchTeamList),
    fork(watchPopularList),
    fork(watchRecentList),
  ]);
}
