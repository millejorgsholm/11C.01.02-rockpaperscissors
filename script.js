let playerChoice;
let computerChoice;
let computerRandom;
let players = document.querySelectorAll(".player");
let btns = document.querySelectorAll("button");

start();
function start() {
  console.log("Game started");
  playersChoice();
}

//Hvordan laves dette? addEventListeners?
function playersChoice() {
  console.log("Players choice");
  rememberPlayerChoice();
}

//Hvordan husker den dette?
function rememberPlayerChoice() {
  makeRandomComputerChoice();
}

//Math randon
function makeRandomComputerChoice() {
  console.log("Making random computer choice");
  rememberComputerChoice();
}

//Hvordan husker den dette?
function rememberComputerChoice() {
  showAnimations();
}

//CSS animationer

function showAnimations() {
  console.log("Show animations");
  determineWinner();
}

//Brug if-else til at afgøre, hvorvidt spiller har vundet/tabt/uafgjort

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

//Tilføj og fjern hide-funktioner alt efter om spilleren har vundet/tabt eller uafgjort

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
