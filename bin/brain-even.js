#!/usr/bin/env node

import { randomRange } from '../src/utilities.js';
import Game from '../src/index.js';

const questionGenerator = () => {
  const number = randomRange(0, 100);
  const realAnswer = number % 2 === 0 ? 'yes' : 'no';

  return [number, realAnswer];
};

const game = new Game('Answer "yes" if the number is even, otherwise answer "no".', questionGenerator);
game.start();
