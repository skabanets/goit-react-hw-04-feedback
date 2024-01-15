import { OptionButton, OptionsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsList>
      {options.map(item => (
        <li key={item}>
          <OptionButton type="button" onClick={() => onLeaveFeedback(item)}>
            {item}
          </OptionButton>
        </li>
      ))}
    </OptionsList>
  );
};
