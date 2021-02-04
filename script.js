start();
function start() {
  console.log("Game started");
  getUserSelection();
}

//addEventListernes to all 3 buttons so that the user are able to click them
function getUserSelection() {
  console.log(getUserSelection);

  document.querySelector(".rock").addEventListener("click", playerChoice);
  document.querySelector(".paper").addEventListener("click", playerChoice);
  document.querySelector(".scissors").addEventListener("click", playerChoice);
}

function playerChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");
  myRandom = Math.floor(Math.random() * 3 + 1);
  console.log(myRandom);

  //Make the hands shake - CSS animation
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}

function computerChoice() {}

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
