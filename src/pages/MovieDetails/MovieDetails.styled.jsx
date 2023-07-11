import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieBox = styled.div`
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const Thumb = styled.div`
  position: relative;
  border-radius: 5px;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    min-width: 350px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 450px;
  }
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MovieRating = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 4px 4px;
  border-bottom-left-radius: 5px;

  background-color: #ff7d32;
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

export const MovieTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;

  color: #e5e5e5;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 24px;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 5px;

  font-size: 12px;
  font-weight: 400;

  color: #e5e5e5;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
  padding-left: 10px;

  font-weight: 400;
  font-size: 12px;

  color: #e5e5e5;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;
