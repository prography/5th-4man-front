import produce from 'immer';
import swal from 'sweetalert';

export const initialState = {
  isLoggedIn: false,
  user: null,
  access: '',
  refresh: '',
  code: '',
  isNew: false,
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

export const AUTH_REQUEST = 'user/AUTH_REQUEST';
export const AUTH_SUCCESS = 'user/AUTH_SUCCESS';
export const AUTH_FAILURE = 'user/AUTH_FAILURE';

export const LOG_OUT = 'user/LOG_OUT';

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case LOG_OUT:
        draft.isLoggedIn = false;
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
        return draft;

      case LOG_IN_GITHUB_TOKEN_FAILURE:
        return draft;

      case SIGN_UP_REQUEST:
        return draft;

      case SIGN_UP_SUCCESS:
        swal('회원가입 성공!', '개같하에 오신것을 환영합니다.', 'success').then(
          () => {
            window.location.href = '/';
          },
        );

        return draft;

      case SIGN_UP_FAILURE:
        swal('회원가입 실패!', '회원가입에 실패하였습니다.', 'error');

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
        draft.refresh = action.payload.refresh;
        swal('로그인 완료!', '로그인 되었습니다!', 'success');

        return draft;

      case LOG_IN_FAILURE:
        swal('로그인 실패!', '아이디 또는 비밀번호가 잘못되었습니다.', 'error');

        return draft;

      case ADD_REGISTER_REQUEST:
        return draft;

      case ADD_REGISTER_SUCCESS:
        swal('회원가입 성공!', '개같하에 오신것을 환영합니다.', 'success').then(
          () => {
            window.location.href = '/';
          },
        );

        return draft;

      case ADD_REGISTER_FAILURE:
        swal('회원가입 실패!', '회원가입에 실패하였습니다.', 'error');

        return draft;
      case AUTH_REQUEST:
        return draft;
      case AUTH_SUCCESS:
        if (action.payload) {
          draft.isLoggedIn = true;
          draft.access = action.payload.access;
        }
        return draft;
      case AUTH_FAILURE:
        return draft;
    }
  });
};

export default reducer;
