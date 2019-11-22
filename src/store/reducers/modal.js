import produce from 'immer';

export const OPEN_MODAL = 'modal/OPEN__MODAL';
export const CLOSE_MODAL = 'modal/CLOSE_MODAL';

export const OpenModal = () => ({
  type: OPEN_MODAL,
});
export const CloseModal = () => ({
  type: CLOSE_MODAL,
});

const initialState = {
  openYn: false,
  type: null,
};

const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case OPEN_MODAL: {
        draft.openYn = true;
        draft.type = action.payload.type;
        return draft;
      }
      case CLOSE_MODAL: {
        draft.openYn = false;
        return draft;
      }
    }
  });
};

export default reducer;
