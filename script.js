// localStorage.getItem('score')  == string
// JSON.parse(  localStorage.getItem('score')  )  == object
let score = JSON.parse(localStorage.getItem('score')) || {  /*if 1st TRUTHY, 1st is execute*/
	wins: 0,
	losses: 0,
	ties: 0
};
/*
// if(score === null){
	if(!score){
		score = {
			wins : 0,
			losses : 0,
			ties : 0
		};
	}
*/
upadteScore();
function playGame(playerMove) {
	const computerMove = pickComputerMove();
	let result = '';
	if (playerMove === 'rock') {
		if (computerMove === 'rock') {
			result = 'Tie';
		} else if (computerMove === 'paper') {
			result = 'You Loss';
		} else if (computerMove === 'scissors') {
			result = 'You Win';
		}
		if (result === 'You Win') {
			score.wins += 1;
		} else if (result === 'You Loss') {
			score.losses += 1;
		} else if (result === 'Tie') {
			score.ties += 1;
		}
	}
	else if (playerMove === 'paper') {
		if (computerMove === 'rock') {
			result = 'You Win';
		} else if (computerMove === 'paper') {
			result = 'Tie';
		} else if (computerMove === 'scissors') {
			result = 'You Loss';
		}
		if (result === 'You Win') {
			score.wins += 1;
		} else if (result === 'You Loss') {
			score.losses += 1;
		} else if (result === 'Tie') {
			score.ties += 1;
		}
	}
	else if (playerMove === 'scissors') {
		if (computerMove === 'rock') {
			result = 'You Loss';
		} else if (computerMove === 'paper') {
			result = 'You Win';
		} else if (computerMove === 'scissors') {
			result = 'Tie';
		}

		if (result === 'You Win') {
			score.wins += 1;
		} else if (result === 'You Loss') {
			score.losses += 1;
		} else if (result === 'Tie') {
			score.ties += 1;
		}
	}
	else if (playerMove === 'reset') {
		score.wins = 0;
		score.losses = 0;
		score.ties = 0;
		localStorage.removeItem('score');  /* NOW score is NULL */
		document.querySelector('.js-result')
			.innerHTML = '';
		document.querySelector('.js-moves')
			.innerHTML = '';
	}
	if (playerMove !== 'reset') {
		document.querySelector('.js-result')
			.innerHTML = `${result}`;
		document.querySelector('.js-moves')
			// .innerHTML = `You  ${playerMove} -- ${computerMove} Computer`;
			.innerHTML = `You <img src = "./img/${playerMove}-emoji.png" class="moves-img" >  
															<img src = "./img/${computerMove}-emoji.png" class="moves-img"> Computer`;
	}
	localStorage.setItem('score', JSON.stringify(score)); /*only support String*/
	upadteScore();
}
// update score
function upadteScore() {
	document.querySelector('.js-score')
		.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}
// pickComputerMove
function pickComputerMove() {
	const randomNum = (Math.random());
	let computerMove = '';
	if (randomNum >= 0 && randomNum < 1 / 3) {
		computerMove = 'rock';
	} else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
		computerMove = 'paper';
	} else if (randomNum >= 2 / 3 && randomNum < 1) {
		computerMove = 'scissors';
	}
	return computerMove;
}