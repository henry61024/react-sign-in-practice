import React from 'react';
import { action } from '@storybook/addon-actions';
import { withA11y } from '@storybook/addon-a11y';
import UserHeader from './index';
import '../../index.css';

export default {
  title: 'Components/UserHeader',
  component: UserHeader,
  decorators: [withA11y],
};

export const Header = () => (
  <UserHeader onSignOut={action('on-sign-out')}></UserHeader>
);
