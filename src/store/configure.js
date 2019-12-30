import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

// saga 미들웨어를 생성
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const isDevelopment = process.env.NODE_ENV === 'development';

// 개발환경일때만 크롬 확장프로그램 추가
const devTools = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = initialState => {
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleWares)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configure;
