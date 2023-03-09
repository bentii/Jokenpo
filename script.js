let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;
let playerScoreboard = document.querySelector("#playerScore");
let computerScoreboard = document.querySelector("#computerScore");
let scoreboard = document.querySelector("#scoreboard");

console.log("1 - ROCK \n2 - PAPER \n3 - SCISSOR");

function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  x = ++x;
  return x;
}

function playerWin() {
  playerScore++;
  scoreboard.textContent = "WIN";
  scoreboard.style.color = "green";
  playerScoreboard.textContent = playerScore;
  history(1);
}

function playerLose() {
  computerScore++;
  scoreboard.textContent = "LOSE";
  scoreboard.style.color = "red";
  computerScoreboard.textContent = computerScore;
  history(2);
}

function endGame() {
  setTimeout(() => {
    window.location.reload();
  }, 2000);
  document.querySelector("#rock-btn").disabled = true;
  document.querySelector("#paper-btn").disabled = true;
  document.querySelector("#scissors-btn").disabled = true;
}

function history(x) {
  let computer, player;
  switch (computerChoice) {
    case 1:
      computer = "ROCK";
      break;
    case 2:
      computer = "PAPER";
      break;
    case 3:
      computer = "SCISSORS";
      break;
  }
  switch (playerChoice) {
    case 1:
      player = "ROCK";
      break;
    case 2:
      player = "PAPER";
      break;
    case 3:
      player = "SCISSORS";
      break;
  }
  const content = document.createElement("div");
  content.classList.add("content");
  content.textContent = `${player}------------------${computer}`;
  const main = document.querySelector("#placar");
  main.parentNode.insertBefore(content, main.nextSibling);
  if (x == 1) {
    content.style.color = "green";
  } else if (x == 2) {
    content.style.color = "red";
  }
}

function round(btnClicked) {
  /*
  playerChoice = getPlayerchoice(); */
  let btnClickedId = btnClicked.target.id;
  if (btnClickedId == "rock-btn") {
    playerChoice = 1;
  } else if (btnClickedId == "paper-btn") {
    playerChoice = 2;
  } else {
    playerChoice = 3;
  }

  computerChoice = getComputerChoice();

  if (computerChoice == playerChoice) {
    scoreboard.textContent = "DRAW";
    scoreboard.style.color = "gray";
    history();
  } else if (computerChoice == 1 && playerChoice == 2) {
    playerWin();
  } else if (computerChoice == 1 && playerChoice == 3) {
    playerLose();
  } else if (computerChoice == 2 && playerChoice == 1) {
    playerLose();
  } else if (computerChoice == 2 && playerChoice == 3) {
    playerWin();
  } else if (computerChoice == 3 && playerChoice == 1) {
    playerWin();
  } else if (computerChoice == 3 && playerChoice == 2) {
    playerLose();
  }

  console.log(`Player: ${playerScore}        Computer: ${computerScore}`);

  if (playerScore == 5) {
    scoreboard.textContent = "PLAYER WON THE GAME";
    endGame();
  } else if (computerScore == 5) {
    scoreboard.textContent = "COMPUTER WON THE GAME";
    endGame();
  }
}

document.querySelector("#rock-btn").addEventListener("click", round);
document.querySelector("#paper-btn").addEventListener("click", round);
document.querySelector("#scissors-btn").addEventListener("click", round);

const container = document.querySelector("#container");
