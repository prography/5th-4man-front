import { call, put, all, fork, takeLatest, delay } from 'redux-saga/effects';
import {
  GET_TEAMLIST_REQUEST,
  GET_TEAMLIST_SUCCESS,
  GET_TEAMLIST_FAILURE,
  GET_POPULAR_LIST_REQUEST,
  GET_POPULAR_LIST_SUCCESS,
  GET_POPULAR_LIST_FAILURE,
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

function* watchTeamList() {
  yield takeLatest(GET_TEAMLIST_REQUEST, getTeamList);
}

function* getTeamList2() {
  try {
    const items = yield call(PostAPI.getPosts);

    // 로딩 테스트 하기 위해서 딜레이 2초 줌
    yield delay(2000);

    // items로 데이터 전달
    yield put({ type: GET_POPULAR_LIST_SUCCESS, items });
  } catch (e) {
    yield put({ type: GET_POPULAR_LIST_FAILURE, message: e.message });
  }
}

function* watchTeamList2() {
  yield takeLatest(GET_POPULAR_LIST_REQUEST, getTeamList2);
}

export default function* root() {
  yield all([fork(watchTeamList), fork(watchTeamList2)]);
}
