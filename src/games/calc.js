import getRandomRange from '../utilities.js';
import runGame from '../index.js';

const randomOperator = () => ['+', '-', '*'][getRandomRange(0, 3)];
const calculateWithOperator = (operator, num1, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Operator: '${operator}' not implemented!`);
  }
};

const generateQuestion = () => {
  const [min, max] = [0, 26];
  const num1 = getRandomRange(min, max);
  const num2 = getRandomRange(min, max);
  const operator = randomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const realAnswer = calculateWithOperator(operator, num1, num2);

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What is the result of the expression?';
  runGame(description, generateQuestion);
};
