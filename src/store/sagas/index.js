import { call, put, all } from 'redux-saga/effects';
import * as PostAPI from 'lib/api/post';

// worker Saga: USER_FETCH_REQUESTED 액션에 대해 호출될 것입니다
function* getPosts(action) {
  try {
    const items = yield call(PostAPI.getPosts, action.payload.userId);
    yield put({ type: 'USER_FETCH_SUCCEEDED', items });
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message });
  }
}

export default function* rootSaga() {
  yield all([getPosts]);
}
