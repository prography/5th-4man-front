import React from 'react';
import ListContainer from 'containers/ListContainer';

import Banner from 'components/Banner';

const Home = () => {
  return (
    <>
      <Banner />
      <section id="content">
        <div className="container">
          <ListContainer />
        </div>
      </section>
    </>
  );
};

export default Home;
