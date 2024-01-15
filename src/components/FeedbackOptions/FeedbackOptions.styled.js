import styled from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin-top: 20px;
`;

export const OptionButton = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #0ba5be;
  font-size: 18px;
  font-weight: 500;
  color: white;
  transition: all 0.5s ease-out;
  box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.18);

  &:first-letter {
    text-transform: uppercase;
  }

  &:hover {
    background-color: #378ba4;
  }
`;
