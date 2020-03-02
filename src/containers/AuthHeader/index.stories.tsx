import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
import AuthHeader from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Components/AuthHeader',
  component: AuthHeader,
  decorators: [withA11y, withRouterWrapper],
};

export const Header = () => <AuthHeader></AuthHeader>;
