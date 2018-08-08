// Variables
var score = 0;
var winningScore = generateScore();
var wins = 0;
var losses = 0;


// Comes up with winning score
function generateScore() {
    return (Math.floor(Math.random() * (120 - 19 + 1) + 19));

}

// crystal values
function crystalGenerator() {
    return (Math.floor(Math.random() * (12 - 1 + 1) + 1));

}

// incrementing score
function scoreKeep() {
    var numberGenerated = crystalGenerator();
    score += numberGenerated;
    document.getElementById("incrementingScore").innerHTML = score
}

// on loading:
$(document).ready(function () {
    document.getElementById("totalScore").innerHTML = winningScore

    $(".button1").on("click", function () {
        scoreKeep();
        checkScore();

    });

});


// Winning game
function checkScore() {
    if (score === winningScore) {
        wins += 1;
        alert("You Win!");
        document.getElementById("wins").innerHTML = wins;
        turnClock();
    } else if (score > winningScore) {
        losses += 1;
        alert("You lose!")
        document.getElementById("losses").innerHTML = losses;
        turnClock();
    }
};

// clears score, generates new score
function turnClock() {
    score = 0;
    document.getElementById("incrementingScore").innerHTML = score

    winningScore = generateScore();
    document.getElementById("totalScore").innerHTML = winningScore
};

