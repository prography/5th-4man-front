import React from 'react';
import ListContainer from 'containers/ListContainer';
import queryString from 'query-string';
import { Divider } from 'antd';
import SubSearchContainer from '../containers/SubSearchContainer';

const TeamList = ({ location }) => {
  const query = queryString.parse(location.search);

  return (
    <>
      <section className="list-section">
        <div className="container">
          <Divider />
          <div className="display-flex flex-direction-row justify-content-space-between content-title-aria">
            <div className="section-title">
              <SubSearchContainer/>
              {/* <TagSearchContainer /> */}
            </div>
          </div>
          <Divider />
          <ListContainer type="search" tags={query} />
        </div>
      </section>
    </>
  );
};

export default TeamList;
