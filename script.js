let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

console.log("1 - ROCK \n2 - PAPER \n3 - SCISSOR");

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  x = ++x;
  return x;
}

function getPlayerchoice() {
    let x;
  while (x != 1 && x != 2 && x != 3) {
    x = parseInt(prompt("1 - ROCK or 2 - PAPER or 3 - SCISSOR"));
  }
  return x;
}

while (playerScore < 5 && computerScore < 5) {
  round();
}

function round() {
  playerChoice = getPlayerchoice();
  computerChoice = getComputerChoice();

  if (computerChoice == playerChoice) {
    console.log("DRAW");
  } else if (computerChoice == 1 && playerChoice == 2) {
    playerScore++;
    console.log("WIN");
  } else if (computerChoice == 1 && playerChoice == 3) {
    computerScore++;
    console.log("LOSE");
  } else if (computerChoice == 2 && playerChoice == 1) {
    computerScore++;
    console.log("LOSE");
  } else if (computerChoice == 2 && playerChoice == 3) {
    playerScore++;
    console.log("WIN");
  } else if (computerChoice == 3 && playerChoice == 1) {
    playerScore++;
    console.log("WIN");
  } else if (computerChoice == 3 && playerChoice == 2) {
    computerScore++;
    console.log("LOSE");
  }

  console.log(`Player: ${playerScore}        Computer: ${computerScore}`);

  if(playerScore == 5){
    console.log("PLAYER WON THE GAME");
  }else if(computerScore == 5){
    console.log("COMPUTER WON THE GAME");
  }
}
