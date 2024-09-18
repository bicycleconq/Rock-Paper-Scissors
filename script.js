console.log('Hello, World!');

//play entire game
function playGame() {
    //initialize score values
    let userScore = 0;
    let botScore = 0;
    //play a single round
    function playRound() {
        const choices = ['rock', 'paper', 'scissors'];
        const userChoice = prompt("Enter rock, paper, or scissors:").toLowerCase();
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        if (userChoice === botChoice) {
            return "It's a tie!";
        }
        //declare rules and determine round winner
        if (
            (userChoice === 'rock' && botChoice === 'scissors') ||
            (userChoice === 'paper' && botChoice === 'rock') ||
            (userChoice === 'scissors' && botChoice === 'paper')
        ) {
            userScore++;
            return `You win! ${userChoice} beats ${botChoice}.`;
        } else {
            botScore++;
            return `You lose! ${botChoice} beats ${userChoice}.`;
        }
    }
    //play the game for 5 rounds
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}:`);
        console.log(playRound());
    }
    //Final Score
    console.log(`Final Scores - You: ${userScore}, Computer: ${botScore}`);

    if (userScore > botScore) {
        console.log("Congratulations, you win the game!");
    } else if (botScore > userScore) {
        console.log("Sorry, you lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}


playGame();
