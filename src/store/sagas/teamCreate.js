import { call, put, all, fork, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../reducers/teamCreate';

function* teamCreate({ payload }) {
  try {
    const data = yield call(
      [axios, 'post'],
      'https://gaegata.fourman.store/team/',
      payload.formdata,
      {
        'content-type':
          'multipart/form-data; boundary=ebf9f03029db4c2799ae16b5428b06bd',
      },
    );

    yield put({
      type: actions.TEAM_CREATE_SUCCESS,
      payload: {
        id: data.data.id,
      },
    });
  } catch (error) {
    yield put({
      type: actions.TEAM_CREATE_FAILURE,
    });
  }
}

function* watchTeamCreate() {
  yield takeLatest(actions.TEAM_CREATE_REQUEST, teamCreate);
}

export default function* root() {
  yield all([fork(watchTeamCreate)]);
}
