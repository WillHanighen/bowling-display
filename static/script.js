var playerCounter = 0;

function addPlayer() {
  console.log("adding player");

  let enterPressed = false;
  
  playerCounter++;
  let playerNameInput = document.getElementById("nameInput");
  document.getElementById("name").value = "";
  playerNameInput.style.display = "block";

  playerNameInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !enterPressed) {
      enterPressed = true;
      insertDiv();
    }
    enterPressed = false;
  });

}

function insertDiv() {
  console.log("inserting div");

  if (document.getElementById("name").value === "") {
    alert("Please enter a name");
  }
  else {
    let nameInput = document.getElementById("name").value;


    let playerNameInput = document.getElementById("nameInput");
    playerNameInput.style.display = "none";
  
    let playerRowDiv = document.getElementById("player-" + playerCounter);
  
    let scoreboard = document.getElementById("scoreboard");
    console.log(scoreboard);

    fetch("/static/player_row.html")
      .then(response => response.text())
      .then(text => {
        text = text.replace("Player", nameInput);
        // console.log(text);
        playerRowDiv.innerHTML = text;
      });
  
    playerRowDiv.classList.remove("new-player");
    console.log(playerRowDiv);

  }
  
}

function deletePlayer(event) {
  console.log("deleting player");

  let parrentDiv = event.target.parentNode;

  parrentDiv.innerHTML = "";
  document.getElementById(parrentDiv.id).style.display = "none";
  playerCounter--;

}

function closePopup() {
  document.getElementById("nameInput").style.display = "none";
}
