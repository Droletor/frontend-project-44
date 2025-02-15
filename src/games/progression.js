import getRandomRange from '../utilities.js';
import runGame from '../index.js';

const getProgression = (start = 0, length = 10, increment = 1) => {
  const array = [];
  for (let i = start; i < start + length; i += 1) array.push(i * increment);
  return array;
};

const generateQuestion = () => {
  const startVal = getRandomRange(0, 21);
  const length = getRandomRange(8, 13);
  const increment = getRandomRange(1, 11);

  const progression = getProgression(startVal, length, increment);
  const randomIndex = getRandomRange(0, length);

  const realAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = progression.join(' ');

  return [question, realAnswer.toString()];
};

export default () => {
  const description = 'What number is missing in the progression?';
  runGame(description, generateQuestion);
};
