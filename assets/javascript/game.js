
$(document).ready(function () {

    var score = 0;
    var winningScore = generateScore();
    var wins = 0;
    var losses = 0;
    var crystalVal1 = 0;
    var crystalVal2 = 0;
    var crystalVal3 = 0;
    var crystalVal4 = 0;

    crystalGenerator();

    function generateScore() {
        return (Math.floor(Math.random() * (120 - 19 + 1) + 19));

    }

    function crystalGenerator() {

        crystalVal1 = generateCrystalValue();
        crystalVal2 = generateCrystalValue();
        crystalVal3 = generateCrystalValue();
        crystalVal4 = generateCrystalValue();

        $('.button1').data('num', crystalVal1);
        $('.button2').data('num', crystalVal2);
        $('.button3').data('num', crystalVal3);
        $('.button4').data('num', crystalVal4);

    }

    function generateCrystalValue() {
        return Math.floor(Math.random() * (12 - 1 + 1) + 1);
    }

    function scoreKeep(val) {
        score += val;
        $("#incrementingScore").text(score);
    }

    function checkScore() {
        if (score === winningScore) {
            wins += 1;
            alert("You Win!");
            $("#wins").text(wins);
            reset();
        } else if (score > winningScore) {
            losses += 1;
            alert("You lose!")
            $("#losses").text(losses);
            reset();
        }
    };

    function reset() {
        score = 0;
        winningScore = generateScore();
        crystalGenerator();
        $("#totalScore").text(winningScore);
        $("#incrementingScore").text(score);
    }

    $("#totalScore").text(winningScore);

    $(".crystal").on("click", function () {
        var cval = $(this).data('num');
        console.log(cval)
        scoreKeep(cval);
        checkScore();

    });

});