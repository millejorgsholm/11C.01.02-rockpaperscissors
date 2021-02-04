function start() {
  console.log("Game started");
  getUserSelection();
}

function getUserSelection() {
  console.log("Get user selection");
  makeRandomComputerChoice();
}

function makeRandomComputerChoice() {
  console.log("Making random computer choice");
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
}

function showWin() {
  console.log("Show win!");
}

function showLose() {
  console.log("Show lose!");
}
