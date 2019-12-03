import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';

const saveToLcalStorage = state => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (e) {
    Error(e);
  }
};

const localFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    Error(e);
    return undefined;
  }
};

// saga 미들웨어를 생성
const sagaMiddleware = createSagaMiddleware();
const middleWares = [sagaMiddleware];

const isDevelopment = process.env.NODE_ENV === 'development';

// 개발환경일때만 크롬 확장프로그램 추가
const devTools = isDevelopment && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devTools || compose;

const configure = () => {
  const persistedState = localFromLocalStorage();
  const store = createStore(
    reducers,
    persistedState,
    composeEnhancers(applyMiddleware(...middleWares)),
  );

  sagaMiddleware.run(rootSaga);
  store.subscribe(() => saveToLcalStorage(store.getState()));

  return store;
};

export default configure;
