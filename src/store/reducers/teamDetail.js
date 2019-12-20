import { createAction } from 'redux-actions';
import produce from 'immer';

export const GET_TEAM_DETAIL_REQUEST = 'team/GET_TEAM_DETAIL_REQUEST';
export const GET_TEAM_DETAIL_SUCCESS = 'team/GET_TEAM_DETAIL_SUCCESS';
export const GET_TEAM_DETAIL_FAILURE = 'team/GET_TEAM_DETAIL_FAILURE';
export const GET_TEAM_COMMENT = 'team/GET_TEAM_COMMENT';

export const getTeamDetailAction = createAction(GET_TEAM_DETAIL_REQUEST);
export const getTeamCommentAction = createAction(GET_TEAM_COMMENT);

const initialState = {
  team: {},
  loading: true,
};

// team reducer
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_TEAM_DETAIL_REQUEST: {
        draft.loading = true;

        return draft;
      }
      case GET_TEAM_DETAIL_SUCCESS: {
        draft.team = { ...action.data };
        draft.loading = false;

        return draft;
      }
      case GET_TEAM_DETAIL_FAILURE: {
        draft.loading = true;

        return draft;
      }
      case GET_TEAM_COMMENT: {
        draft.team.parent_comments = action.data;

        return draft;
      }
    }
  });
};

export default reducer;
