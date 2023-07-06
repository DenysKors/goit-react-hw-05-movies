import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Main = styled.main`
  margin: 0 auto;
`;

export const PageTitle = styled.h2`
  padding-bottom: 20px;

  text-align: center;
  text-transform: uppercase;

  color: #e5e5e5;
`;

export const ItemsBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  max-width: 260px;

  @media screen and (min-width: 1200px) {
    max-width: 320px;
  }
`;

export const Thumb = styled.div`
  width: 100%;

  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 5px;
`;

export const Image = styled.img`
  margin-bottom: 8px;

  width: 100%;
  height: 100%;
  border-radius: 5px;
  user-select: none;
  object-fit: cover;

  &:hover,
  &:focus {
    box-shadow: #ff7d32 0px 0px 25px;
  }
`;

export const MovieLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;

  text-decoration: none;
  text-transform: uppercase;
  color: #e5e5e5;

  &:hover,
  &:focus {
    color: #ff7d32;
  }
`;

export const MovieTitle = styled.p`
  text-transform: uppercase;
  text-align: center;
  color: inherit;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;

  @media screen and (min-width: 1200px) {
    font-size: 14px;
  }
`;
