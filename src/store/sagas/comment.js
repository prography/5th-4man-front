import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import {
  GET_TEAM_COMMENT_REQUEST,
  GET_TEAM_COMMENT_SUCCESS,
  GET_TEAM_COMMENT_FAILURE,
} from 'store/reducers/comment';

import * as PostAPI from 'lib/api/post';

// 인기팀 데이터 불러오기
function* getTeamComment(props) {
  try {
    const items = yield call(PostAPI.getTeamComment, props.payload);

    // items로 데이터 전달
    yield put({ type: GET_TEAM_COMMENT_SUCCESS, items: items.data });
  } catch (e) {
    yield put({ type: GET_TEAM_COMMENT_FAILURE, message: e.message });
  }
}

function* watchTeamComment() {
  yield takeLatest(GET_TEAM_COMMENT_REQUEST, getTeamComment);
}

export default function* root() {
  yield all([fork(watchTeamComment)]);
}
