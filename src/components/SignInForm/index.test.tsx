import React from 'react';
import {
  render,
  fireEvent,
  wait,
  waitForElement,
} from '@testing-library/react';
import { FORM_ERROR } from 'final-form';
import SignInForm from './index';

const success = jest.fn();
const fail = jest
  .fn()
  .mockReturnValue({ [FORM_ERROR]: 'Incorrect username or password.' });
const fakeClose = jest.fn();

test('renders username form', () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const userNameLabel = getByLabelText('Username');
  const userNameInput = getByPlaceholderText('Enter username');
  expect(userNameLabel).toBeInTheDocument();
  expect(userNameInput).toBeInTheDocument();
});

test('renders password form', () => {
  const { getByLabelText, getByPlaceholderText } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const passwordLabel = getByLabelText('Password');
  const passwordInput = getByPlaceholderText('Enter password');
  expect(passwordLabel).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('renders sign in button', () => {
  const signInButtonPosition = 1;
  const { getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const signInButton = getAllByRole('button')[signInButtonPosition];
  expect(signInButton).toHaveTextContent('Sign In');
  expect(signInButton).toHaveAttribute('type', 'submit');
  expect(signInButton).toBeInTheDocument();
});

test('renders cancel button', () => {
  const cancelButtonPosition = 0;
  const { getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const cancelButton = getAllByRole('button')[cancelButtonPosition];
  expect(cancelButton).toHaveTextContent('Cancel');
  expect(cancelButton).toBeInTheDocument();
});

test('renders warning when blur username', async () => {
  const { getByText, getByPlaceholderText } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const userNameInput = getByPlaceholderText('Enter username');
  fireEvent.blur(userNameInput);
  const userNameRequired = await waitForElement(() =>
    getByText('This is a required field.')
  );
  expect(userNameRequired).toBeInTheDocument();
});

test('renders warning when blur password', async () => {
  const { getByText, getByPlaceholderText } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const passwordInput = getByPlaceholderText('Enter password');
  fireEvent.blur(passwordInput);
  const passwordRequired = await waitForElement(() =>
    getByText('This is a required field.')
  );
  expect(passwordRequired).toBeInTheDocument();
});

test('renders warnings when blur username and password', async () => {
  const { getAllByText, getByPlaceholderText } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const userNameInput = getByPlaceholderText('Enter username');
  const passwordInput = getByPlaceholderText('Enter password');
  fireEvent.blur(userNameInput);
  fireEvent.blur(passwordInput);
  const inputRequires = await waitForElement(() =>
    getAllByText('This is a required field.')
  );
  expect(inputRequires.length).toBe(2);
});

test('on-close triggered when click cancel', () => {
  const cancelButtonPosition = 0;
  const { getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const cancelButton = getAllByRole('button')[cancelButtonPosition];
  fireEvent.click(cancelButton);
  expect(fakeClose).toBeCalledTimes(1);
});

test('disables button if username empty', () => {
  const signInButtonPosition = 1;
  const { getByPlaceholderText, getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const passwordInput = getByPlaceholderText('Enter password');
  const signInButton = getAllByRole('button')[signInButtonPosition];
  fireEvent.change(passwordInput, { target: { value: 'test' } });
  expect(signInButton).toHaveAttribute('disabled');
});

test('disables button if password empty', () => {
  const signInButtonPosition = 1;
  const { getByPlaceholderText, getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const usernameInput = getByPlaceholderText('Enter username');
  const signInButton = getAllByRole('button')[signInButtonPosition];
  fireEvent.change(usernameInput, { target: { value: 'test' } });
  expect(signInButton).toHaveAttribute('disabled');
});

test('renders warning when login fail', async () => {
  const signInButtonPosition = 1;
  const { getByText, getByPlaceholderText, getAllByRole } = render(
    <SignInForm onSignIn={fail} onClose={fakeClose}></SignInForm>
  );
  const userNameInput = getByPlaceholderText('Enter username');
  const passwordInput = getByPlaceholderText('Enter password');
  const signInButton = getAllByRole('button')[signInButtonPosition];
  fireEvent.change(userNameInput, { target: { value: 'test' } });
  fireEvent.change(passwordInput, { target: { value: 'test' } });
  expect(signInButton).not.toHaveAttribute('disable');
  fireEvent.click(signInButton);
  const signInError = await waitForElement(() =>
    getByText('Incorrect username or password.')
  );
  expect(signInError).toBeInTheDocument();
});

test('no warning rendered when login success', async () => {
  const signInButtonPosition = 1;
  const { queryByText, getByPlaceholderText, getAllByRole } = render(
    <SignInForm onSignIn={success} onClose={fakeClose}></SignInForm>
  );
  const userNameInput = getByPlaceholderText('Enter username');
  const passwordInput = getByPlaceholderText('Enter password');
  const signInButton = getAllByRole('button')[signInButtonPosition];
  fireEvent.change(userNameInput, { target: { value: 'test' } });
  fireEvent.change(passwordInput, { target: { value: 'test' } });
  expect(signInButton).not.toHaveAttribute('disable');
  fireEvent.click(signInButton);
  await wait(() => {
    const signInWarning = queryByText('Incorrect username or password.');
    expect(signInWarning).not.toBeInTheDocument();
  });
});
