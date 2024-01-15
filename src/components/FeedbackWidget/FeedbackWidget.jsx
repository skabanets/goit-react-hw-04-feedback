import { Notification } from 'components/Notification/Notification';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Statistics/Statistics';
import React, { Component } from 'react';

export class FeedbackWidget extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = item => {
    this.setState(prevState => ({
      [item]: prevState[item] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return (
      ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2) + '%'
    );
  };

  render() {
    const total = this.countTotalFeedback();
    const positiveFeadback = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              statistics={{ ...this.state, total, positiveFeadback }}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
