import React from 'react';
import auth from '../../services/Auth';
import PrivateRouteContainer, { PrivateRoute } from './index';
import { MockedAuth } from '../../services/Auth/__mocks__';
import { renderWithRouter, renderWithReduxRouter } from '../../utils';
import {
  SIGN_IN_INITIAL_STATUS,
  SIGN_IN_ING_STATUS,
  SIGN_IN_FAIL_STATUS,
  SIGN_IN_CANCEL_STATUS,
  SIGN_OUT_SUCCESS_STATUS,
  SIGN_IN_SUCCESS_STATUS,
  SIGN_OUT_ING_STATUS,
  SIGN_OUT_FAIL_STATUS,
} from '../../types';

jest.mock('../../services/Auth');

/**
 * ==========================================
 * component
 * ==========================================
 */

test('redirect to /login if not authenticated', () => {
  const { history } = renderWithRouter(
    <PrivateRoute isAuthenticated={false} path="/protected"></PrivateRoute>,
    { route: '/protected' }
  );
  expect(history.location.pathname).toBe('/login');
});

test('go to target location if authenticated', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { history } = renderWithRouter(
    <PrivateRoute isAuthenticated={true} path="/protected"></PrivateRoute>,
    { route: '/protected' }
  );
  expect(history.location.pathname).toBe('/protected');
});

test('no redirect if location do not match', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { history } = renderWithRouter(
    <PrivateRoute isAuthenticated={false} path="/protected"></PrivateRoute>
  );
  expect(history.location.pathname).toBe('/');
});

/**
 * ==========================================
 * container
 * ==========================================
 */

test('redirect to /login if is in SIGN_IN_INITIAL_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_INITIAL_STATUS,
          username: null,
          password: null,
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('redirect to /login if is in SIGN_IN_ING_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_ING_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('redirect to /login if is in SIGN_IN_FAIL_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_FAIL_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('redirect to /login if is in SIGN_IN_CANCEL_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_CANCEL_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('redirect to /login if is in SIGN_OUT_SUCCESS_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_OUT_SUCCESS_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('redirect to /login if is in SIGN_OUT_SUCCESS_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_OUT_SUCCESS_STATUS,
          username: null,
          password: null,
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/login');
});

test('go to target location if is in SIGN_IN_SUCCESS_STATUS', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_SUCCESS_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/protected');
});

test('go to target location if is in SIGN_OUT_ING_STATUS', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_OUT_ING_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/protected');
});

test('go to target location if is in SIGN_OUT_FAIL_STATUS', () => {
  const { history } = renderWithReduxRouter(
    <PrivateRouteContainer path="/protected"></PrivateRouteContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_OUT_FAIL_STATUS,
          username: 'test',
          password: 'test',
        },
      },
      route: '/protected',
    }
  );
  expect(history.location.pathname).toBe('/protected');
});
