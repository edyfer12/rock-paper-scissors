//Declare function that computer makes a move
function getComputerChoice() {
    //Declare a variable called computerMove
    let computerMove;
    //Assign the variable to a random number value, multiplied by 3 all rounded up
    computerMove = Math.ceil(Math.random() * 3);
    //If variable is 1, return 'Rock'
    if(computerMove == 1){
        return 'Rock';
    }
    //If variable is 2, return 'Paper'
    else if(computerMove == 2){
        return 'Paper';
    }
    //If variable is 3, return 'Scissors'
    else {
        return 'Scissors';
    }
}
//Declare score variables for player and computer and set both to 0
let playerScore = 0;
let computerScore = 0;

/* Declare a function that enables both the computer and player to play one round of the game 
with two parameters passed, playerSelection and computerSelection */
function playRound(playerSelection, computerSelection){
    /*If the playerSelection is equal to 'rock' and computerSelection is equal to 'Scissors', 
    playerSelection is equal to 'paper' to computerSelection is equal to 'Rock' OR 
    playerSelection is equal to 'scissors' and computerSelection is equal to 'Paper', 
    increment player's score by 1 and return 'You Win!'*/
    if(playerSelection === 'rock' && computerSelection === 'Scissors' || 
    playerSelection === 'paper' && computerSelection === 'Rock' ||
    playerSelection === 'scissors' && computerSelection === 'Paper'){
        return 'You Win!';
    }
    /*If the playerSelection is equal to 'rock' and computerSelection is equal to 'Paper', 
    playerSelection is equal to 'paper' to computerSelection is equal to 'Scissors' OR 
    playerSelection is equal to 'scissors' and computerSelection is equal to 'Rock',
    increment computer's score by 1 and return 'You Lose!'*/
    else if (playerSelection === 'rock' && computerSelection === 'Paper' ||
    playerSelection === 'paper' && computerSelection === 'Scissors' ||
    playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'You lose!';
    }
    //If the playerSelection has the same string as the computerSelection, return 'Tie!'
    else {
        return 'Tie!';
    }
}

/* Declare a function that enables both player and the computer to play the full game up to a score of 5 points
either from the player or computer */
function game(){
    //Create a variable for the player and assign the input as a value, 'rock, paper, scissors' case insensitive
    let playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    /*Create a variable for the computer and assign the getComputerChoice function call to return random strings,
    'Rock', 'Paper' and 'Scissors'*/
    let computerSelection = getComputerChoice();
    //Invoke the playRound function() and print the invoked function to the console
    console.log(playRound(playerSelection, computerSelection));
    //Encourage the player to type in input stored into existing variable
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Encourage the computer to return random strings and store into existing variable
    computerSelection = getComputerChoice();
    //Invoke the playRound function() and print the invoked function to the console
    console.log(playRound(playerSelection, computerSelection));
    //Encourage the player to type in input stored into existing variable
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Encourage the computer to return random strings and store into existing variable
    computerSelection = getComputerChoice();
    //Invoke the playRound function() and print the invoked function to the console
    console.log(playRound(playerSelection, computerSelection));
    //Encourage the player to type in input stored into existing variable
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Encourage the computer to return random strings and store into existing variable
    computerSelection = getComputerChoice();
    //Invoke the playRound function() and print the invoked function to the console
    console.log(playRound(playerSelection, computerSelection));
    //Encourage the player to type in input stored into existing variable
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Encourage the computer to return random strings and store into existing variable
    computerSelection = getComputerChoice();
    //Invoke the playRound function() and print the invoked function to the console
    console.log(playRound(playerSelection, computerSelection));
    //If the player's score is 5, print to console 'Player wins the game' and set player's and computer's score to 0
    //If the computer's score is 5, print to console 'Computer wins the game' and set player's and computer's score to 0
}