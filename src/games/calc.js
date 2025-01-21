import randomRange from '../utilities.js';
import runGame from '../index.js';

const randomOperator = () => ['+', '-', '*'][randomRange(0, 3)];

const questionGenerator = () => {
  const [min, max] = [0, 26];
  const num1 = randomRange(min, max);
  const num2 = randomRange(min, max);
  const operator = randomOperator();

  const question = `${num1} ${operator} ${num2}`;
  let realAnswer;

  switch (operator) {
    case '+':
      realAnswer = num1 + num2;
      break;
    case '-':
      realAnswer = num1 - num2;
      break;
    case '*':
      realAnswer = num1 * num2;
      break;
    default:
      throw new Error(`Operator: '${operator}' not implemented!`);
  }

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What is the result of the expression?';
  runGame(description, questionGenerator);
};
