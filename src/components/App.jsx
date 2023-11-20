import React, { useState } from 'react';
import Statistics from './Statistics/Statistics';
import {FeedbackOptions} from './FeedbackOptions/FeedbackOptions';
import {Section} from './Section/Section';
import {Notification} from './Notification/Notification';

// Основний компонент додатку
const App = () => {
  // Стан додатку для відстеження кількості "гарних", "нейтральних" та "поганих" відгуків
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  // Метод для обчислення загальної кількості відгуків
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedback;
    return good + neutral + bad;
  };

  // Метод для обчислення відсотка позитивних відгуків
  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;
  };

  // Метод для збільшення кількості відгуків за вказаним ключем (гарний, нейтральний, поганий)
  const incrementFeedback = key => {
    setFeedback(prevFeedback => ({ ...prevFeedback, [key]: prevFeedback[key] + 1 }));
  };

  // Деструктуризація значень стану для зручності використання
  const { good, neutral, bad } = feedback;
  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  // Повертає JSX для рендерингу компоненту
  return (
    <div>
      {/* Секція для залишення відгуку */}
      <Section title={'Please leave feedback'}>
        {/* Компонент FeedbackOptions для відображення кнопок відгуку та обробки їхнього кліку */}
        <FeedbackOptions onLeaveFeedback={incrementFeedback} options={feedback} />
      </Section>

      {/* Умовний рендеринг: якщо є хоча б один відгук, відображається статистика, інакше повідомлення про відсутність відгуків */}
      {totalFeedback > 0 ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message={'No feedback'} />
      )}
    </div>
  );
};

// Експорт додатку для використання в інших частинах програми
export default App;
