import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL } from '../store/reducers/modal';
import { LOG_OUT } from '../store/reducers/user';

const Header = ({ location }) => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector(state => state.user);

  return (
    <header className={location.pathname !== '/' && 'scrolled'}>
      <div className="container display-flex justify-content-space-between">
        <Link to="/" className="logo">
          <span className="point">개</span>발은{' '}
          <span className="point">같</span>이 <span className="point">하</span>
          자
        </Link>
        <div className="navigation">
          <ul>
            {isLoggedIn ? (
              <>
                <li>
                  <Link to="#" onClick={() => dispatch({ type: LOG_OUT })}>
                    로그아웃
                  </Link>
                </li>
                <li>
                  <Link to="/">마이페이지</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="#"
                    onClick={() =>
                      dispatch({ type: OPEN_MODAL, payload: { type: 'login' } })
                    }
                  >
                    로그인
                  </Link>
                </li>
                <li>
                  <Link to="/register">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default withRouter(Header);
