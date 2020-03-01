import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  color: #4499c4;
`;

interface MenuItemProps {
  to: string;
  children: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ to, children }) => (
  <li>
    <StyledLink to={to}>{children}</StyledLink>
  </li>
);

export default MenuItem;
