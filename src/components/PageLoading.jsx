import React from 'react';
import styled from 'styled-components';

import { Spin } from 'antd';

const PageLoadingOverlay = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PageLoading = () => {
  return (
    <PageLoadingOverlay>
      <Spin tip="loading..." />
    </PageLoadingOverlay>
  );
};

export default PageLoading;
