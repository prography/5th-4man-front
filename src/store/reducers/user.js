import produce from 'immer';

export const initialState = {
  isLoggedIn: false,
  user: null,
  access: '',
  refresh: '',
  code: '',
  isNew: false,
  userId: -1,
};

export const LOG_IN_GITHUB_CODE_REQUEST = 'user/LOG_IN_GITHUB_CODE_REQUEST'; // 액션의 이름
export const LOG_IN_GITHUB_CODE_SUCCESS = 'user/LOG_IN_GITHUB_CODE_SUCCESS';
export const LOG_IN_GITHUB_CODE_FAILURE = 'user/LOG_IN_GITHUB_CODE_FAILURE';

export const LOG_IN_GITHUB_TOKEN_REQUEST = 'user/LOG_IN_GITHUB_TOKEN_REQUEST';
export const LOG_IN_GITHUB_TOKEN_SUCCESS = 'user/LOG_IN_GITHUB_TOKEN_SUCCESS';
export const LOG_IN_GITHUB_TOKEN_FAILURE = 'user/LOG_IN_GITHUB_TOKEN_FAILURE';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const LOG_OUT = 'user/LOG_OUT';

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_IN_GITHUB_CODE_REQUEST:
        return draft;

      case LOG_IN_GITHUB_CODE_SUCCESS:
        draft.user = action.payload;
        return draft;

      case LOG_OUT:
        draft.isLoggedIn = false;
        draft.user = null;
        draft.access = '';
        draft.refresh = '';
        return draft;

      case LOG_IN_GITHUB_TOKEN_REQUEST:
        draft.code = action.payload.code;
        return draft;

      case LOG_IN_GITHUB_TOKEN_SUCCESS:
        draft.isLoggedIn = true;
        draft.access = action.payload.access;
        draft.refresh = action.payload.refresh;
        draft.isNew = action.payload.isNew;
        draft.userId = action.payload.userId;
        return draft;

      case LOG_IN_GITHUB_TOKEN_FAILURE:
        return draft;

      case SIGN_UP_REQUEST:
        return draft;
      case SIGN_UP_SUCCESS:
        return draft;
    }
  });
};

export default reducer;
