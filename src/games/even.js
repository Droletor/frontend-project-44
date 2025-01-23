import getRandomRange from '../utilities.js';
import runGame from '../index.js';

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const generateQuestion = () => {
  const [min, max] = [0, 101];
  const number = getRandomRange(min, max);
  const realAnswer = isEven(number);

  return [number, realAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, generateQuestion);
};
