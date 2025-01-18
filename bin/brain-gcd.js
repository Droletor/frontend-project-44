#!/usr/bin/env node

import { randomRange, gcd } from '../src/utilities.js';
import Game from '../src/index.js';

const questionGenerator = () => {
  const num1 = randomRange(1, 51);
  const num2 = randomRange(1, 51);

  const question = `${num1} ${num2}`;
  const realAnswer = gcd(num1, num2);

  return [question, realAnswer.toString()];
};

const game = new Game('Find the greatest common divisor of given numbers.', questionGenerator);
game.start();
