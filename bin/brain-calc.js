#!/usr/bin/env node

import { randomRange, randomOperator } from '../src/utilities.js';
import Game from '../src/index.js';

const OperationsDict = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const questionGenerator = () => {
  const num1 = randomRange(0, 26);
  const num2 = randomRange(0, 16);
  const operator = randomOperator();

  const question = `${num1} ${operator} ${num2}`;
  const realAnswer = OperationsDict[operator](num1, num2);

  return [question, realAnswer.toString()];
};

const game = new Game('What is the result of the expression?', questionGenerator);
game.start();
