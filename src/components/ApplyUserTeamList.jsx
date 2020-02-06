import React from 'react';
import { Table, Tag } from 'antd';

const columns = [
  {
    title: '번호',
    dataIndex: 'row',
    key: 'row',
  },
  {
    title: '신청장 이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '로그인 아이디',
    dataIndex: 'username',
    key: 'username',
  },
  {
    title: '깃헙 아이디',
    dataIndex: 'github_account',
    key: 'github_account',
  },
  {
    title: '상태',
    dataIndex: 'application_status',
    key: 'application_status',
  },
];

const statusLabel = {
  승인대기: 'blue',
  승인거절: 'red',
  승인완료: 'green',
  만료: 'orange',
};

const ApplyUserTeamList = ({ list, handleUserDetail }) => {
  const confirmList = list.map(
    ({ id, applicant, github_account, application_status }, idx) => ({
      key: id,
      row: idx + 1,
      name: applicant.nickname,
      username: applicant.username,
      github_account,
      application_status: (
        <Tag color={statusLabel[application_status]}>{application_status}</Tag>
      ),
    }),
  );

  return (
    <Table
      columns={columns}
      dataSource={[...confirmList]}
      size="middle"
      onRow={(record, rowIndex) => {
        return {
          onClick: event => {
            handleUserDetail(rowIndex);
          },
        };
      }}
    />
  );
};

export default ApplyUserTeamList;
