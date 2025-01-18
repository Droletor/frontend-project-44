#!/usr/bin/env node

import { randomRange, gcd } from '../src/utilities.js';
import Game from '../src/index.js';

const questionGenerator = () => {
  const num_1 = randomRange(1, 51);
  const num_2 = randomRange(1, 51);
  
  const question = `${num_1} ${num_2}`;
  const realAnswer = gcd(num_1, num_2);
  
  return [question, realAnswer.toString()];
};

const game = new Game('Find the greatest common divisor of given numbers.', questionGenerator);
game.start();
