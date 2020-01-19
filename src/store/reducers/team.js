import { createAction } from 'redux-actions';
import produce from 'immer';

// 비동기 액션 세트. 사가 사용해야되는 액션 모음
export const GET_POPULAR_LIST_REQUEST = 'team/GET_POPULAR_LIST_REQUEST';
export const GET_POPULAR_LIST_SUCCESS = 'team/GET_POPULAR_LIST_SUCCESS';
export const GET_POPULAR_LIST_FAILURE = 'team/GET_POPULAR_LIST_FAILURE';

export const GET_RECENT_LIST_REQUEST = 'team/GET_RECENT_LIST_REQUEST';
export const GET_RECENT_LIST_SUCCESS = 'team/GET_RECENT_LIST_SUCCESS';
export const GET_RECENT_LIST_FAILURE = 'team/GET_RECENT_LIST_FAILURE';

export const GET_MY_APPLY_TEAM_LIST_REQUEST =
  'team/GET_MY_APPLY_TEAM_LIST_REQUEST';

export const GET_MY_APPLY_TEAM_LIST_SUCCESS =
  'team/GET_MY_APPLY_TEAM_LIST_SUCCESS';

export const GET_MY_APPLY_TEAM_LIST_FAILURE =
  'team/GET_MY_APPLY_TEAM_LIST_FAILURE';

export const GET_MY_TEAM_LIST_REQUEST = 'team/GET_MY_OWN_TEAM_LIST_REQUEST';
export const GET_MY_TEAM_LIST_SUCCESS = 'team/GET_MY_TEAM_LIST_SUCCESS';
export const GET_MY_TEAM_LIST_FAILURE = 'team/GET_MY_TEAM_LIST_FAILURE';

export const GET_SEARCH_TEAM_LIST_REQUEST =
  'search/GET_SEARCH_TEAM_LIST_REQUEST';
export const GET_SEARCH_TEAM_LIST_SUCCESS =
  'search/GET_SEARCH_TEAM_LIST_SUCCESS';
export const GET_SEARCH_TEAM_LIST_FAILURE =
  'search/GET_SEARCH_TEAM_LIST_FAILURE';

// 리스트 가져오는 액션
export const getPopularListAction = createAction(GET_POPULAR_LIST_REQUEST);
export const getRecentListAction = createAction(GET_RECENT_LIST_REQUEST);
export const getMyApplyTeamListAction = createAction(
  GET_MY_APPLY_TEAM_LIST_REQUEST,
);
export const getMyTeamListAction = createAction(GET_MY_TEAM_LIST_REQUEST);
export const getSearchTeamListAction = createAction(
  GET_SEARCH_TEAM_LIST_REQUEST,
);

const initialListingSet = {
  list: [],
  loading: true,
  tags: [],
};

// 초기 상태 정의
const initialState = {
  main: initialListingSet,
  popular: initialListingSet,
  recent: initialListingSet,
  mypage: initialListingSet,
  search: initialListingSet,
};

// team reducer
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      // popular
      case GET_POPULAR_LIST_REQUEST: {
        draft.popular.loading = true;
        return draft;
      }
      case GET_POPULAR_LIST_SUCCESS: {
        draft.popular.list = action.items;
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
        draft.recent.list = action.items;
        draft.recent.loading = false;
        return draft;
      }
      case GET_RECENT_LIST_FAILURE: {
        draft.recent.loading = false;
        return draft;
      }

      // mypage
      case GET_MY_APPLY_TEAM_LIST_REQUEST: {
        draft.mypage.loading = true;
        return draft;
      }
      case GET_MY_APPLY_TEAM_LIST_SUCCESS: {
        draft.mypage.loading = false;
        draft.mypage.list = action.items;

        return draft;
      }
      case GET_MY_APPLY_TEAM_LIST_FAILURE: {
        draft.mypage.loading = false;
        return draft;
      }

      case GET_MY_TEAM_LIST_REQUEST: {
        draft.mypage.loading = true;
        return draft;
      }
      case GET_MY_TEAM_LIST_SUCCESS: {
        draft.mypage.loading = false;
        draft.mypage.list = action.items;

        return draft;
      }
      case GET_MY_TEAM_LIST_FAILURE: {
        draft.mypage.loading = false;

        return draft;
      }
      case GET_SEARCH_TEAM_LIST_REQUEST: {
        draft.search.loading = true;
        return draft;
      }
      case GET_SEARCH_TEAM_LIST_SUCCESS: {
        draft.search.list = action.items;
        draft.search.tags = action.tags;
        draft.search.loading = false;
        return draft;
      }

      case GET_SEARCH_TEAM_LIST_FAILURE: {
        draft.search.loading = false;
        return draft;
      }
    }
  });
};

export default reducer;
