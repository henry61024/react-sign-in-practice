import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
import AppMenu from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Components/AppMenu',
  component: AppMenu,
  decorators: [withA11y, withRouterWrapper],
};

export const withTwoLinks = () => <AppMenu></AppMenu>;
