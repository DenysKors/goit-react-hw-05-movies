import styled from 'styled-components';

export const ReviewItem = styled.li`
  padding: 5px;
  :not(:last-child) {
    margin-bottom: 5px;
  }
  background-color: #e5e5e5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
    rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  border-radius: 6px;
`;
