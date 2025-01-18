#!/usr/bin/env node

import readlineSync from 'readline-sync';

const GetRandomRange = (min, max) => Math.floor(Math.random() * (max - min) + min);

const Main = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const number = GetRandomRange(0, 100);
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ');

    const realAnswer = number % 2 === 0 ? 'yes' : 'no';

    // Lose
    if (answer !== realAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    // Win
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

Main();
