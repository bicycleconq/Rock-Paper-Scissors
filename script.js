console.log('Hello, World!');
//to get com choice 

function getComputerChoice (rock, paper, scissor) {
    let com = Math.floor(Math.random() * 3 + 1);
    rock = 1;
    paper = 2;
    scissor = 3;
     if (rock === com) {
        return 'Rock';
    } else if (paper === com) {
        return 'Paper';
    } else if (scissor === com) {
        return'Scissors';
    } 
}

// to get human/input choice

function getHumanChoice (userInput) {
    userInput = prompt('Choose from Rock, Paper, Scissor');
    return 'You chose ' +  userInput;
}



//initial score value
let computerScore = 0;
let userScore = 0;

//playing single round
function playRound(computerChoice, humanChoice) {
    humanChoice = userSelection;
    humanChoice.toLowerCase();
    computerChoice = comSelection;
}

const userSelection = getHumanChoice();
const comSelection =  getComputerChoice();


console.log(playRound(comSelection, userSelection));