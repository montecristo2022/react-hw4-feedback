
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/Statistics/Statistics';
import Section from 'components/Section/Section';
import Notifications from 'components/Notifications/Notificatins';

import { useState } from 'react';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const plusOneFeedback = event => {
    console.log(event);

    if (event === 'good') {
      setGood(prevGood => prevGood + 1);
    }

    if (event === 'neutral') {
      setNeutral(setNeutral => setNeutral + 1);
    }

    if (event === 'bad') {
      setBad(setBad => setBad + 1);
    }
  };

  const totalFeedback = () => {
    return bad + neutral + good;
  };

  const persentOfPositive = () => {
    return Number.parseInt((100 / (bad + neutral + good)) * good);
  };

  const options = Object.keys({ good, neutral, bad });
  return (
    <>
      <div>
        <Section title={'Пожалуйста, оставьте ваш отзыв +_+'}>
          <FeedbackOptions
            plusOneFeedback={plusOneFeedback}
            options={options}
          />
        </Section>

        {totalFeedback() ? (
          <div>
            <Section title={'Статистика отзывов пользователей 👇'}>
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={totalFeedback()}
                positive={persentOfPositive()}
              />
            </Section>
          </div>
        ) : (
          <Notifications message={'Стань первым хотя бы где-то, проголосуй!'} />
        )}
      </div>
    </>
  );
}
