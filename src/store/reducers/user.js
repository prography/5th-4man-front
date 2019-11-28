import produce from 'immer';

export const initialState = {
  isLoggedIn: false,
  user: null,
  access: '',
  refresh: '',
  code: '',
  isNew: false,
  userId: -1,
  usernameCheck: false,
};

export const LOG_IN_GITHUB_TOKEN_REQUEST = 'user/LOG_IN_GITHUB_TOKEN_REQUEST';
export const LOG_IN_GITHUB_TOKEN_SUCCESS = 'user/LOG_IN_GITHUB_TOKEN_SUCCESS';
export const LOG_IN_GITHUB_TOKEN_FAILURE = 'user/LOG_IN_GITHUB_TOKEN_FAILURE';

export const LOG_IN_REQUEST = 'user/LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'user/LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'user/LOG_IN_FAILURE';

export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const USER_CHECK_REQUEST = 'user/USER_CHECK_REQUEST';
export const USER_CHECK_SUCCESS = 'user/USER_CHECK_SUCCESS';
export const USER_CHECK_FAILURE = 'user/USER_CHECK_FAILURE';

export const ADD_REGISTER_REQUEST = 'user/ADD_REGISTER_REQUEST';
export const ADD_REGISTER_SUCCESS = 'user/ADD_REGISTER_SUCCESS';
export const ADD_REGISTER_FAILURE = 'user/ADD_REGISTER_FAILURE';

export const LOG_OUT = 'user/LOG_OUT';

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
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

      case SIGN_UP_FAILURE:
        return draft;

      case USER_CHECK_REQUEST:
        return draft;

      case USER_CHECK_SUCCESS:
        draft.usernameCheck = action.payload.usernameCheck;
        return draft;

      case USER_CHECK_FAILURE:
        return draft;

      case LOG_IN_REQUEST:
        return draft;

      case LOG_IN_SUCCESS:
        draft.isLoggedIn = true;
        draft.userId = action.payload.userId;
        return draft;

      case LOG_IN_FAILURE:
        return draft;

      case ADD_REGISTER_REQUEST:
        return draft;

      case ADD_REGISTER_SUCCESS:
        return draft;

      case ADD_REGISTER_FAILURE:
        return draft;
    }
  });
};

export default reducer;
