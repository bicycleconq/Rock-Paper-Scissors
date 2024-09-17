console.log('Hello, World!');
//to get com choice 

function getComputerChoice (rock, paper, scissors) {
    let com = Math.floor(Math.random() * 3 + 1);
    rock = 1;
    paper = 2;
    scissors = 3;
     if (rock === com) {
        return 'rock';
    } else if (paper === com) {
        return 'paper';
    } else {
        return'scissors';
    } 
}

// to get human/input choice

function getHumanChoice(choice) {

    if (choice === 'rock') {
        return 'rock';
    } else if (choice === 'paper') {
        return 'paper';
    } else if (choice === 'scissors') {
        return 'scissors';
    } else {
        return 'Invalid choice. Please choose rock, paper, or scissors.';
    }
}

const userInput = prompt("Enter your choice (rock, paper, or scissors): ");



//initial score value
let computerScore = 0;
let userScore = 0;

//playing single round
function playRound(computerChoice, humanChoice) {
    //passing the assigned arguments to their parameters
    humanChoice = userSelection;
    humanChoice.toLowerCase();
    computerChoice = comSelection;
    //defining rules
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    };
    //determine winner
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${computerChoice}.`);
    } else if (rules[humanChoice] === computerChoice) {
        userScore++;
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
    } else {
        computerScore++;
        console.log(`You lost this round! ${computerChoice} beats ${humanChoice}.`);
    }
    //Current Scores
    console.log(`Current scores You: ${userScore}, Computer: ${computerScore}`);
}
// assigning bot and user choice as argument
const userSelection = getHumanChoice((userInput));
const comSelection =  getComputerChoice();

(playRound(comSelection, userSelection));