import React from 'react';

// Функціональний компонент для відображення статистики
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positivePercentage}%</p>
  </>
);

// Експорт компонента для використання в інших частинах програми
export default Statistics;
