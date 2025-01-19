import { randomRange, randomOperator } from '../utilities.js';
import runGame from '../index.js';

const OperationsDict = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const questionGenerator = () => {
  const [min, max] = [0, 26];
  const num1 = randomRange(min, max);
  const num2 = randomRange(min, max);
  const operator = randomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const realAnswer = OperationsDict[operator](num1, num2);

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What is the result of the expression?';
  runGame(description, questionGenerator);
};
