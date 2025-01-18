#!/usr/bin/env node

import { randomRange, randomArithmeticProgression, arrayToString } from '../src/utilities.js';
import Game from '../src/index.js';

const questionGenerator = () => {
  const [startVal, length, inc] = [randomRange(0, 21), randomRange(8, 13), randomRange(1, 11)];
  const progression = randomArithmeticProgression(startVal, length, inc);
  const randomIndex = randomRange(0, length);

  const realAnswer = progression[randomIndex];
  progression[randomIndex] = '..';
  const question = arrayToString(progression);

  return [question, realAnswer.toString()];
};

const game = new Game('What number is missing in the progression?', questionGenerator);
game.start();
