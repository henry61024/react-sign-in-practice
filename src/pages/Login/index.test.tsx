import React from 'react';
import LoginContainer, { Login } from './index';
import { renderWithRouter, renderWithReduxRouter } from '../../utils';
import { fireEvent } from '@testing-library/react';

/**
 * ==========================================
 * component
 * ==========================================
 */

test('renders login content', () => {
  const mockFn = jest.fn();
  const { getByText } = renderWithRouter(
    <Login
      isFormOpened={false}
      openSignInForm={mockFn}
      cancelSignIn={mockFn}
    ></Login>
  );
  const loginContent = getByText(
    'You must sign in to view the page at /protected'
  );
  expect(loginContent).toBeInTheDocument();
});

test('renders sign in button', () => {
  const mockFn = jest.fn();
  const { getByRole } = renderWithRouter(
    <Login
      isFormOpened={false}
      openSignInForm={mockFn}
      cancelSignIn={mockFn}
    ></Login>
  );
  const signInButton = getByRole('button');
  expect(signInButton).toBeInTheDocument();
  expect(signInButton).toHaveTextContent('Sign In');
});

test('opens sign in form if isFormOpened true', () => {
  const mockFn = jest.fn();
  const { getAllByRole } = renderWithRouter(
    <Login
      isFormOpened={true}
      openSignInForm={mockFn}
      cancelSignIn={mockFn}
    ></Login>
  );
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(2);
});

test('openSignInForm fires correctly', () => {
  const mockedOpenSignInForm = jest.fn();
  const mockedCancelSignIn = jest.fn();
  const { getByRole } = renderWithRouter(
    <Login
      isFormOpened={false}
      openSignInForm={mockedOpenSignInForm}
      cancelSignIn={mockedCancelSignIn}
    ></Login>
  );
  const signInButton = getByRole('button');
  fireEvent.click(signInButton);
  expect(mockedOpenSignInForm).toBeCalledTimes(1);
});

test('cancelSignIn fires correctly', () => {
  const mockedOpenSignInForm = jest.fn();
  const mockedCancelSignIn = jest.fn();
  const { getByText } = renderWithRouter(
    <Login
      isFormOpened={true}
      openSignInForm={mockedOpenSignInForm}
      cancelSignIn={mockedCancelSignIn}
    ></Login>
  );
  const cancelButton = getByText('Cancel');
  fireEvent.click(cancelButton);
  expect(mockedCancelSignIn).toBeCalledTimes(1);
});

/**
 * ==========================================
 * container
 * ==========================================
 */

test('open sign in form if click sign in button', () => {
  const { getByRole, getAllByRole } = renderWithReduxRouter(
    <LoginContainer></LoginContainer>
  );
  const signInButton = getByRole('button');
  fireEvent.click(signInButton);
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(2);
});

test('show form if isFormOpened true', () => {
  const { getAllByRole } = renderWithReduxRouter(
    <LoginContainer></LoginContainer>,
    {
      initialState: {
        signInForm: {
          isOpen: true,
        },
      },
    }
  );
  const inputs = getAllByRole('textbox');
  expect(inputs.length).toBe(2);
});

test('close form if click cancel button', () => {
  const { getByText, getByRole, queryByRole } = renderWithReduxRouter(
    <LoginContainer></LoginContainer>
  );
  const signInButton = getByRole('button');
  fireEvent.click(signInButton);
  const cancelButton = getByText('Cancel');
  fireEvent.click(cancelButton);
  const input = queryByRole('textbox');
  expect(input).not.toBeInTheDocument();
});

test('close form if click cancel button after sign in request', () => {
  const { getByText, getByPlaceholderText, getByRole } = renderWithReduxRouter(
    <LoginContainer></LoginContainer>
  );
  const signInButton = getByRole('button');
  fireEvent.click(signInButton);

  const userNameInput = getByPlaceholderText('Enter username');
  const passwordInput = getByPlaceholderText('Enter password');
  fireEvent.change(userNameInput, { target: { value: 'guest' } });
  fireEvent.change(passwordInput, { target: { value: 'guest' } });
  const cancelButton = getByText('Cancel');
  fireEvent.click(cancelButton);
  expect(userNameInput).not.toBeInTheDocument();
  expect(passwordInput).not.toBeInTheDocument();
});

test('form should not exist if isFormOpened false', () => {
  const { queryByRole } = renderWithReduxRouter(
    <LoginContainer></LoginContainer>,
    {
      initialState: {
        signInForm: {
          isOpen: false,
        },
      },
    }
  );
  const input = queryByRole('textbox');
  expect(input).not.toBeInTheDocument();
});
