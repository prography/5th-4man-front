import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './modules';
import rootSaga from './sagas';

// saga 미들웨어를 생성
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 개발환경일때만 크롬 확장프로그램 추가
const enhancers =
  process.env.NODE_ENV === 'development'
    ? composeEnhancers(applyMiddleware(...middleWares))
    : applyMiddleware(...middleWares);

const configure = initialState => {
  const store = createStore(reducers, initialState, enhancers);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
