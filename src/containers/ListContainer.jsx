import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from '../store/modules/list';

// 리스트 컨테이너
const ListContainer = ({ list, ListActions }) => {
  return list.map((key, { title }) => <div key={key}>{title}</div>);
};

// props 로 넣어줄 스토어 상태값
const mapStateToProps = ({ list }) => ({
  list: list.list,
});

// props 로 넣어줄 액션 생성 함수
const mapDispatchToProps = dispatch => ({
  ListActions: bindActionCreators(listActions, dispatch),
});

// 리덕스 스토어에 연동
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListContainer);
