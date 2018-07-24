$(document).ready(function () {

    // Global Variables

    var wins = 0;
    var losses = 0;
    var myScore = 0;

    // Beginning random number values of 19-120
    var computerNumber = Math.floor(Math.random() * 101 + 19);

    // Random values stored for gems values of 1-12
    var gem1 = Math.floor(Math.random() * 11 + 1);
    var gem2 = Math.floor(Math.random() * 11 + 1);
    var gem3 = Math.floor(Math.random() * 11 + 1);
    var gem4 = Math.floor(Math.random() * 11 + 1);
    console.log("Red: " + gem1);
    console.log("Yellow: " + gem2);
    console.log("Blue: " + gem3);
    console.log("Green: " + gem4);

    // jQuery reflection of wins,losses, random number
    $("#randomNumber").text(computerNumber);
    $("#totalWins").text(wins);
    $("#totalLosses").text(losses);

    // Crystal functions
    $("#red").click(function () {
        myScore = myScore + gem1;
        console.log("Updated score: " + myScore);
        $("#currentScore").text(myScore);
        if (myScore === computerNumber) {
            victory();
        } else if (myScore > computerNumber) {
            vanquish();
        }
    });

    $("#yellow").click(function () {
        myScore = myScore + gem2;
        console.log("Updated score: " + myScore);
        $("#currentScore").text(myScore);
        if (myScore === computerNumber) {
            victory();
        } else if (myScore > computerNumber) {
            vanquish();
        }
    });
    $("#blue").click(function () {
        myScore = myScore + gem3;
        console.log("Updated score: " + myScore);
        $("#currentScore").text(myScore);
        if (myScore === computerNumber) {
            victory();
        } else if (myScore > computerNumber) {
            vanquish();
        }
    });
    $("#green").click(function () {
        myScore = myScore + gem4;
        console.log("Updated score: " + myScore);
        $("#currentScore").text(myScore);
        if (myScore === computerNumber) {
            victory();
        } else if (myScore > computerNumber) {
            vanquish();
        }
    });

    // At end of Games, reset the random number and user score
    function reset() {
        computerNumber = Math.floor(Math.random() * 101 + 19);
        console.log(computerNumber);
        myScore = 0;
        $("#currentScore").text(myScore);
        $("#randomNumber").text(computerNumber);
        gem1 = Math.floor(Math.random() * 11 + 1);
        gem2 = Math.floor(Math.random() * 11 + 1);
        gem3 = Math.floor(Math.random() * 11 + 1);
        gem4 = Math.floor(Math.random() * 11 + 1);
    }

    // If user wins
    function victory() {
        wins++;
        alert("Congratulations! You win all the crystals!");
        $("#totalWins").text(wins);
        reset();
    }

    // If user loses
    function vanquish() {
        losses++;
        alert("Sorry, no crystals for you!");
        $("#totalLosses").text(losses);
        reset();
    }

    
    document.getElementById("scores").innerHTML = 
    '<p id="totalWins">' + "Total wins: " + wins + '</p>' +
    '<p id="totalLosses">' + "Total Losses: " + losses + '</p>' +
    '<p id="randomNumber">' + "Number to Match: " + computerNumber + '</p>' +
    '<p id="currentScore">' + "Your Current Score: " + myScore + '</p>';
    console.log(scores);


    

});



    // function render() {
    // var jumbotron =
    // '<p id="totalWins">' + wins + '</p>' +
    // '<p id="totalLosses">' + losses + '</p>' +
    // '<p id="randomNumber">' + computerNumber + '</p>' +
    // '<p id="currentScore">' + myScore + '</p>';

   
    // var targetDiv = document.getElementById("scores");

    // targetDiv.textContent = 
    // '<p id="totalWins">' + wins + '</p>' +
    // '<p id="totalLosses">' + losses + '</p>' +
    // '<p id="randomNumber">' + computerNumber + '</p>' +
    // '<p id="currentScore">' + myScore + '</p>';
    

    // render();
