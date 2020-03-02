import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AppMenu from './index';

test('renders links', () => {
  const { getByText } = render(<AppMenu></AppMenu>, {
    wrapper: MemoryRouter,
  });
  const publicLink = getByText('Public Page');
  const protectedLink = getByText('Protected Page');
  expect(publicLink).toHaveAttribute('href', '/public');
  expect(protectedLink).toHaveAttribute('href', '/protected');
});
