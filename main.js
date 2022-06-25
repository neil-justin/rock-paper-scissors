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
    const fixInvalidInput = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    return fixInvalidInput;
}

let computerSelection = computerPlay();
let playerSelection = playerPlay();

function playRound(computerSelection, playerSelection) {
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        return playerWin();
    } else if (playerSelection === computerSelection) {
        return noWinner();
    } else {
        return cpuWin();
    }
}

let playerScore = 0;
let cpuScore = 0;

function playerWin() {
    playerScore += 1;
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return displayScore();
}

function noWinner() {
    console.log('It\s a tie! You both use the same weapon.');
    return displayScore();
}

function cpuWin() {
    cpuScore += 1;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return displayScore();
}

function displayScore() {
    return `Player score: ${playerScore} | Computer score: ${cpuScore}`;
}

console.log((playRound(computerSelection, playerSelection)));

function playGame() {
    for (let roundNumber = 1; roundNumber < 5; roundNumber++) {
        /* The variable below should be refer along with its initial value
        i.e. computerSelection = computerPlay(); and playerSelection = playerPlay();.
        If you refer the variable without its initial value i.e. computerSelection; and
        playerSelection;, when the script execution reaches this block
        the computerSelection' and playerSelection' value will be the same
        as its value in line 20 and 21. For example, if playerSelection's
        value is Rock and computerSelection's value is Paper, that will still be
        the value until the end of the game.
        */
        computerSelection = computerPlay();
        playerSelection = playerPlay();

        console.log(playRound(computerSelection, playerSelection));
    }

    if (playerScore > cpuScore) {
        return 'You\'ve won!';
    } else if (playerScore < cpuScore) {
        return 'You\'ve been defeated...';
    } else {
        return 'It\'s a tie... No side has won nor lost.'
    }
}

console.log(playGame());