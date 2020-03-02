import React from 'react';
import Menu from '../../components/Menu';

const links = [
  { to: '/public', text: 'Public Page' },
  { to: '/protected', text: 'Protected Page' },
];

const AppMenu: React.FC = () => <Menu links={links}></Menu>;

export default AppMenu;
