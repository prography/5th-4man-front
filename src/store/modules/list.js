import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import * as PostsAPI from 'lib/api/post';

//
export const GET_LIST = 'list/GET_LIST';
export const GET_LIST_SUCCESS = 'list/GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'list/GET_LIST_FAILURE';


export const getList = createAction(GET_LIST, PostsAPI.getPosts);

// 초기 상태 정의
const initialState = {
  list: [],
};

export default handleActions(
  {
    [GET_LIST]: (state, action) =>
      produce(state, draft => {
        draft.list.push(...action.payload);
      }),
  },
  initialState,
);
