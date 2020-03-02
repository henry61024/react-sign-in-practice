import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';

test('renders login content', () => {
  const { getByText } = render(<Login></Login>, { wrapper: MemoryRouter });
  const loginContent = getByText(
    'You must sign in to view the page at /protected'
  );
  expect(loginContent).toBeInTheDocument();
});

test('renders sign in button', () => {
  const { getByRole } = render(<Login></Login>, {
    wrapper: MemoryRouter,
  });
  const signInButton = getByRole('button');
  expect(signInButton).toBeInTheDocument();
  expect(signInButton).toHaveTextContent('Sign In');
});

test('opens sign in form if button clicked', () => {
  const { getByRole, getAllByRole } = render(<Login></Login>, {
    wrapper: MemoryRouter,
  });
  const signInButton = getByRole('button');
  fireEvent.click(signInButton);
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(2);
});
