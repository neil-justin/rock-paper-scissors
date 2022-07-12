const playGame = function () {
    function computerPlay() {
        const computerChoices = ['Rock', 'Paper', 'Scissors'];
        const randomIndex = Math.floor(Math.random() * computerChoices.length);
        return computerChoices[randomIndex];
    }

    const buttons = document.querySelectorAll('button');
    const disableButtons = function () {
        buttons.forEach(button => {
            button.disabled = true;
            button.classList.add('disable-button');
            return;
        });
    };

    const resultScoresCntr = document.querySelector('.result-scores-cntr');
    const resultPara = document.querySelector('.result');
    resultPara.textContent = 'Choose your weapon!';
    resultPara.style.cssText = 'font-size: 26px; color: #e8eddf; font-weight: bold; margin: 22px 10px 10px;';
    resultScoresCntr.appendChild(resultPara);
    const scoresCntr = document.querySelector('.scores-cntr');
    const playerScorePara = document.createElement('p');
    playerScorePara.style.cssText = 'font-size: 22px; color: #e9ecef; margin: 10px 10px 22px;';
    scoresCntr.appendChild(playerScorePara);
    const cpuScorePara = document.createElement('p');
    cpuScorePara.style.cssText = 'font-size: 22px; color: #e9ecef; margin: 10px 10px 22px;';
    scoresCntr.appendChild(cpuScorePara);

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
            if (roundWinner === 'player') {
                if (playerScore === 5) {
                    resultPara.textContent = `Victory! ${playerSelection} beats ${computerSelection}!`;
                    disableButtons();
                } else {
                    resultPara.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
                }
            } else if (roundWinner === 'cpu') {
                if (cpuScore === 5) {
                    resultPara.textContent = `Defeat... ${computerSelection} beats ${playerSelection}!`;
                    disableButtons();
                } else {
                    resultPara.textContent = `You lose... ${computerSelection} beats ${playerSelection}!`;
                }
            } else if (roundWinner === 'none') {
                resultPara.textContent = `Draw! Both sides used ${playerSelection}!`;
            }

            return resultPara, scores;
        }

        function displayScores() {
            playerScorePara.textContent = `Player score: ${playerScore}`;
            cpuScorePara.textContent = `Computer score: ${cpuScore}`;
            return playerScorePara, cpuScorePara;
        }
    }

    buttons.forEach(button => {
        button.addEventListener('click', () => playRound(button.value, computerPlay()));
    });
}

playGame();