import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store/modules';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/modules';


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const devTools = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middlewares))
  : compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const store = createStore(rootReducer, devTools);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
