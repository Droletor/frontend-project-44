import randomRange from '../utilities.js';
import runGame from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const questionGenerator = () => {
  const [min, max] = [1, 98];
  const num = randomRange(min, max);
  const realAnswer = isPrime(num) ? 'yes' : 'no';

  const question = `${num}`;

  return [question, realAnswer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, questionGenerator);
};
