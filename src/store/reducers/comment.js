import { createAction } from 'redux-actions';
import produce from 'immer';

export const GET_TEAM_COMMENT_REQUEST = 'team/GET_TEAM_COMMENT_REQUEST';
export const GET_TEAM_COMMENT_SUCCESS = 'team/GET_TEAM_COMMENT_SUCCESS';
export const GET_TEAM_COMMENT_FAILURE = 'team/GET_TEAM_COMMENT_FAILURE';

export const getTeamCommentAction = createAction(GET_TEAM_COMMENT_REQUEST);

const initialState = {
  comment: {},
};

// team reducer
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case GET_TEAM_COMMENT_REQUEST: {
        return draft;
      }
      case GET_TEAM_COMMENT_SUCCESS: {
        draft.comment = { ...action.items };

        return draft;
      }
      case GET_TEAM_COMMENT_FAILURE: {
        return draft;
      }
    }
  });
};

export default reducer;
