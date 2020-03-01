import React from 'react';
import { render } from '@testing-library/react';
import Public from './index';

test('renders public content', () => {
  const { getByText } = render(<Public></Public>);
  const publicContent = getByText('Public');
  expect(publicContent).toBeInTheDocument();
});
