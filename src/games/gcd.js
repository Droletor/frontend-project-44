import getRandomRange from '../utilities.js';
import runGame from '../index.js';

const calculateGCD = (a, b) => {
  if (!b) {
    return a;
  }

  return calculateGCD(b, a % b);
};

const generateQuestion = () => {
  const [min, max] = [1, 51];
  const num1 = getRandomRange(min, max);
  const num2 = getRandomRange(min, max);

  const question = `${num1} ${num2}`;
  const realAnswer = calculateGCD(num1, num2);

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, generateQuestion);
};
