import { randomRange, randomArithmeticProgression, arrayToString } from '../utilities.js';
import runGame from '../index.js';

const questionGenerator = () => {
  const [startVal, length, inc] = [randomRange(0, 21), randomRange(8, 13), randomRange(1, 11)];
  const progression = randomArithmeticProgression(startVal, length, inc);
  const randomIndex = randomRange(0, length);

  const realAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = arrayToString(progression);

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runGame(description, questionGenerator);
};
