// ask the user to enter in their move
let playerSelection = prompt("Please choose Rock, Paper, or Scissors").toLowerCase();

// randomly generate the opponents move
const selections = ["rock", "paper", "scissors"]
let getComputerChoice = Math.floor(Math.random() * selections.length);
let computerSelection = selections[getComputerChoice];

console.log("You picked " + playerSelection);
console.log("The computer picked " + computerSelection);

// write a function to play a round with the two parameters
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection){
    return "It's a tie!";

// rock choices
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win!";
  } else if (playerSelection === "rock" && computerSelection === "paper"){
    return "You Lose!";
  
//paper choices
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win!";
  } else if (playerSelection === "paper" && computerSelection === "scissors"){
    return "You Lose!";
  
//scissors choices
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win!";
  } else if (playerSelection === "scissors" && computerSelection === "rock"){
    return "You Lose!";
  }
}
console.log(playRound(playerSelection, computerSelection));
let playerScore = 0;
let computerScore = 0;