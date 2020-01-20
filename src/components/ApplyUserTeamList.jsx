import React from 'react';
import { Table } from 'antd';

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
];

const ApplyUserTeamList = ({ list, handleUserDetail }) => {
  const confirmList = list.map(({ id, applicant, github_account }, idx) => ({
    key: id,
    row: idx + 1,
    name: applicant.nickname,
    username: applicant.username,
    github_account,
  }));

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
