let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
playerSelection.toLowerCase;
let computerSelection = computerPlay();

function computerPlay() {
    const computerChoices = ["rock", "paper", "scissors"];
    const selection = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[selection]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors", computerSelection === "scissors") {
        return "It's a draw!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!";
    } else {return "error"}
    
}

console.log(playRound(playerSelection, computerSelection));



function game() {
    for (let i = 1; i <= 5; i++) {
        let playerSelection = window.prompt("Please make a selection...");
        let computerSelection = computerPlay();

        console.log("Round #" + i);
        console.log(playerScore);
        console.log(computerScore);
    if (i == 5) {
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    }
    else if (computerScore > playerScore) {
        console.log("You lose! The computer has won the game!");
    } else {console.log("It's a tie! Nobody wins!")}
    } else {
        playRound(playerSelection, computerSelection);
    }
   }
}

game();
