import React from 'react';
import ListContainer from 'containers/ListContainer';

import Banner from 'components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <section className="content">
        <div className="content-inner">
          <ListContainer />
        </div>
      </section>
    </>
  );
};

export default Home;
