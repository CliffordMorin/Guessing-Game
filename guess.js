//Guess a random number DONE
//Give user the ability to guess Done
//If they guess and they are wrong, ask them again (hint);
//If they win - say that they won

function guessGame() {
	let randomNr = Math.floor(Math.random() * 11);
	let guess;

	do {
		guess = prompt('Guess a number between 1 and 10');
		console.log(guess, randomNr);
		if (randomNr > guess) {
			console.log('you guessed to low');
		} else if (randomNr < guess) {
			console.log('you guessed too high');
		}
	} while (guess != randomNr);
	{
		console.log('you won');
	}
}

guessGame();
