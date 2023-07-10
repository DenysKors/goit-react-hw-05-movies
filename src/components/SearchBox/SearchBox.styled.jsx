import styled from 'styled-components';

export const Form = styled.form`
  padding-bottom: 20px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 300px;
`;

export const Button = styled.button`
  display: inline-block;
  width: 68px;
  height: 38px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: #ff7d32;
    color: white;
  }
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 20px;
  padding-left: 4px;
  padding-right: 4px;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &::placeholder {
    font: inherit;
    font-size: 16px;
  }
  &:focus {
    outline: none;
    border-color: #ff7d32;
  }
`;
