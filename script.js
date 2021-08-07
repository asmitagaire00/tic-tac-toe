let container = document.getElementsByClassName("grid-container")[0];
let items = document.getElementsByClassName("grid-item");
let restartBtn = document.getElementsByClassName("restart-btn")[0];
let messageOne = document.getElementsByClassName("message-one")[0];
let messageTwo = document.getElementsByClassName("message-two")[0];
let messageThree = document.getElementsByClassName("message-three")[0];
let firstInput = document.getElementsByClassName("first-input")[0];
let secondInput = document.getElementsByClassName("second-input")[0];
let statusPlayer = document.getElementsByClassName("status-player")[0];
let message = document.getElementsByClassName("message")[0];

let currentPlayer = "X";
let nextPlayer = "O";

firstInput.style.boxShadow = "0px 5px rgb(10, 119, 119)";
statusPlayer.value = currentPlayer + " Turn";

//onclick any grid in grid-container.
function funcMain(event) {
  let target = event.target;
  target.innerHTML = currentPlayer;
  target.style.pointerEvents = "none";
  handlePlayersTurn();
}

//players turn handler
function handlePlayersTurn() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusPlayer.value = statusPlayer.value === "O Turn" ? "X Turn" : "O Turn";
  if (statusPlayer.value === "X Turn") {
    firstInput.style.boxShadow = "0px 5px rgb(10, 119, 119)";
    secondInput.style.boxShadow = "none";
  } else if (statusPlayer.value === "O Turn") {
    secondInput.style.boxShadow = "0px 5px rgb(10, 119, 119)";
    firstInput.style.boxShadow = "none";
  }
  handlePlayerWin();
}

//winner handler
// handlePlayerWin();
function handlePlayerWin() {
  if (
    (items[0].innerHTML == "X" &&
      items[1].innerHTML == "X" &&
      items[2].innerHTML == "X") || //1
    (items[0].innerHTML == "X" &&
      items[3].innerHTML == "X" &&
      items[6].innerHTML == "X") || //2
    (items[0].innerHTML == "X" &&
      items[4].innerHTML == "X" &&
      items[8].innerHTML == "X") || //3
    (items[2].innerHTML == "X" &&
      items[5].innerHTML == "X" &&
      items[8].innerHTML == "X") || //4
    (items[6].innerHTML == "X" &&
      items[7].innerHTML == "X" &&
      items[8].innerHTML == "X") || //5
    (items[3].innerHTML == "X" &&
      items[4].innerHTML == "X" &&
      items[5].innerHTML == "X") || //6
    (items[1].innerHTML == "X" &&
      items[4].innerHTML == "X" &&
      items[7].innerHTML == "X") || //7
    (items[2].innerHTML == "X" &&
      items[4].innerHTML == "X" &&
      items[6].innerHTML == "X") //8
  ) {
    console.log("player:X win");
    for (let i = 0; i <= 8; i++) {
      items[i].style.pointerEvents = "none";
    }
    messageOne.style.opacity = "1";
    messageOne.style.color = "rgb(10, 119, 119)";
    messageOne.style.fontSize = "50px";
    messageOne.style.transition = "1s";
    container.style.opacity = "0";
    container.style.transition = "1s";
  } else if (
    (items[0].innerHTML == "O" &&
      items[1].innerHTML == "O" &&
      items[2].innerHTML == "O") || //1
    (items[0].innerHTML == "O" &&
      items[3].innerHTML == "O" &&
      items[6].innerHTML == "O") || //2
    (items[0].innerHTML == "O" &&
      items[4].innerHTML == "O" &&
      items[8].innerHTML == "O") || //3
    (items[2].innerHTML == "O" &&
      items[5].innerHTML == "O" &&
      items[8].innerHTML == "O") || //4
    (items[6].innerHTML == "O" &&
      items[7].innerHTML == "O" &&
      items[8].innerHTML == "O") || //5
    (items[3].innerHTML == "O" &&
      items[4].innerHTML == "O" &&
      items[5].innerHTML == "O ") || //6
    (items[1].innerHTML == "O" &&
      items[4].innerHTML == "O" &&
      items[7].innerHTML == "O") || //7
    (items[2].innerHTML == "O" &&
      items[4].innerHTML == "O" &&
      items[6].innerHTML == "O") //8
  ) {
    console.log("Player:O win");
    for (let i = 0; i <= 8; i++) {
      items[i].style.pointerEvents = "none";
    }
    messageTwo.style.opacity = "1";
    messageTwo.style.color = "rgb(10, 119, 119)";
    messageTwo.style.fontSize = "50px";
    messageTwo.style.transition = "1s";
    container.style.opacity = "0";
    container.style.transition = "1s";
  } else if (
    (items[0].innerHTML == "X" || items[0].innerHTML == "O") &&
    (items[1].innerHTML == "X" || items[1].innerHTML == "O") &&
    (items[2].innerHTML == "X" || items[2].innerHTML == "O") && //1
    (items[0].innerHTML == "X" || items[0].innerHTML == "O") &&
    (items[3].innerHTML == "X" || items[3].innerHTML == "O") &&
    (items[6].innerHTML == "X" || items[6].innerHTML == "O") && //2
    (items[0].innerHTML == "X" || items[0].innerHTML == "O") &&
    (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
    (items[8].innerHTML == "X" || items[8].innerHTML == "O") && //3
    (items[2].innerHTML == "X" || items[2].innerHTML == "O") &&
    (items[5].innerHTML == "X" || items[5].innerHTML == "O") &&
    (items[8].innerHTML == "X" || items[8].innerHTML == "O") && //4
    (items[6].innerHTML == "X" || items[6].innerHTML == "O") &&
    (items[7].innerHTML == "X" || items[7].innerHTML == "O") &&
    (items[8].innerHTML == "X" || items[8].innerHTML == "O") && //5
    (items[3].innerHTML == "X" || items[3].innerHTML == "O") &&
    (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
    (items[5].innerHTML == "X" || items[5].innerHTML == "O") && //6
    (items[1].innerHTML == "X" || items[1].innerHTML == "O") &&
    (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
    (items[7].innerHTML == "X" || items[7].innerHTML == "O") && //7
    (items[2].innerHTML == "X" || items[2].innerHTML == "O") &&
    (items[4].innerHTML == "X" || items[4].innerHTML == "O") &&
    (items[6].innerHTML == "X" || items[6].innerHTML == "O") //8
  ) {
    messageThree.style.opacity = "1";
    messageThree.style.color = "rgb(10, 119, 119)";
    messageThree.style.fontSize = "50px";
    messageThree.style.transition = "1s";
    container.style.opacity = "0";
    container.style.transition = "1s";
    console.log("draw");
  }
}

restartBtn.onclick = function restartGame(items) {
  for (let i = 0; i <= 8; i++) {
    items[i].innerHTML = "";
  }
};
