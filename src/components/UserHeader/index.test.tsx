import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserHeader from './index';

const onSignOut = jest.fn();

test('renders not signed in if not signed in', () => {
  const { getByText, getByRole } = render(
    <UserHeader onSignOut={onSignOut}></UserHeader>
  );
  const headerContent = getByText('Welcome!');
  const signOutButton = getByRole('button');
  expect(headerContent).toBeInTheDocument();
  expect(signOutButton).toHaveTextContent('Sign out');
});

test('fires sign out if click button', () => {
  const { getByRole } = render(<UserHeader onSignOut={onSignOut}></UserHeader>);
  const signOutButton = getByRole('button');
  fireEvent.click(signOutButton);
  expect(onSignOut).toBeCalledTimes(1);
});
