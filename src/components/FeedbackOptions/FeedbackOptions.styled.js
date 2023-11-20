import styled from 'styled-components';

export const Button = styled.button`
  text-transform: uppercase;
  width: 120px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  background-color: #3498db; /* Змінено основний колір фону */
  border: none;
  color: #fff; /* Змінено колір тексту */
  border-radius: 10px; /* Змінено радіус кутів */
  transition: background-color 0.3s ease; /* Додано плавний перехід */

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:focus-visible {
    outline: none; /* Видалено стандартний контур фокусу */
    box-shadow: 0 0 0 3px lightcoral; /* Змінено колір тіні фокусу */
  }

  &:hover {
    background-color: #2980b9; /* Змінено колір при наведенні */
  }

  &:active {
    background-color: #1f618d; /* Змінено колір при натисканні */
  }
`;
