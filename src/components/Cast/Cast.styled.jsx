import styled from 'styled-components';

export const ItemsWrapper = styled.ul`
  padding: 10px 0px 10px 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 15px;
`;

export const ActorItem = styled.li`
  width: 150px;
  height: auto;
  border: 1px solid grey;
`;

export const ActorText = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #e5e5e5;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  padding: 5px;
`;
