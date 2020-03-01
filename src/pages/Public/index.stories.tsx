import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Public from './index';
import '../../index.css';

export default {
  title: 'Pages/Public',
  component: Public,
  decorators: [withA11y],
};

export const Content = () => <Public></Public>;
