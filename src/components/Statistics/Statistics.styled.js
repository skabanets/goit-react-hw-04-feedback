import styled from 'styled-components';

export const StatisticsList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

export const StatisticsItem = styled.li`
  font-size: 16px;

  &:first-letter {
    text-transform: uppercase;
  }
`;
