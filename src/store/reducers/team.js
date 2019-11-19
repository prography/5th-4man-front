import { createAction } from 'redux-actions';
import produce from 'immer';

// 비동기 액션 세트. 사가 사용해야되는 액션 모음
export const GET_TEAMLIST_REQUEST = 'team/GET_LIST_REQUEST';
export const GET_TEAMLIST_SUCCESS = 'team/GET_LIST_SUCCESS';
export const GET_TEAMLIST_FAILURE = 'team/GET_LIST_FAILURE';

export const GET_POPULAR_LIST_REQUEST = 'team/GET_POPULAR_LIST_REQUEST';
export const GET_POPULAR_LIST_SUCCESS = 'team/GET_POPULAR_LIST_SUCCESS';
export const GET_POPULAR_LIST_FAILURE = 'team/GET_POPULAR_LIST_FAILURE';

export const GET_RECENT_LIST_REQUEST = 'team/GET_RECENT_LIST_REQUEST';
export const GET_RECENT_LIST_SUCCESS = 'team/GET_RECENT_LIST_SUCCESS';
export const GET_RECENT_LIST_FAILURE = 'team/GET_RECENT_LIST_FAILURE';

// 리스트 가져오는 액션
export const getTeamListAction = createAction(GET_TEAMLIST_REQUEST);
export const getPopularListAction = createAction(GET_POPULAR_LIST_REQUEST);
export const getRecentListAction = createAction(GET_RECENT_LIST_REQUEST);

const initialListingSet = {
  list: [],
  loading: true,
};

// 초기 상태 정의
const initialState = {
  main: initialListingSet,
  popular: initialListingSet,
  recent: initialListingSet,
};

// team reducer
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // main
      case GET_TEAMLIST_REQUEST: {
        draft.main.loading = true;
        return draft;
      }
      case GET_TEAMLIST_SUCCESS: {
        draft.main.list.push(...action.items);
        draft.main.loading = false;
        return draft;
      }
      case GET_TEAMLIST_FAILURE: {
        draft.main.loading = false;
        return draft;
      }
      // popular
      case GET_POPULAR_LIST_REQUEST: {
        draft.popular.loading = true;
        return draft;
      }
      case GET_POPULAR_LIST_SUCCESS: {
        draft.popular.list.push(...action.items);
        draft.popular.loading = false;
        return draft;
      }
      case GET_POPULAR_LIST_FAILURE: {
        draft.popular.loading = false;
        return draft;
      }
      // recent
      case GET_RECENT_LIST_REQUEST: {
        draft.recent.loading = true;
        return draft;
      }
      case GET_RECENT_LIST_SUCCESS: {
        draft.recent.list.push(...action.items);
        draft.recent.loading = false;
        return draft;
      }
      case GET_RECENT_LIST_FAILURE: {
        draft.recent.loading = false;
        return draft;
      }
    }
  });
};

export default reducer;
