import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as listActions from '../store/modules/list';
import * as PostsAPI from 'lib/api/post';
import ListItem from '../components/ListItem';
import { Row } from 'antd';
export const GET_LIST = 'list/GET_LIST'; // 액션의 이름

const ListContainer = () => {
  const {isLoading, list} = useSelector(state=> state.list);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(listActions.getListAction)  
  }, []);

  return (

    <div>
    {isLoading && <div>로딩 중</div>}
      <Row gutter={16}
        style={{marginTop:"5%"}}>
          {list.map((item) => {
            return (
              <ListItem key={item} item={item}/>
            )
          })}
      </Row>
    </div>
  )
}
export default ListContainer;