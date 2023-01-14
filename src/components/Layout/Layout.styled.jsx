import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Box = styled.div`
  max-width: 1600px;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 16px;
  box-shadow: 0px 15px 10px -15px #111;

  > nav {
    display: flex;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: black;

  &.active {
    color: #ff7d32;
  }
`;
