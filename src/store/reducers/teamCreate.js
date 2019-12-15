import produce from 'immer';
import swal from 'sweetalert';

export const TEAM_CREATE_REQUEST = 'team/TEAM_CREATE_REQUEST';
export const TEAM_CREATE_SUCCESS = 'team/TEAM_CREATE_SUCCESS';
export const TEAM_CREATE_FAILURE = 'team/TEAM_CREATE_FAILURE';

const initialState = {};
const reducer = (state = initialState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case TEAM_CREATE_REQUEST: {
        return draft;
      }
      case TEAM_CREATE_SUCCESS: {
        swal('팀생성 완료!', 'success').then(() => {
          window.location.href = `/team/${action.payload.id}`;
        });
        return draft;
      }
      case TEAM_CREATE_FAILURE: {
        return draft;
      }
    }
  });
};

export default reducer;
