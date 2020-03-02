import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import auth from '../../services/Auth';
import AuthHeader from './index';
import { MockedAuth } from '../../services/Auth/__mocks__/index';

jest.mock('../../services/Auth');

test('renders guest header before signed in', () => {
  const { getByText } = render(<AuthHeader></AuthHeader>, {
    wrapper: MemoryRouter,
  });
  const guestContent = getByText('You are not signed in.');
  expect(guestContent).toBeInTheDocument();
});

test('renders user header after signed in', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { getByText, getByRole } = render(<AuthHeader></AuthHeader>, {
    wrapper: MemoryRouter,
  });
  const userContent = getByText('Welcome!');
  const signOutButton = getByRole('button');
  expect(userContent).toBeInTheDocument();
  expect(signOutButton).toHaveTextContent('Sign out');
});

test('renders guest header after signed out', async () => {
  (auth as MockedAuth).__setAuthInfo('test', 'test');
  await auth.authenticate('test', 'test');
  const { getByText, getByRole } = render(<AuthHeader></AuthHeader>, {
    wrapper: MemoryRouter,
  });
  const signOutButton = getByRole('button');
  const userContent = getByText('Welcome!');
  expect(userContent).toBeInTheDocument();
  fireEvent.click(signOutButton);
  const guestContent = await waitForElement(() =>
    getByText('You are not signed in.')
  );
  expect(guestContent).toBeInTheDocument();
});
