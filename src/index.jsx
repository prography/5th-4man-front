import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';
import * as serviceWorker from './serviceWorker';
import LoginContainer from './containers/LoginContainer';

import 'styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Root />
    <LoginContainer />
  </Provider>,
  document.getElementById('root'),
);

const ModalContainer = ({ children }) => {
  const el = document.getElementById('login-modal');
  return ReactDOM.createPortal(children, el);
};

export default ModalContainer;

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
