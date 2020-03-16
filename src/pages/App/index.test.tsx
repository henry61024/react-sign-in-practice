import React from 'react';
import { fireEvent } from '@testing-library/react';
import { renderWithReduxRouter } from '../../utils/test';
import App from './index';

jest.mock('../../services/Auth');

test('renders guest header and menu', () => {
  const { getByText } = renderWithReduxRouter(<App />);
  const publicLink = getByText('Public Page');
  const protectedLink = getByText('Protected Page');
  const headerContent = getByText('You are not signed in.');
  expect(publicLink).toBeInTheDocument();
  expect(protectedLink).toBeInTheDocument();
  expect(headerContent).toBeInTheDocument();
});

test('location at / before click menu', () => {
  const { history } = renderWithReduxRouter(<App />);
  expect(history.location.pathname).toBe('/');
});

test('location at /public after click public link', () => {
  const { getByText, history } = renderWithReduxRouter(<App />);
  const publicLink = getByText('Public Page');
  fireEvent.click(publicLink);
  expect(history.location.pathname).toBe('/public');
});

test('location at /login after click protected link', () => {
  const { getByText, history } = renderWithReduxRouter(<App />);
  const protectedLink = getByText('Protected Page');
  fireEvent.click(protectedLink);
  expect(history.location.pathname).toBe('/login');
});
