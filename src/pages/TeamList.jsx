import React from 'react';
import ListContainer from 'containers/ListContainer';
import { Divider } from 'antd';
import SubSearchContainer from '../containers/SubSearchContainer';
import queryString from 'query-string';

const TeamList = ({ location }) => {
  const query = queryString.parse(location.search);
  return (
    <>
      <section className="list-section">
        <div className="container">
          <div style={{ margin: '1% 0' }}>
            <div className="section-title">
              <SubSearchContainer tags={query.tag} />
            </div>
          </div>
          <Divider style={{ margin: '1% 0' }} />

          <ListContainer type="search" tags={query} />
        </div>
      </section>
    </>
  );
};

export default TeamList;
