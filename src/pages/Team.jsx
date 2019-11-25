import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Icon, Tabs, Tag } from 'antd';
import swal from 'sweetalert';

import CardImage from 'components/CardImage';

const { TabPane } = Tabs;

const Team = () => {
  const tags = ['React.JS', 'Frontend'];

  return (
    <div id="team-detail">
      <div className="container">
        <Row gutter={16}>
          <Col md={24} xl={16} className="left-content">
            <CardImage />
            <div className="tab-wrap">
              <Tabs defaultActiveKey="1">
                <TabPane tab={<span>소개</span>} key="1">
                  <div className="tab-1-content">
                    <h2 className="text-bold">자바스크립트 스터디 구합니다.</h2>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Pariatur maxime ducimus ratione quod nemo. Modi, facere
                    dolore. Hic, in? Fugiat.
                  </div>
                </TabPane>
              </Tabs>
            </div>
          </Col>
          <Col md={24} xl={8} className="right-content">
            <div className="fix-menu-wrap">
              <div className="fix-menu">
                <Link
                  to="/"
                  className="leader-name display-inline-block main-color-blue"
                >
                  By. 꼬부기
                </Link>
                <h2 className="text-bold">자바스크립트 스터디 구합니다.</h2>
                <div className="tag-wrap mb-10 pb-20">
                  {tags.map((o, idx) => (
                    <Tag key={idx} color="geekblue">
                      {o}
                    </Tag>
                  ))}
                </div>
                <Row gutter={10} className="mb-10">
                  <Col span={12}>
                    <button type="button" className="display-block sub-btn">
                      <Icon
                        type="heart"
                        className="heart-icon pr-10"
                        // theme="filled"
                      />
                      1,000
                    </button>
                  </Col>
                  <Col span={12}>
                    <button type="button" className="display-block sub-btn">
                      <Icon type="share-alt" className="pr-10" />
                      공유하기
                    </button>
                  </Col>
                </Row>
                <div>
                  <button
                    type="button"
                    className="apply-btn display-block"
                    onClick={() =>
                      swal(
                        '신청 완료!',
                        '축하드립니다! 팀 신청이 완료 되었습니다.',
                        'success',
                      )}
                  >
                    신청하기
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Team;
