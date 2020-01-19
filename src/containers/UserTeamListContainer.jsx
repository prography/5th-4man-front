import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamRow from 'components/TeamRow';

import * as teamActions from 'store/reducers/team';

const UserTeamListContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(teamActions.getMyApplyTeamListAction());
  }, []);

  const { mypage } = useSelector(state => state.team);

  return !mypage.loading
    ? mypage.list.map(data => <TeamRow {...data} key={data.id} />)
    : '로딩중';
};

export default UserTeamListContainer;
