import React from 'react';
import styled from 'styled-components';
import MenuItem from '../MenuItem';

const Nav = styled.nav`
  margin: 15px 0;
`;

interface MenuItem {
  to: string;
  text: string;
}

interface MenuProps {
  links: MenuItem[];
}

const Menu: React.FC<MenuProps> = ({ links }) => (
  <Nav>
    <ul>
      {links.map((link, i) => (
        <MenuItem key={i} to={link.to}>
          {link.text}
        </MenuItem>
      ))}
    </ul>
  </Nav>
);

export default Menu;
