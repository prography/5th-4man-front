import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import {
  GET_POPULAR_LIST_REQUEST,
  GET_POPULAR_LIST_SUCCESS,
  GET_POPULAR_LIST_FAILURE,
  GET_RECENT_LIST_REQUEST,
  GET_RECENT_LIST_SUCCESS,
  GET_RECENT_LIST_FAILURE,
  GET_MY_APPLY_TEAM_LIST_REQUEST,
  GET_MY_APPLY_TEAM_LIST_SUCCESS,
  GET_MY_APPLY_TEAM_LIST_FAILURE,
  GET_MY_TEAM_LIST_REQUEST,
  GET_MY_TEAM_LIST_SUCCESS,
  GET_MY_TEAM_LIST_FAILURE,
  GET_SEARCH_TEAM_LIST_REQUEST,
  GET_SEARCH_TEAM_LIST_SUCCESS,
  GET_SEARCH_TEAM_LIST_FAILURE,
  GET_RECENT_APPLY_TEAM_USER_LIST_REQUEST,
  GET_RECENT_APPLY_TEAM_USER_LIST_FAILURE,
  GET_RECENT_APPLY_TEAM_USER_LIST_SUCCESS,
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

function* getMyApplyTeamList() {
  try {
    const items = yield call(PostAPI.getMyApplyTeamList);

    // items로 데이터 전달
    yield put({ type: GET_MY_APPLY_TEAM_LIST_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_MY_APPLY_TEAM_LIST_FAILURE, message: e.message });
  }
}

function* getMyTeamList() {
  try {
    const items = yield call(PostAPI.getMyTeamList);

    // items로 데이터 전달
    yield put({ type: GET_MY_TEAM_LIST_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_MY_TEAM_LIST_FAILURE, message: e.message });
  }
}

// 조건검색팀 데이터 불러오기
function* getSearchList(data) {
  try {
    const items = yield call(PostAPI.getSearchTeamList, data.payload.tag);
    // items로 데이터 전달

    yield put({
      type: GET_SEARCH_TEAM_LIST_SUCCESS,
      items: items.data,
      tags: data.payload.searchTags,
    });
  } catch (e) {
    yield put({ type: GET_SEARCH_TEAM_LIST_FAILURE, message: e.message });
  }
}
function* getRecentApplyTeamUserList({ payload }) {
  try {
    const items = yield call(PostAPI.getRecentApplyTeamUserList, payload);
    yield put({
      type: GET_RECENT_APPLY_TEAM_USER_LIST_SUCCESS,
      items: items.data,
    });
  } catch (e) {
    yield put({
      type: GET_RECENT_APPLY_TEAM_USER_LIST_FAILURE,
      message: e.message,
    });
  }
}

function* watchPopularList() {
  yield takeLatest(GET_POPULAR_LIST_REQUEST, getPopularList);
}

function* watchRecentList() {
  yield takeLatest(GET_RECENT_LIST_REQUEST, getRecentList);
}

function* watchMyApplyTeamList() {
  yield takeLatest(GET_MY_APPLY_TEAM_LIST_REQUEST, getMyApplyTeamList);
}

function* watchMyTeamList() {
  yield takeLatest(GET_MY_TEAM_LIST_REQUEST, getMyTeamList);
}

function* watchSearchList() {
  yield takeLatest(GET_SEARCH_TEAM_LIST_REQUEST, getSearchList);
}

function* watchRecentApplyTeamUserList() {
  yield takeLatest(
    GET_RECENT_APPLY_TEAM_USER_LIST_REQUEST,
    getRecentApplyTeamUserList,
  );
}

export default function* root() {
  yield all([
    fork(watchPopularList),
    fork(watchRecentList),
    fork(watchMyApplyTeamList),
    fork(watchMyTeamList),
    fork(watchSearchList),
    fork(watchRecentApplyTeamUserList),
  ]);
}
