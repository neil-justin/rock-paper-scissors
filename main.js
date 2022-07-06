function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let cpuScore = 0;

    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
        playerScore++;
        return announcePlayerWin(displayScores());
    } else if (playerSelection === computerSelection) {
        return announceDraw(displayScores());
    } else {
        cpuScore++;
        return announceCpuWin(displayScores());
    }

    function announcePlayerWin(scores) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        return scores;
    }

    function announceDraw(scores) {
        console.log('It\'s a tie! You both use the same weapon.');
        return scores;
    }

    function announceCpuWin(scores) {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return scores;
    }

    function displayScores() {
        return `Player score: ${playerScore} | CPU score: ${cpuScore}`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => console.log(playRound(button.value, computerPlay())));
});