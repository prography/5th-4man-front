import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import {
  GET_TEAM_DETAIL_REQUEST,
  GET_TEAM_DETAIL_SUCCESS,
  GET_TEAM_DETAIL_FAILURE,
} from 'store/reducers/teamDetail';

import * as PostAPI from 'lib/api/post';

// worker Saga: USER_FETCH_REQUESTED 액션에 대해 호출될 것입니다
function* getTeamDetail(props) {
  try {
    const items = yield call(PostAPI.getTeamDetail, props.payload);

    // items로 데이터 전달
    yield put({ type: GET_TEAM_DETAIL_SUCCESS, data: items.data });
  } catch (e) {
    yield put({ type: GET_TEAM_DETAIL_FAILURE, message: e.message });
  }
}

function* watchTeamDetail() {
  yield takeLatest(GET_TEAM_DETAIL_REQUEST, getTeamDetail);
}

export default function* root() {
  yield all([fork(watchTeamDetail)]);
}
