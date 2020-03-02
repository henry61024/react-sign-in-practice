import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Protected from './index';
import '../../index.css';

export default {
  title: 'Pages/Protected',
  component: Protected,
  decorators: [withA11y],
};

export const Content = () => <Protected></Protected>;
