import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamRow from 'components/TeamRow';

import { Skeleton } from 'antd';

import { OPEN_MODAL } from 'store/reducers/modal';
import * as teamActions from 'store/reducers/team';

const UserTeamListContainer = ({ teamType }) => {
  const dispatch = useDispatch();
  const action =
    teamType === 'application'
      ? teamActions.getMyApplyTeamListAction
      : teamActions.getMyTeamListAction;

  useEffect(() => {
    dispatch(action());
  }, []);

  const { mypage } = useSelector(state => state.team);

  const handleModal = id => {
    dispatch({
      type: OPEN_MODAL,
      payload: { type: 'applyTeamUserList', data: { id } },
    });
  };

  return !mypage.loading ? (
    mypage.list.map(data => (
      <TeamRow
        {...data}
        key={data.id}
        teamType={teamType}
        handleModal={handleModal}
      />
    ))
  ) : (
    <Skeleton active />
  );
};

export default UserTeamListContainer;
