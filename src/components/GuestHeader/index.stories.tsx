import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import GuestHeader from './index';
import '../../index.css';

export default {
  title: 'Components/GuestHeader',
  component: GuestHeader,
  decorators: [withA11y],
};

export const Header = () => <GuestHeader></GuestHeader>;
