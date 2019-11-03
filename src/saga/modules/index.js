import {all, call} from 'redux-saga/effects';
import list from './list';


export default function* rootSaga() {
    yield all([
        call(list),
    ]);
}