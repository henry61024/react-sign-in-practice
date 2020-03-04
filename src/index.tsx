import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReduxPromiseListener from 'redux-promise-listener';
import * as serviceWorker from './serviceWorker';
import App from './pages/App';
import rootReducer from './reducers';
import rootSaga from './sagas';
import history from './history';
import './index.css';

const sagaMiddleware = createSagaMiddleware();
const reduxPromiseListener = createReduxPromiseListener();
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, reduxPromiseListener.middleware)
);
sagaMiddleware.run(rootSaga);
export const promiseListener = reduxPromiseListener;

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
