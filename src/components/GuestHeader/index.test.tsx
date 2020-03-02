import React from 'react';
import { render } from '@testing-library/react';
import GuestHeader from './index';

test('renders not signed in if not signed in', () => {
  const { getByText } = render(<GuestHeader></GuestHeader>);
  const headerContent = getByText('You are not signed in.');
  expect(headerContent).toBeInTheDocument();
});
