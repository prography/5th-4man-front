import React from 'react';
import ListContainer from 'containers/ListContainer';
import TagSearchContainer from '../containers/TagSearchCotainer';
import queryString from 'query-string';
import { Divider } from 'antd';

const TeamList = ({ location }) => {
  const query = queryString.parse(location.search);

  return (
    <>
      <section className="list-section">
        <div className="container">
          <Divider />
          <div className="display-flex flex-direction-row justify-content-space-between content-title-aria">
            <div className="section-title">
              <TagSearchContainer />
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
