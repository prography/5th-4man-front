import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    bno: '번호',
    dataIndex: 'key',
    key: 'key',
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

const ApplyUserTeamList = ({ list }) => {
  const confirmList = list.map(({ id, applicant, github_account }) => ({
    key: id,
    name: applicant.nickname,
    username: applicant.username,
    github_account,
  }));

  return (
    <Table columns={columns} dataSource={[...confirmList]} size="middle" />
  );
};

export default ApplyUserTeamList;
