import readlineSync from 'readline-sync';

const runGame = (gameText, questionGenerator, questionsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameText);

  for (let i = 0; i < questionsCount; i += 1) {
    const [question, solution] = questionGenerator();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    // Lose
    if (answer !== solution) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }

    // Win
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
  return true;
};

export default runGame;
