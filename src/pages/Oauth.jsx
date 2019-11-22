import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_GITHUB_TOKEN_REQUEST } from '../store/reducers/user';

const Oauth = () => {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const code = params.get('code');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOG_IN_GITHUB_TOKEN_REQUEST, payload: { code } });
  }, []);

  const { isNew, isLoggedIn } = useSelector(state => state.user);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <>
      <div>Loading...</div>
      {isNew ? (
        <Route
          render={() => (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )}
        />
      ) : (
        <Route
          render={() => (
            <Redirect
              to={{
                pathname: '/',
              }}
            />
          )}
        />
      )}
    </>
  );
};
export default Oauth;
