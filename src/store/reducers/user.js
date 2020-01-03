import produce from 'immer';
import { createAction } from 'redux-actions';

export const initialState = {
  isLoggedIn: false,
  userId: -1,
  username: '',
  access: '',
  isNew: false,
  usernameCheck: false,
  detail: {
    loading: false,
    userInfo: null,
  },
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

export const AUTH_REQUEST = 'user/AUTH_REQUEST';
export const AUTH_SUCCESS = 'user/AUTH_SUCCESS';
export const AUTH_FAILURE = 'user/AUTH_FAILURE';

export const USER_DETAIL_REQUEST = 'user/USER_DETAIL_REQUEST';
export const USER_DETAIL_SUCCESS = 'user/USER_DETAIL_SUCCESS';
export const USER_DETAIL_FAILURE = 'user/USER_DETAIL_FAILURE';

export const LOG_OUT = 'user/LOG_OUT';

export const getLogInGithubTokenAction = createAction(
  LOG_IN_GITHUB_TOKEN_REQUEST,
);
export const getLogInAction = createAction(LOG_IN_REQUEST);
export const getSignUpAction = createAction(SIGN_UP_REQUEST);
export const getUserCheckAction = createAction(USER_CHECK_REQUEST);
export const getAddRegisterAction = createAction(ADD_REGISTER_REQUEST);
export const getAuthAction = createAction(AUTH_REQUEST);
export const getUserDetailAction = createAction(USER_DETAIL_REQUEST);

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_OUT:
        draft.isLoggedIn = false;
        draft.access = '';
        draft.userId = -1;
        draft.username = '';
        return draft;

      case LOG_IN_GITHUB_TOKEN_REQUEST:
        draft.code = action.payload.code;
        return draft;

      case LOG_IN_GITHUB_TOKEN_SUCCESS:
        draft.isLoggedIn = true;
        draft.access = action.payload.access;
        draft.isNew = action.payload.isNew;
        draft.userId = action.payload.userId;
        draft.username = action.payload.username;
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
        draft.access = action.payload.access;
        draft.userId = action.payload.userId;
        draft.username = action.payload.username;
        return draft;

      case LOG_IN_FAILURE:
        return draft;

      case ADD_REGISTER_REQUEST:
        return draft;

      case ADD_REGISTER_SUCCESS:
        return draft;

      case ADD_REGISTER_FAILURE:
        return draft;

      case AUTH_REQUEST:
        return draft;

      case AUTH_SUCCESS:
        if (action.payload) {
          draft.isLoggedIn = true;
          draft.access = action.payload.access;
          draft.userId = action.payload.userId;
          draft.username = action.payload.username;
        }
        return draft;

      case AUTH_FAILURE:
        return draft;

      case USER_DETAIL_REQUEST:
        return draft;

      case USER_DETAIL_SUCCESS:
        draft.isLoggedIn = true;
        draft.userId = action.payload.userId;
        draft.username = action.payload.username;
        return draft;

      case USER_DETAIL_FAILURE:
        return draft;
    }
  });
};

export default reducer;
