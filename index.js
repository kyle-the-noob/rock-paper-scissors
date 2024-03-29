function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    return choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
}

function playerChoice() {

    let userInput = prompt("Rock, Paper or Scissors");
    userInput = userInput.toUpperCase();
    return userInput;
}

function playRound() {
let playerSelection = playerChoice();
let computerSelection = getComputerChoice(); 

if(playerSelection === computerSelection) {
    console.log("You draw !");
} else if (playerSelection === "ROCK" && computerSelection === "Scissors") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
} else if (playerSelection === "PAPER" && computerSelection === "Rock") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
} else if (playerSelection === "SCISSORS" && computerSelection === "Paper") {
    console.log(`You win ${playerSelection} beats ${computerSelection}`);
} else if (playerSelection === "ROCK" && computerSelection === "Paper") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
} else if (playerSelection === "PAPER" && computerSelection === "Scissors") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
} else if (playerSelection === "SCISSORS" && computerSelection === "Rock") {
    console.log(`You lose ${computerSelection} beats ${playerSelection}`);
}

}