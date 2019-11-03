import {all, fork, call, put, takeLatest} from 'redux-saga/effects';
import {GET_LIST, GET_LIST_SUCCESS, GET_LIST_FAILURE} from '../../store/modules/list';

function listAPI() { // 서버에 요청을 보내는 부분

}

function* list() {
    try {
        yield call(listAPI);
        yield put({ // put은 dispatch 동일
            type: GET_LIST_SUCCESS,
        })
    }catch(e) { // listAPI 실패
        console.log(e);
        yield put({
            type: GET_LIST_FAILURE,
        })
    }
}

function* getList() {
    yield takeLatest(GET_LIST, list)
}

export default function* listSaga() {
    yield all([
        fork(getList),
    ]);
}