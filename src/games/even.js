import { randomRange } from '../utilities.js';
import runGame from '../index.js';

const questionGenerator = () => {
  const [min, max] = [0, 101];
  const number = randomRange(min, max);
  const realAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [number, realAnswer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, questionGenerator);
};
