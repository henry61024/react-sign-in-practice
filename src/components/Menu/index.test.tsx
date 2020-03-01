import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Menu from './index';

const links = [
  { to: '/first', text: 'first link' },
  { to: '/second', text: 'second link' },
];

test('renders links', () => {
  const { getByText } = render(<Menu links={links}></Menu>, {
    wrapper: MemoryRouter,
  });
  const firstLink = getByText('first link');
  const secondLink = getByText('second link');
  expect(firstLink).toHaveAttribute('href', links[0].to);
  expect(secondLink).toHaveAttribute('href', links[1].to);
});
