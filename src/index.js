import readlineSync from 'readline-sync';

const runGame = (gameText, generateQuestion, questionsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameText);

  for (let i = 0; i < questionsCount; i += 1) {
    const [question, solution] = generateQuestion();
    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    // Lose
    if (answer !== solution) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    // Win
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
