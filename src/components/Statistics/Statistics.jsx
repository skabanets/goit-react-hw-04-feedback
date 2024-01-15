import { StatisticsItem, StatisticsList } from './Statistics.styled';

export const Statistics = ({ statistics }) => {
  return (
    <StatisticsList>
      {Object.entries(statistics).map(([key, value]) => (
        <StatisticsItem key={key}>
          {key === 'positiveFeadback' ? 'positive feadback' : key}: {value}
        </StatisticsItem>
      ))}
    </StatisticsList>
  );
};
