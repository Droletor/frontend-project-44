import randomRange from '../utilities.js';
import runGame from '../index.js';

const getRandomArithmeticProgression = (start = 0, length = 10, increment = 1) => {
  const array = [];
  for (let i = start; i < start + length; i += 1) array.push(i * increment);
  return array;
};

const questionGenerator = () => {
  const [startVal, length, inc] = [randomRange(0, 21), randomRange(8, 13), randomRange(1, 11)];
  const progression = getRandomArithmeticProgression(startVal, length, inc);
  const randomIndex = randomRange(0, length);

  const realAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runGame(description, questionGenerator);
};
