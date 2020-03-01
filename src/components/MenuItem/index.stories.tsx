import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
import MenuItem from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
  decorators: [withA11y, withRouterWrapper],
};

export const withText = () => <MenuItem to={'/public'}>Public</MenuItem>;
