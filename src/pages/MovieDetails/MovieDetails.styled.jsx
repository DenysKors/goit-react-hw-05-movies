import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.div`
  padding-bottom: 10px;
  display: flex;
  gap: 10px;
`;

export const MovieInfo = styled.div`
  border-top: 2px solid grey;
  border-bottom: 2px solid grey;
`;

export const NavItem = styled(NavLink)`
  padding: 5px;
  margin-bottom: 10px;

  font-size: 18px;
  text-decoration: none;

  display: inline-block;
  background-color: lightblue;

  border-radius: 3px;
`;
