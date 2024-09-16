console.log('Hello, World!');
//declaration of code
const rock = 'rock';
const paper = 'paper';
const scissor = 'scissor';

//to get com choice and return a string value
function getComChoice (com) {
    com = Math.floor(Math.random() * 10);
    return com;  
}

console.log(getComChoice());