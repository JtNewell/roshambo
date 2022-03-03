var playerScore = 0;
var computerScore = 0;
var draw = 0;

// Takes players selection and returns it in lowercase

function playerSelect () {
       let playerSelection = prompt("Choose Rock, Paper, or Scissors");
       return playerSelection.toLowerCase();
}

// Randomly generates choice for computer

function computerPlay() {
    let rps = ['rock', 'paper', 'scissors'];
    let computerInput = rps[Math.floor(Math.random()*rps.length)];
    return computerInput;

}

// Plays a single round of RPS and changes scores.

function playRound(playerSelection, computerSelection) {
       if (playerSelection == computerSelection) {
              draw++;
              return 'Tie, great minds think alike!';
       }
       else if (playerSelection == 'rock'){
              if(computerSelection == 'paper'){
                     computerScore++;
                     return 'Computer slung Paper. You lose! Paper beats Rock!';
              }else{
                     playerScore++;
                     return 'Computer slung Scissors. You Win! Rock beats Scissors!';
              }
       }
       else if(playerSelection == 'scissors'){
              if(computerSelection ==='rock'){
                     computerScore++;
                     return 'Computer slung Rock. You lose! Rock beats Scissors!';
              }else{
                     playerScore++;
                     return 'Computer slung Paper. You Win! Scissors beats Paper!';
              }
       }
       else if(playerSelection =='paper'){
              if(computerSelection == 'scissors'){
                     computerScore++;
                     return 'Computer slung Scissors. You lose! Scissors beats Paper!';
              }else{
                     playerScore++;
                     return 'Computer slung Rock. You Win! Paper beats Rock!';
              }
       }
}

// simple score updater

function scoreUpdate() {
       return `The current score is draws = ${draw}, player = ${playerScore}, computer = ${computerScore}.`;
}

// 5 round game that keeps score (have to call 5 times)

function game() {
       let sum = draw + playerScore + computerScore;
       if(sum < 5){
              return playRound(playerSelect(), computerPlay());
       }else{
              return `Gameover! Player = ${playerScore}, Computer = ${computerScore}, Draws = ${draw}`;
       }
}



