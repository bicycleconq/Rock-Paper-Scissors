console.log('Hello, World!');


const resultDiv = document.querySelector('.result');
const scoreDiv = document.querySelector('.score');
let userScore = 0;
let botScore = 0;
    
function playRound(userChoice) {
        const choices = ['rock', 'paper', 'scissors'];
        const botChoice = choices[Math.floor(Math.random() * choices.length)];
        let result;
        if (userChoice === botChoice) {
            result = "It's a tie!";
        }
        
        if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            userScore++;
            result = 'You win!';
        } else {
            botScore++;
            result = 'You lose!';
        }
        updateScore();
        displayResult(result);
        checkWinner();
    }
    function updateScore() {
        document.getElementById('playerScore').textContent = userScore;
        document.getElementById('computerScore').textContent = botScore;        
    }

    function displayResult (message) {
        resultDiv.textContent = message;
    }

    function checkWinner () {
        if (userScore === 5) {
            alert("Congratulations, you win the game!");
            resetGame();
        } else if (botScore === 5) {
            alert("Sorry, you lost the game!");
            resetGame();
        }
    }

    function resetGame() {
        userScore = 0;
        botScore = 0;
        updateScore();
        displayResult('');
    }

    const rockBtn = document.getElementById('rock');
    const paperBtn = document.getElementById('paper');
    const scissorsBtn = document.getElementById('scissors');
    rockBtn.addEventListener('click', () => playRound('rock'));
    paperBtn.addEventListener('click', () => playRound('paper'));
    scissorsBtn.addEventListener('click', () => playRound('scissors'));
