function start() {
  console.log("Game started");
  getUserSelection();
}

function playersChoice() {
  console.log("Players choice");
  rememberPlayerChoice();
}

function rememberPlayerChoice() {
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("Making random computer choice");
  rememberComputerChoice();
}

function rememberComputerChoice() {
  showAnimations();
}

function showAnimations() {
  console.log("Show animations");
  determineWinner();
}

function determineWinner() {
  console.log("Determine winner");
  //Faked so player always win
  winner = "computer";

  //if player won
  showWin();

  //if player lose
  showLose();

  // if draw
  showDraw();
}

function showWin() {
  console.log("Show win!");
  showResult();
}

function showLose() {
  console.log("Show lose!");
  showResult();
}

function showDraw() {
  console.log("Show draw!");
  showResult();
}

function showResult() {
  console.log("Show result");
}
