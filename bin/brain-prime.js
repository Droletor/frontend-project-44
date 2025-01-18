#!/usr/bin/env node

import { randomRange, firstTwentyFivePrimeNumber } from '../src/utilities.js';
import Game from '../src/index.js';

const questionGenerator = () => {
  let num;
  let realAnswer;
  if (Math.random() < 0.5) {
    realAnswer = 'no';
    num = randomRange(1, 98);
    while (firstTwentyFivePrimeNumber.includes(num)) num += 1;
  } else {
    realAnswer = 'yes';
    num = firstTwentyFivePrimeNumber[randomRange(0, firstTwentyFivePrimeNumber.length)];
  }

  const question = `${num}`;

  return [question, realAnswer];
};

const game = new Game('Answer "yes" if given number is prime. Otherwise answer "no".', questionGenerator);
game.start();
