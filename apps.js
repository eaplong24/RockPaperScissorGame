
var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var maxScore = 5;

var choices = ["rock", "paper", "scissors"];

window.onload = function() {
    for (let i = 0; i < 3; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}

function saveName() {
    you = document.getElementById("name").value;
    hideIntroContainer();
}

function hideIntroContainer() {
    let intro = document.getElementById("introContainer");
    let main = document.getElementById("playArea");
    intro.classList.remove("d-block");
    intro.classList.add("d-none");
    main.classList.remove("d-none");

    document.getElementById("playerName").innerHTML = you;
    document.getElementById("your-score").innerHTML = yourScore;
}

function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png";

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";

    if (you == opponent) {
        yourScore += 0;
        opponentScore += 0;
    }
    else {
        if (you == "rock") {
            if (opponent == "scissors") {
                yourScore += 1;
            }
            else if (opponent == "paper") {
                opponentScore += 1;
            }
        }
        else if (you == "scissors") {
            if (opponent == "paper") {
                yourScore += 1;
            }
            else if (opponent == "rock") {
                opponentScore += 1;
            }
        }
        else if (you == "paper") {
            if (opponent == "rock") {
                yourScore += 1;
            }
            else if (opponent == "scissors") {
                opponentScore += 1;
            }
        }
    }

    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("opponent-score").innerText = opponentScore;
    checkFinal(yourScore, opponentScore);
}

function checkFinal(me, bot) {
    if (me == maxScore) {
        document.getElementById("winloss").innerHTML = `You won!`;
        document.getElementById("playArea").classList.add("d-none");
        document.getElementById("gameOver").classList.remove("d-none");
        
    } else if (bot == maxScore) {
        document.getElementById("winloss").innerHTML = `Bot won!`;
        document.getElementById("playArea").classList.add("d-none");
        document.getElementById("gameOver").classList.remove("d-none");
    }
}
