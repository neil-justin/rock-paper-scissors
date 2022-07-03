function computerPlay() {
    const computerChoice = Math.ceil(Math.random() * 3);

    switch (computerChoice) {
        case 1:
            return ('Rock');
        case 2:
            return ('Paper');
        case 3:
            return ('Scissors');
    }
}

function playerPlay() {
    const playerChoice = prompt('Enter your weapon choice', 'Rock, Paper, or Scissors?');
    return playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();

}

let computerSelection = computerPlay();
let playerSelection = playerPlay();

function playRound(computerSelection, playerSelection) {
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return announcePlayerWin();
    } else if (playerSelection === computerSelection) {
        return announceDraw();
    } else {
        return announceCpuWin();
    }
}

let playerScore = 0;
let cpuScore = 0;

function announcePlayerWin() {
    playerScore += 1;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return displayScore();
}

function announceDraw() {
    console.log('It\s a tie! You both use the same weapon.');
    return displayScore();
}

function announceCpuWin() {
    cpuScore += 1;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return displayScore();
}

function displayScore() {
    return `Player score: ${playerScore} | CPU score: ${cpuScore}`;
}

console.log((playRound(computerSelection, playerSelection)));

function playGame() {
    for (let i = 1; i < 5; i++) {
        /* The variable below should be refer along with its value
        i.e. computerSelection = computerPlay(); and playerSelection = playerPlay();
        in order for the variable to run the function in each iteration. */
        computerSelection = computerPlay();
        playerSelection = playerPlay();

        console.log(playRound(computerSelection, playerSelection));
    }
    
    announceGameResult();
}

function announceGameResult() {
    if (playerScore > cpuScore) {
        return 'You\'ve won!';
    } else if (playerScore < cpuScore) {
        return 'You\'ve been defeated...';
    } else {
        return 'It\'s a tie... No side has won nor lost.'
    }

}

console.log(playGame());