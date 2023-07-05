import styled from 'styled-components';

export const Main = styled.main`
  margin: 0 auto;
`;

export const ItemsBox = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const MovieItem = styled.li`
  max-width: 260px;
`;

export const Thumb = styled.div`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  user-select: none;
  object-fit: cover;
`;

export const MovieTitle = styled.p`
  text-transform: uppercase;
  /* color: $color-text; */
  font-size: 12px;
  font-weight: 500;
  line-height: 1.16;
`;
