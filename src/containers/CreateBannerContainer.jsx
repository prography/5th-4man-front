import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { OPEN_MODAL } from '../store/reducers/modal';

const CreateBanner = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 30px;
  background: #f5f5f5;
  border: 1px solid #efefef;
  margin-bottom: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h2 {
    font-size: 1.25rem;
    margin: 0;
    font-family: Noto Sans Medium;
    color: #5f76f3;
  }

  p {
    margin: 0;
    font-family: Noto Sans Light;
  }

  .btn-wrap {
    display: flex;
    align-items: center;

    .apply-btn {
      &:hover {
        color: #fff;
      }
    }
  }
`;

const CreateBannerContainer = () => {
  const { isLoggedIn } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <CreateBanner>
      <div>
        <h2>마음에 드는 팀이 없다면 직접 만들어보세요!</h2>
        <p>누구나 쉽고 빠르게 만들 수 있어요.</p>
      </div>
      <div className="btn-wrap">
        {isLoggedIn ? (
          <Link to="/teamCreate" className="apply-btn">
            <Icon type="user-add" /> 팀 생성하기
          </Link>
        ) : (
          <button
            type="button"
            className="apply-btn"
            onClick={() =>
              dispatch({ type: OPEN_MODAL, payload: { type: 'login' } })
            }
          >
            팀 생성하기
          </button>
        )}
      </div>
    </CreateBanner>
  );
};

export default CreateBannerContainer;
