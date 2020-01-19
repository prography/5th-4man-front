import React from 'react';
import styled from 'styled-components';

import CardImage from 'components/CardImage';

const ItemContainer = styled.div`
  width: 100%;
  border: 1px solid #efefef;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  margin-bottom: 5px;

  .image-wrap {
    max-width: 230px;
    min-width: 100px;
    width: 25%;
  }

  h2 {
    font-family: Noto Sans Bold;
    font-size: 1.2rem;
    margin-bottom: 3px;
  }

  p {
    font-size: 0.825rem;
    color: #999;
  }
`;

const MyTeamItem = () => {
  return (
    <ItemContainer>
      <div className="image-wrap">
        <CardImage imageUrl="https://s3.ap-northeast-2.amazonaws.com/storage.fourman.store/media/team/image/2020/01/03/kotlin.png" />
      </div>
      <div className="pt-10 pl-5">
        <h2>코틀린 하실분?</h2>
        <p>신청 현황: "대기중"</p>
      </div>
    </ItemContainer>
  );
};

export default MyTeamItem;
