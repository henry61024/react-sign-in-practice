import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { MemoryRouter } from 'react-router-dom';
import Menu from './index';
import '../../index.css';

const withRouterWrapper = (story: Function) => (
  <MemoryRouter>{story()}</MemoryRouter>
);

export default {
  title: 'Components/Menu',
  component: Menu,
  decorators: [withA11y, withRouterWrapper],
};

const links = [
  { to: '/public', text: 'Public Page' },
  { to: '/protected', text: 'Protected Page' },
];

export const withTwoLinks = () => <Menu links={links}></Menu>;
