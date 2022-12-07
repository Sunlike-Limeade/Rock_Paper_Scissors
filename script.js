const _playerScore = document.querySelector(".p-count");
const _computerScore = document.querySelector(".c-count");
const results = document.querySelector(".results");
const rockChoice = document.getElementById("rock");
const paperChoice = document.getElementById("paper");
const scissorsChoice = document.getElementById("scissors");
const score = document.querySelector(".score");
const newGame = document.getElementById("newGame");

rockChoice.style.color= "red";
paperChoice.style.color= "blue";
scissorsChoice.style.color= "green";

rockChoice.addEventListener("click", () => {
    playerSelection = "rock";
    (playRound(playerSelection));
    checkWinner();
});

paperChoice.addEventListener("click", () => {
    playerSelection = "paper";
    (playRound(playerSelection));
    checkWinner();
});

scissorsChoice.addEventListener("click", () => {
    playerSelection = "scissors";
    (playRound(playerSelection));
    checkWinner();
});

newGame.addEventListener("click", init);

function updateScore() {
    document.querySelector(".playerScore").textContent = "Player Score";
    document.querySelector(".computerScore").textContent = "Computer Score";
}

function init() {
    playerScore = 0;
    computerScore = 0;
    _playerScore.textContent = 0;
    _computerScore.textContent = 0;
    results.textContent = "";
}

let playerScore = 0;
let computerScore = 0;

let playerSelection = "";

function computerPlay() {
    const computerChoices = ["rock", "paper", "scissors"];
    const selection = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[selection]; 
}

function playRound(playerSelection) {
    const computerSelection = computerPlay();
    if (playerSelection === "rock" && computerSelection === "rock") {
        results.textContent = "It's a draw! You both chose Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        _playerScore.textContent = playerScore;
        results.textContent = "You win! Rock beats scissors!";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        _computerScore.textContent = computerScore;
        results.textContent = "You lose! Paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "paper") {
        results.textContent = "It's a draw! You both chose Paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        _playerScore.textContent = playerScore;
        results.textContent = "You win! paper beats rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        _computerScore.textContent = computerScore;
        results.textContent = "You lose! Scissors beats paper!";
    } else if (playerSelection === "scissors", computerSelection === "scissors") {
        results.textContent = "It's a draw! You both chose Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        _playerScore.textContent = playerScore;
        results.textContent = "You win! Scissors beats paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        _computerScore.textContent = computerScore;
        results.textContent = "You lose! Rock beats scissors!";
    } else {return "error"}
    
}

function checkWinner() {
    if (playerScore === 5) {
        alert("You Win! Congratulations!");
        init();
    }
    else if (computerScore === 5) {
        alert("Computer Wins! Try again next time!");
        init();
    }
}
