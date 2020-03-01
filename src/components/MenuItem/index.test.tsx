import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from './index';

test('renders links', () => {
  const linkPath = '/test';
  const linkText = 'test link';
  const { getByText } = render(<MenuItem to={linkPath}>{linkText}</MenuItem>, {
    wrapper: MemoryRouter,
  });
  const link = getByText(linkText);
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute('href', linkPath);
});
