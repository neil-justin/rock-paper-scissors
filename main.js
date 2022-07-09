const playGame = function () {
    function computerPlay() {
        const computerChoices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }

    const buttons = document.querySelectorAll('button');

    let playerScore = 0;
    let cpuScore = 0;

    function playRound(playerSelection, computerSelection) {
        const roundResultDiv = document.querySelector('.round-result-cntr');

        const roundResultPara = document.createElement('p');
        roundResultDiv.appendChild(roundResultPara);

        const scoresPara = document.createElement('p');
        roundResultDiv.appendChild(scoresPara);

        if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
            (playerSelection === 'Paper' && computerSelection === 'Rock') ||
            (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            playerScore++;
            return getRoundWinner('player', displayScores());
        } else if (playerSelection === computerSelection) {
            return getRoundWinner('none', displayScores());
        } else {
            cpuScore++;
            return getRoundWinner('cpu', displayScores());
        }

        function getRoundWinner(roundWinner, scores) {
            if (roundWinner === 'player') {
                if (playerScore === 5) {
                    roundResultPara.textContent = `Victory! ${playerSelection} beats ${computerSelection}!`;
                    buttons.forEach(button => button.disabled = true);
                } else {
                    roundResultPara.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                }
            } else if (roundWinner === 'cpu') {
                if (cpuScore === 5) {
                    roundResultPara.textContent = `Defeat... ${computerSelection} beats ${playerSelection}!`;
                    buttons.forEach(button => button.disabled = true);
                } else {
                    roundResultPara.textContent = `You lose... ${playerSelection} beats ${computerSelection}`;
                }
            } else {
                roundResultPara.textContent = 'Draw! Both sides used the same weapon';
            }

            return roundResultPara, scores;
        }

        function displayScores() {
            return scoresPara.textContent = `Player score: ${playerScore} | Computer score: ${cpuScore}`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => playRound(button.value, computerPlay()));
    });
}

playGame();