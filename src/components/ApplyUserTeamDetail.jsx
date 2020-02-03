import React from 'react';
import ProfileBox from 'components/ProfileBox';
import { Empty, Button, Icon } from 'antd';

const ApplyUserTeamDetail = ({
  list,
  rowIndex,
  handleApprove,
  handleRefuse,
}) => {
  const userDetail = list[rowIndex];
  return rowIndex === -1 ? (
    <Empty
      image={Empty.PRESENTED_IMAGE_SIMPLE}
      description="왼쪽 리스트를 클릭해서 신청자 정보를 확인해 보세요."
    />
  ) : (
    <div>
      <ProfileBox
        username={userDetail.applicant.username}
        introduction={userDetail.applicant.introduction}
        nickname={userDetail.applicant.nickname}
        image={userDetail.applicant.image}
      />
      <div
        className="display-flex flex-direction-column justify-content-center align-items-center mb-5"
        style={{ paddingTop: '3%', borderTop: '1px solid #efefef' }}
      >
        <div>
          <div>{userDetail.reason}</div>

          <div>
            <Icon type="github" />{' '}
            <a
              href={`https://github.com/${userDetail.github_account}`}
              target="_blank"
              style={{ fontSize: '12px' }}
            >
              {userDetail.github_account}
            </a>
          </div>
          <div>
            <Button
              size="large"
              style={{
                color: 'white',
                backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
              }}
              onClick={() => handleApprove(userDetail.id)}
            >
              승인
            </Button>
            <Button
              size="large"
              className="m-5"
              style={{
                color: 'white',
                backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
              }}
              onClick={() => handleRefuse(userDetail.id)}
            >
              승인 거절
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyUserTeamDetail;
