import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
import Login from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [withA11y, withRouterWrapper],
};

export const Content = () => <Login></Login>;
