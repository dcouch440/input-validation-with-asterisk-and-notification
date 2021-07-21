import styled from 'styled-components';

export const TextInput = styled.input`
  padding: 5px;
  border-radius: 7px;
  width: 270px;
  height: 30px;
  box-shadow:  0 0 2px black;
  border: 2px solid black;
  :focus {
    outline: none;
    box-shadow: 0 0 0 5px black;
  }
`;

export const Label = styled.span`
  margin-left: 7px;
  font-weight: 400;
`;
