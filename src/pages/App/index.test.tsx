import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import App from './index';

jest.mock('../../services/Auth');

test('renders guest header and menu', () => {
  const { getByText } = render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const publicLink = getByText('Public Page');
  const protectedLink = getByText('Protected Page');
  const headerContent = getByText('You are not signed in.');
  expect(publicLink).toBeInTheDocument();
  expect(protectedLink).toBeInTheDocument();
  expect(headerContent).toBeInTheDocument();
});

test('location at / before click menu', () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(history.location.pathname).toBe('/');
});

test('location at /public after click public link', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const publicLink = getByText('Public Page');
  fireEvent.click(publicLink);
  expect(history.location.pathname).toBe('/public');
});

test('location at /login after click protected link', () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  const protectedLink = getByText('Protected Page');
  fireEvent.click(protectedLink);
  expect(history.location.pathname).toBe('/login');
});
