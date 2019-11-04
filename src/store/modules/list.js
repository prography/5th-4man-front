import produce from 'immer';

import * as PostsAPI from 'lib/api/post';


// 비동기 액션 세트. 사가 사용해야되는 액션 모음
export const GET_LIST_REQUEST = 'list/GET_LIST_REQUEST'; // 액션의 이름
export const GET_LIST_SUCCESS = 'list/GET_LIST_SUCCESS';
export const GET_LIST_FAILURE = 'list/GET_LIST_FAILURE';

export const getListAction = {
  type: GET_LIST_REQUEST,
};

export const initialState = {
  list: [],
  isLoading : false,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_LIST_REQUEST : {
      return {
        ...state,
        isLoading : true        
      }
    }
    case GET_LIST_SUCCESS : { // 서버로 데이터 성공적으로 받으면 list 에 값 추가
      return {
        ...state,
        isLoading : false,
        list : action.data,
      }
    }
    case GET_LIST_FAILURE : {
      return {
        ...state,
        list : action.data,
        isLoading : false,      
      }
    }
    default : {
      return {
        ...state
      }
    }
  }
}

export default reducer;