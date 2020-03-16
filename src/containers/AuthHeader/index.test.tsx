import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import AuthHeaderContainer, { AuthHeader } from './index';
import { renderWithReduxRouter } from '../../utils';
import {
  SIGN_IN_INITIAL_STATUS,
  SIGN_IN_SUCCESS_STATUS,
  SIGN_OUT_ING_STATUS,
} from '../../types';

jest.mock('../../services/Auth');

/**
 * ==========================================
 * component
 * ==========================================
 */

test('renders guest header if is not authenticated', () => {
  const mockSignOut = jest.fn();
  const { getByText } = render(
    <AuthHeader isAuthenticated={false} signOut={mockSignOut}></AuthHeader>
  );

  const guestContent = getByText('You are not signed in.');
  expect(guestContent).toBeInTheDocument();
});

test('renders user header if is authenticated', () => {
  const mockedSignOut = jest.fn();
  const { getByText, getByRole } = render(
    <AuthHeader isAuthenticated={true} signOut={mockedSignOut}></AuthHeader>
  );

  const userContent = getByText('Welcome!');
  const signOutButton = getByRole('button');
  expect(userContent).toBeInTheDocument();
  expect(signOutButton).toHaveTextContent('Sign out');
});

test('signout fires correctly', () => {
  const mockedSignOut = jest.fn();
  const { getByText, getByRole } = render(
    <AuthHeader isAuthenticated={true} signOut={mockedSignOut}></AuthHeader>
  );

  const userContent = getByText('Welcome!');
  const signOutButton = getByRole('button');
  expect(userContent).toBeInTheDocument();
  expect(signOutButton).toHaveTextContent('Sign out');
  fireEvent.click(signOutButton);
  expect(mockedSignOut).toBeCalledTimes(1);
});

/**
 * ==========================================
 * container
 * ==========================================
 */

test('renders guest header before signed in', () => {
  const { getByText } = renderWithReduxRouter(
    <AuthHeaderContainer></AuthHeaderContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_INITIAL_STATUS,
          username: null,
          password: null,
        },
      },
    }
  );

  const guestContent = getByText('You are not signed in.');
  expect(guestContent).toBeInTheDocument();
});

test('renders user header if sign in succeeded', async () => {
  const { getByText, getByRole } = renderWithReduxRouter(
    <AuthHeaderContainer></AuthHeaderContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_SUCCESS_STATUS,
          username: null,
          password: null,
        },
      },
    }
  );
  const userContent = getByText('Welcome!');
  const signOutButton = getByRole('button');
  expect(userContent).toBeInTheDocument();
  expect(signOutButton).toHaveTextContent('Sign out');
});

test('renders guest header after signed out', async () => {
  const { getByText, getByRole, store } = renderWithReduxRouter(
    <AuthHeaderContainer></AuthHeaderContainer>,
    {
      initialState: {
        auth: {
          status: SIGN_IN_SUCCESS_STATUS,
          username: null,
          password: null,
        },
      },
    }
  );
  const signOutButton = getByRole('button');
  const userContent = getByText('Welcome!');
  expect(userContent).toBeInTheDocument();
  fireEvent.click(signOutButton);
  expect(store.getState().auth).toEqual({
    status: SIGN_OUT_ING_STATUS,
    username: null,
    password: null,
  });
});
