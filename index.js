function getComputerChoice() {
        let choiceArray = ['Rock', 'Paper', 'Scissors'];
        return choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    }

function playRound() {
    let computerSelection = getComputerChoice(); 
    const div = document.querySelector("div");

    if(playerSelection === computerSelection) {
        div.textContent = "You draw !"
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        div.textContent = `You win ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        div.textContent = `You win ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        div.textContent = `You win ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        div.textContent = `You lose ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        div.textContent = `You lose ${computerSelection} beats ${playerSelection}`
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        div.textContent = `You lose ${computerSelection} beats ${playerSelection}`
    }
}

let playerSelection;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
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

/*function playGame() {
    let counter = 1;

    while (counter <= 5) {
        playRound();
        counter++;
    }
}*/

