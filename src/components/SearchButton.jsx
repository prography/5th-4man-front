import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const SearchButton = ({ query, handleSearchErrorMessage }) => {
  return (
    <Button
      block
      size="large"
      style={{
        width: '100%',
        backgroundImage: 'linear-gradient(133deg, #5f76f3, #845ef7)',
        color: 'white',
      }}
      onClick={handleSearchErrorMessage}
    >
      {query === '' ? (
        <div>검색</div>
      ) : (
        <Link to={'/teamList?' + query}>검색</Link>
      )}
    </Button>
  );
};

export default SearchButton;
