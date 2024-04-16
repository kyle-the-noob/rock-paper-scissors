function getComputerChoice() {
        let choiceArray = ['Rock', 'Paper', 'Scissors'];
        return choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    }

function playerChoice(buttons) {

        /*let userInput = prompt("Rock, Paper or Scissors");
        userInput = userInput.toUpperCase();
        return userInput;*/


}

function playRound() {
    /*let playerSelection = playerChoice();*/
    let computerSelection = getComputerChoice(); 

    if(playerSelection === computerSelection) {
        console.log("You draw !");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log(`You win ${playerSelection} beats ${computerSelection}`);
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log(`You lose ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log(`You lose ${computerSelection} beats ${playerSelection}`);
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log(`You lose ${computerSelection} beats ${playerSelection}`);
    }
}

let playerSelection;

/*function playGame() {
    let counter = 1;

    while (counter <= 5) {
        playRound();
        counter++;
    }
}*/

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");
// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    if (button == rock) {
        playerSelection = "Rock";
        playRound();
    } else if(button === paper) {
        playerSelection = "Paper";
        playRound();
    } else {
        playerSelection = "Scissors";
        playRound();
    }
  });
});
