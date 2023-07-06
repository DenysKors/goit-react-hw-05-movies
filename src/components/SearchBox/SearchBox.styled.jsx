import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  /* align-items: center; */
  width: 100%;
  max-width: 300px;
  /* background-color: gray;
  border-radius: 3px;
  overflow: hidden; */
`;

export const Button = styled.button`
  display: inline-block;
  width: 68px;
  height: 38px;
  border-radius: 3px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkgray;
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
    border-color: cadetblue;
  }
`;
