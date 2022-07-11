const playGame = function () {
    function computerPlay() {
        const computerChoices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }

    const buttons = document.querySelectorAll('button');

    const resultScoresCntr = document.querySelector('.result-cntr');
    const resultPara = document.createElement('p');
    resultPara.style.cssText = 'font-size: 22px; color: #e8eddf; font-weight: bold; margin: 22px 10px 10px;'
    resultScoresCntr.appendChild(resultPara);
    const scoresPara = document.createElement('p');
    scoresPara.style.cssText = 'font-size: 22px; color: #e8eddf; font-weight: bold; margin: 10px 10px 22px;'
    resultScoresCntr.appendChild(scoresPara);

    resultPara.textContent = 'Choose your weapon';

    let playerScore = 0;
    let cpuScore = 0;

    function playRound(playerSelection, computerSelection) {
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
            const disableButtons = function () {
                buttons.forEach(button => {
                    button.disabled = true;
                    button.classList.add('disable-button');
                    return;
                });
            };

            if (roundWinner === 'player') {
                if (playerScore === 5) {
                    resultPara.textContent = `Victory! ${playerSelection} beats ${computerSelection}!`;
                    disableButtons();
                } else {
                    resultPara.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
                }
            } else if (roundWinner === 'cpu') {
                if (cpuScore === 5) {
                    resultPara.textContent = `Defeat... ${computerSelection} beats ${playerSelection}!`;
                    disableButtons();
                } else {
                    resultPara.textContent = `You lose... ${playerSelection} beats ${computerSelection}`;
                }
            } else {
                resultPara.textContent = 'Draw! Both sides used the same weapon';
            }

            return resultPara, scores;
        }

        function displayScores() {
            return scoresPara.textContent = `Player score: ${playerScore} - Computer score: ${cpuScore}`;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => playRound(button.value, computerPlay()));
    });
}

playGame();