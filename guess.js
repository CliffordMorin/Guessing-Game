//Guess a random number
//Give user the ability to guess
//If they guess and they are wrong, ask them again (hint);
//If they win - say that they won

function guessGame() {
	let randomNr = Math.random() * 11;
	let fixedNr = Math.floor(randomNr);
	console.log(fixedNr);
}

guessGame();
