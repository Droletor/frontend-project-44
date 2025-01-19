import { randomRange, gcd } from '../utilities.js';
import runGame from '../index.js';

const questionGenerator = () => {
  const [min, max] = [1, 51];
  const num1 = randomRange(min, max);
  const num2 = randomRange(min, max);

  const question = `${num1} ${num2}`;
  const realAnswer = gcd(num1, num2);

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, questionGenerator);
};
