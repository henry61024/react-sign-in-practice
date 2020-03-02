import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { withA11y } from '@storybook/addon-a11y';
import App from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Pages/App',
  component: App,
  decorators: [withA11y, withRouterWrapper],
};

export const Content = () => <App></App>;
