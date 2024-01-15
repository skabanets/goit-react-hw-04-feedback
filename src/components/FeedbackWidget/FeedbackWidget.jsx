import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import React, { useState } from 'react';

export const FeedbackWidget = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = item => {
    setFeedback(prevState => ({ ...prevState, [item]: prevState[item] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, value) => acc + value, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((feedback.good / countTotalFeedback()) * 100).toFixed(2) + '%';
  };

  const total = countTotalFeedback();
  const positiveFeadback = countPositiveFeedbackPercentage();

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {total ? (
          <Statistics statistics={{ ...feedback, total, positiveFeadback }} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
