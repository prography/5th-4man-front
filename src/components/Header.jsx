import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { OPEN_MODAL } from '../store/reducers/modal';

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header>
      <div className="container display-flex justify-content-space-between">
        <Link to="/" className="logo">
          <span className="point text-bold">개</span>발은{' '}
          <span className="point text-bold">같</span>이{' '}
          <span className="point text-bold">하</span>자
        </Link>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/">서비스 소개</Link>
            </li>
            <li>
              <Link to="/" onClick={() => dispatch({ type: OPEN_MODAL })}>
                로그인
              </Link>
            </li>
            <li>
              <Link to="/register">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
