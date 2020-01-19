import React from 'react';
import styled from 'styled-components';

import TeamRow from 'components/TeamRow';

import { Route } from 'react-router-dom';
import { PageHeader } from 'antd';

const LightContainer = styled.div`
  padding-left: 50px;
`;

const UserTeamsContainer = () => {
  return (
    <LightContainer>
      <PageHeader
        className="no-padding pb-20"
        title="나의 팀 리스트"
        subTitle="너 내 동료가 돼라"
      />
      <Route exact path="/mypage" component={TeamRow} />
      <Route path="/mypage/application/:sortby" component={TeamRow} />
    </LightContainer>
  );
};

export default UserTeamsContainer;
