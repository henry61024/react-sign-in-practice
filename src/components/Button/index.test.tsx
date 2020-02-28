import React from 'react';
import { render } from '@testing-library/react';
import Button from './index';
import './index.css';

test('renders text', () => {
  const text = 'Hello';
  const { getByText } = render(<Button>{text}</Button>);
  const textElement = getByText(text);
  expect(textElement).toBeInTheDocument();
});
