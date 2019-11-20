import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_GITHUB_TOKEN_REQUEST } from '../store/reducers/user';

const Oauth = () => {
  const { isNew, userId } = useSelector(state => state.user);
  const windowUrl = window.location.search;
  const params = new URLSearchParams(windowUrl);
  const code = params.get('code');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: LOG_IN_GITHUB_TOKEN_REQUEST, payload: { code } });
  });

  alert(userId);
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
