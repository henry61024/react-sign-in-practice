import React from 'react';
import { render } from '@testing-library/react';
import { createStore, Store, Reducer } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory, History, LocationState } from 'history';
import rootReducer from '../reducers';

interface renderWithReduxOption {
  initialState?: object;
  reducer?: Reducer;
  store?: Store;
}

interface renderWithRouterOption {
  route?: string;
  history?: History<LocationState>;
}

interface renderWithReduxRouterOption
  extends renderWithReduxOption,
    renderWithRouterOption {}

export const renderWithRedux = (
  ui: React.ReactElement,
  {
    initialState = {},
    reducer = rootReducer,
    store = createStore(reducer, initialState),
  }: renderWithReduxOption
) => ({
  ...render(<Provider store={store}>{ui}</Provider>),
  store,
});

export const renderWithRouter = (
  ui: React.ReactElement,
  {
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: renderWithRouterOption = {}
) => ({
  ...render(<Router history={history}>{ui}</Router>),
  history,
});

export const renderWithReduxRouter = (
  ui: React.ReactElement,
  {
    initialState = {},
    reducer = rootReducer,
    store = createStore(reducer, initialState),
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  }: renderWithReduxRouterOption = {}
) => ({
  ...render(
    <Provider store={store}>
      <Router history={history}>{ui}</Router>
    </Provider>
  ),
  history,
  store,
});
