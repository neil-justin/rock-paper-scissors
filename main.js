function computerPlay() {
    const computerChoices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    let playerScore = 0;
    let cpuScore = 0;

    const roundResultDiv = document.querySelector('.round-result-cntr');
    const roundResultPara = document.createElement('p');
    roundResultDiv.appendChild(roundResultPara);
    const scoresPara = document.createElement('p');
    roundResultDiv.appendChild(scoresPara)

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
        roundResultPara.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        return scores;
    }

    function announceDraw(scores) {
        roundResultPara.textContent = 'It\'s a tie! You both use the same weapon.';
        return scores;
    }

    function announceCpuWin(scores) {
        roundResultPara.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        return scores;
    }

    function displayScores() {
        return scoresPara.textContent = `Player score: ${playerScore} | CPU score: ${cpuScore}`;
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => playRound(button.value, computerPlay()));
});