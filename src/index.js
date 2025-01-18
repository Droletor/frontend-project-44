import readlineSync from 'readline-sync';

export default class Game {
  constructor (gameText, questionGenerator, questionsCount = 3) {
	  this.gameText = gameText;
	  this.questionGenerator = questionGenerator;
	  this.questionsCount = questionsCount;
  }
  
  start() {
	console.log('Welcome to the Brain Games!');
    this.name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.name}!`);
    console.log(this.gameText);

    for (let i = 0; i < this.questionsCount; i += 1) {
	  const [question, solution] = this.questionGenerator();
      console.log(`Question: ${question}`);

  	  const answer = readlineSync.question('Your answer: ');

	  // Lose
      if (answer !== solution) {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${solution}'.`);
        console.log(`Let's try again, ${this.name}!`);
        return false;
      }

      // Win
      console.log('Correct!');
    }
  
    console.log(`Congratulations, ${this.name}!`);
	return true;
  }
}