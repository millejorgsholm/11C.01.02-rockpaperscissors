window.addEventListener("load", start);
function start() {
  console.log(start);
  getUserSelection();
}

//addEventListernes to all 3 buttons so that the user are able to click them
function getUserSelection() {
  console.log(getUserSelection);

  document.querySelector(".rock").addEventListener("click", playersChoice);
  document.querySelector(".paper").addEventListener("click", playersChoice);
  document.querySelector(".scissors").addEventListener("click", playersChoice);
}

//Show players choice
function playersChoice() {
  document.querySelector("#win").classList.add("hidden");
  document.querySelector("#lose").classList.add("hidden");
  document.querySelector("#draw").classList.add("hidden");

  //Making a random number between 1 and 3
  myRandom = Math.floor(Math.random() * 3 + 1);
  console.log(myRandom);

  //Make them shake
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");

  //If the player chooses rock
  if (this.classList.contains("rock")) {
    document
      .querySelector("#player1")
      .addEventListener("animationend", function () {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.remove("paper");
        document.querySelector("#player1").classList.remove("scissors");
        document.querySelector("#player1").classList.remove("rock");
        document.querySelector("#player1").classList.add("rock");
      });
  } else if (this.classList.contains("paper")) {
    document
      .querySelector("#player1")
      .addEventListener("animationend", function () {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.remove("paper");
        document.querySelector("#player1").classList.remove("scissors");
        document.querySelector("#player1").classList.remove("rock");
        document.querySelector("#player1").classList.add("paper");
      });
  } else if (this.classList.contains("scissors")) {
    document
      .querySelector("#player1")
      .addEventListener("animationend", function () {
        document.querySelector("#player1").classList.remove("shake");
        document.querySelector("#player1").classList.remove("paper");
        document.querySelector("#player1").classList.remove("scissors");
        document.querySelector("#player1").classList.remove("rock");
        document.querySelector("#player1").classList.add("scissors");
      });
  }
  computersChoice(myRandom);
}

//Define computers choice --> random number from 1 to 3 --> 1 is rock, 2 is paper and 3 is scissors
function computersChoice() {
  if (myRandom == "1") {
    document
      .querySelector("#player2")
      .addEventListener("animationend", function () {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.remove("paper");
        document.querySelector("#player2").classList.remove("scissors");
        document.querySelector("#player2").classList.remove("rock");
        document.querySelector("#player2").classList.add("rock");
      });
  } else if (myRandom == "2") {
    document
      .querySelector("#player2")
      .addEventListener("animationend", function () {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.remove("paper");
        document.querySelector("#player2").classList.remove("scissors");
        document.querySelector("#player2").classList.remove("rock");
        document.querySelector("#player2").classList.add("paper");
      });
  }
  if (myRandom == "3") {
    document
      .querySelector("#player2")
      .addEventListener("animationend", function () {
        document.querySelector("#player2").classList.remove("shake");
        document.querySelector("#player2").classList.remove("paper");
        document.querySelector("#player2").classList.remove("scissors");
        document.querySelector("#player2").classList.remove("rock");
        document.querySelector("#player2").classList.add("scissors");
      });
  }
}

//Define whether a game is won, lost or draw
function determineWinner() {
  if (
    document.getElementById("player1").classList.contains("rock") &&
    document.getElementById("player2").classList.contains("rock")
  ) {
    showDraw();
  } else if (
    document.getElementById("player1").classList.contains("rock") &&
    document.getElementById("player2").classList.contains("paper")
  ) {
    showLost();
  } else if (
    document.getElementById("player1").classList.contains("rock") &&
    document.getElementById("player2").classList.contains("scissors")
  ) {
    showWin();
  } else if (
    document.getElementById("player1").classList.contains("paper") &&
    document.getElementById("player2").classList.contains("rock")
  ) {
    showWin();
  } else if (
    document.getElementById("player1").classList.contains("paper") &&
    document.getElementById("player2").classList.contains("paper")
  ) {
    showDraw();
  } else if (
    document.getElementById("player1").classList.contains("paper") &&
    document.getElementById("player2").classList.contains("scissors")
  ) {
    showLost();
  } else if (
    document.getElementById("player1").classList.contains("scissors") &&
    document.getElementById("player2").classList.contains("rock")
  ) {
    showLost();
  } else if (
    document.getElementById("player1").classList.contains("scissors") &&
    document.getElementById("player2").classList.contains("paper")
  ) {
    showWin();
  } else if (
    document.getElementById("player1").classList.contains("scissors") &&
    document.getElementById("player2").classList.contains("scissors")
  ) {
    showDraw();
  }
}

//If the player wins
function showWin() {
  console.log("You won!");
  document.querySelector("#win").classList.remove("hidden");
}

//If the player lose
function showLost() {
  console.log("You lost!");
  document.querySelector("#lose").classList.remove("hidden");
}

//If it's draw
function showDraw() {
  console.log("It's draw");
  document.querySelector("#draw").classList.remove("hidden");
}
