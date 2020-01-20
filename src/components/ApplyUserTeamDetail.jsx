import React from 'react';
import ProfileBox from 'components/ProfileBox';
import { Empty } from 'antd';

const ApplyUserTeamDetail = ({ list, rowIndex }) => {
  const userDetail = list[rowIndex];
  return rowIndex === -1 ? (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="왼쪽 리스트를 클릭해서 신청자 정보를 확인해 보세요."
    />
  ) : (
    <>
      <ProfileBox
        username={userDetail.applicant.username}
        introduction={userDetail.applicant.introduction}
        nickname={userDetail.applicant.nickname}
        image={userDetail.applicant.image}
      />
      <div>깃헙 아이디 : {userDetail.github_account}</div>
      <div>신청 이유 : {userDetail.reason}</div>
    </>
  );
};

export default ApplyUserTeamDetail;
