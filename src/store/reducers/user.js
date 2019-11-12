import produce from 'immer';

export const OPEN_LOGIN_MODAL = 'user/OPEN_LOGIN_MODAL';
export const CLOSE_LOGIN_MODAL = 'user/CLOSE_LOGIN_MODAL';

export const OpenLoginModal = () => ({
  type: OPEN_LOGIN_MODAL,
});
export const CloseLoginModal = () => ({
  type: CLOSE_LOGIN_MODAL,
});

const initialState = {
  LoginModal: false,
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case OPEN_LOGIN_MODAL: {
        draft.LoginModal = true;
        return draft;
      }
      case CLOSE_LOGIN_MODAL: {
        draft.LoginModal = false;
        return draft;
      }
    }
  });
};

export default reducer;
