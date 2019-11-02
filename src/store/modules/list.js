import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

import * as PostsAPI from 'lib/api/post';

//
const GET_LIST = 'list/GET_LIST';

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
