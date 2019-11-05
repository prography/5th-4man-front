import { createAction } from 'redux-actions';
import produce from 'immer';

// 비동기 액션 세트. 사가 사용해야되는 액션 모음
export const GET_TEAMLIST_REQUEST = 'team/GET_LIST_REQUEST';
export const GET_TEAMLIST_SUCCESS = 'team/GET_LIST_SUCCESS';
export const GET_TEAMLIST_FAILURE = 'team/GET_LIST_FAILURE';

// 리스트 가져오는 액션
export const getTeamListAction = createAction(GET_TEAMLIST_REQUEST);

// 초기 상태 정의
const initialState = {
  list: [],
  isLoading: false,
};

// team reducer
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_TEAMLIST_REQUEST: {
        draft.isLoading = true;
        return draft;
      }
      case GET_TEAMLIST_SUCCESS: {
        draft.list = action.items;
        draft.isLoading = false;
        return draft;
      }
      case GET_TEAMLIST_FAILURE: {
        draft.isLoading = false;
        return draft;
      }
    }
  })
};

export default reducer;

