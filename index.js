function getComputerChoice() {
    let choiceArray = ['Rock', 'Paper', 'Scissors'];
    return choice = choiceArray[Math.floor(Math.random() * choiceArray.length)];
    }

function playGame() {
    let computerSelection = getComputerChoice(); 
    const div = document.querySelector("div");
    const score = document.getElementById("score");
    const winnermsg = document.getElementById("winnermsg");

    for (let i = 0; i < 1; i++) { 
    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Paper" && computerSelection === "Rock" || 
        playerSelection === "Scissors" && computerSelection === "Paper") {
        div.textContent = `You win ${playerSelection} beats ${computerSelection}`;
        playerScore ++;
    } else if (playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        div.textContent = `You lose ${computerSelection} beats ${playerSelection}`;
        cpuScore ++;
    } else {
        div.textContent = "You draw !";
    } score.textContent = (`Score ${playerScore} : ${cpuScore}`);
}
    function checkForWin() {
        if (playerScore === 5){
            winnermsg.textContent = "You win!";
            gameEnd = true;
        } else if ( cpuScore === 5) {
            winnermsg.textContent = "The computer wins!";
            gameEnd = true;
        }
}
checkForWin();

    if(gameEnd === true) {
        playerScore = 0;
        cpuScore = 0;
        gameEnd = false;
    }
}

let gameEnd = false;
let cpuScore = 0;
let playerScore = 0;

let playerSelection;
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button == rock) {
        playerSelection = "Rock";
        playGame();
    } else if(button === paper) {
        playerSelection = "Paper";
        playGame();
    } else {
        playerSelection = "Scissors";
        playGame();
    }
  });
});