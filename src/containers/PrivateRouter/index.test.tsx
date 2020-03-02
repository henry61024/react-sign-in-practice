import React from 'react';
import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import auth from '../../services/Auth';
import PrivateRoute from './index';
import { MockedAuth } from '../../services/Auth/__mocks__';

jest.mock('../../services/Auth');

test('redirect to /login if not authenticated', () => {
  const history = createMemoryHistory({ initialEntries: ['/protected'] });
  render(
    <Router history={history}>
      <PrivateRoute path="/protected"></PrivateRoute>
    </Router>
  );
  expect(history.location.pathname).toBe('/login');
});

test('go to target location if authenticated', async () => {
  const history = createMemoryHistory({ initialEntries: ['/protected'] });
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  render(
    <Router history={history}>
      <PrivateRoute path="/protected"></PrivateRoute>
    </Router>
  );
  expect(history.location.pathname).toBe('/protected');
});

test('no redirect if location do not match', async () => {
  const history = createMemoryHistory({ initialEntries: ['/'] });
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  render(
    <Router history={history}>
      <PrivateRoute path="/protected"></PrivateRoute>
    </Router>
  );
  expect(history.location.pathname).toBe('/');
});
