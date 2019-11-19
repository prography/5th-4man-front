import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOG_IN_GITHUB_TOKEN_REQUEST } from '../store/reducers/user';

const Oauth = () => {
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const code = params.get('code');
  const dispatch = useDispatch();

  dispatch({ type: LOG_IN_GITHUB_TOKEN_REQUEST, payload: { code } });

  return (
    <>
      <div>Loading...</div>
      <Route
        render={() => (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )}
      />
    </>
  );
};
export default Oauth;
