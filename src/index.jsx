import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './Root';
import store from './store';
import * as serviceWorker from './serviceWorker';
import ModalContainer from './containers/ModalContainer';

// moment 한글 설정
import 'moment/locale/ko';

import 'styles/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <Root />
    <ModalContainer />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
