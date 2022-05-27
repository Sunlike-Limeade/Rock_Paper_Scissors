function computerPlay() {
    const computerChoices = ["rock", "paper", "scissors"];
    const selection = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[selection]; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "rock") {
        return "It's a draw!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        return "It's a draw!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! paper beats rock!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "It's a draw!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Paper beats scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors!";
    } else {return "error"}
    
}

const playerSelection = "rock";
playerSelection.toLowerCase;
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));