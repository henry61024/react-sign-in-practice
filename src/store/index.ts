import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReduxPromiseListener from 'redux-promise-listener';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
export const promiseListener = createReduxPromiseListener();

const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, promiseListener.middleware)
);
sagaMiddleware.run(rootSaga);

export default store;
