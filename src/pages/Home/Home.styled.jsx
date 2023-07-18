import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Pagination } from '@mui/material';

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
  padding-bottom: 10px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  width: 260px;

  @media screen and (min-width: 1200px) {
    width: 320px;
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
    font-size: 16px;
  }
`;

export const PaginatorWrapper = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
`;

export const Paginator = styled(Pagination)`
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    color: #ff7d32;
  }
  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
    background-color: #e5e5e5;
    color: #000;
    &:hover {
      color: #e5e5e5;
    }
  }

  .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
    &:hover {
      background-color: #ff7d32;
      color: #000;
    }
  }
`;
