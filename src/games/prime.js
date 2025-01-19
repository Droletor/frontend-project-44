import { randomRange, firstTwentyFivePrimeNumber } from '../utilities.js';
import runGame from '../index.js';

const questionGenerator = () => {
  const [min, max] = [1, 98];
  let num;
  let realAnswer;
  if (Math.random() < 0.5) {
    realAnswer = 'no';
    num = randomRange(min, max);
    while (firstTwentyFivePrimeNumber.includes(num)) num += 1;
  } else {
    realAnswer = 'yes';
    num = firstTwentyFivePrimeNumber[randomRange(0, firstTwentyFivePrimeNumber.length)];
  }

  const question = `${num}`;

  return [question, realAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, questionGenerator);
};
