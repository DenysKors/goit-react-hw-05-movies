import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bg_image from '../../images/bg-image.jpg';

export const Wrapper = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 15px;
  background-image: linear-gradient(
    to bottom,
    rgb(30, 30, 30) 1%,
    rgb(0, 0, 0)
  );
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 8px 10px;
  margin-bottom: 30px;
  box-shadow: 0px 15px 10px -15px #b5b5b5;

  > nav {
    display: flex;
    gap: 5px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    justify-content: space-between;
  }
`;

export const NavItem = styled(NavLink)`
  padding: 8px 16px;

  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: #e5e5e5;

  &.active {
    color: #ff7d32;
  }
`;

export const Footer = styled.footer`
  margin: 0 auto;
  padding: 0 15px;
  height: 480px;
  max-width: 1600px;

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #000;
  background-image: url(${bg_image});
`;
