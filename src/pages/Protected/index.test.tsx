import React from 'react';
import { render } from '@testing-library/react';
import Protected from './index';

test('renders protected content', () => {
  const { getByText } = render(<Protected></Protected>);
  const protectedContent = getByText('Protected');
  expect(protectedContent).toBeInTheDocument();
});
