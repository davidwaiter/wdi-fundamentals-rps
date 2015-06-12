////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {

    if (move)  { 
        return move;
    }
    else {
        return getInput();
    }
}

function getComputerMove(move) {
    
    if (move) {
        return move;
    }
    else {
        return randomPlay();
    }
}

function getWinner(playerMove,computerMove) {
    var winner;

    if (playerMove === 'rock' && computerMove === 'scissors'){
+    result = 'player wins';
+}   else if (playerMove === 'rock' && computerMove === 'paper'){
+       result = 'computer wins';
+}   else if (playerMove === 'paper' && computerMove === 'rock'){
+       result = 'player wins';
+}   else if (playerMove === 'paper' && computerMove === 'scissors'){
+       result = 'computer wins';
+}   else if (playerMove === 'scissors' && computerMove === 'rock'){
+       result = 'computer wins';
+}   else if (playerMove === 'scissors' && computerMove ==='paper'){
+       result = 'player wins';
+}   else if (playerMove === 'scissors' && computerMove === 'scissors'){
+       result = 'tie';
+}   else if (playerMove === 'paper' && computerMove === 'paper'){
+       result = 'tie';
+}   else if (playerMove === 'rock' && computerMove === 'rock'){
+       result = 'tie';

    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}

