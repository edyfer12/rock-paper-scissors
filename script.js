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

/* Declare a function that enables both player and the computer to play the full game up to 5 rounds*/
function game(){
    //Create a variable for the player and assign the input as a value, 'rock, paper, scissors' case insensitive
    let playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    /*Create a variable for the computer and assign the getComputerChoice function call to return random strings,
    'Rock', 'Paper' and 'Scissors'*/
    let computerSelection = getComputerChoice();
    //Create a variable for the player score and set to 0
    let playerScore = 0;
    //Create a variable for the computer score and set to 0
    let computerScore = 0;
    //Invoke the play round function and display on console
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins the first round, increment player score by 1
    if(playRound(playerSelection,computerSelection) === 'You Win!'){
        playerScore++;
    }
    //If the player loses the first round, increment computer score by 1
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        computerScore++;
    }
    //Assign the input as a value, 'rock, paper, scissors' case insensitive
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Assign the getComputerChoice function call to return random strings,'Rock', 'Paper' and 'Scissors'
    computerSelection = getComputerChoice();
    //Invoke the play round function and display on console
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins the second round, increment player score by 1
    if(playRound(playerSelection,computerSelection) === 'You Win!'){
        playerScore++;
    }
    //If the player loses the second round, increment computer score by 1
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        computerScore++;
    }
    //Assign the input as a value, 'rock, paper, scissors' case insensitive
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Assign the getComputerChoice function call to return random strings,'Rock', 'Paper' and 'Scissors'
    computerSelection = getComputerChoice();
    //Invoke the play round function and display on console
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins the third round, increment player score by 1
    if(playRound(playerSelection,computerSelection) === 'You Win!'){
        playerScore++;
    }
    //If the player loses the third round, increment computer score by 1
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        computerScore++;
    }
    //Assign the input as a value, 'rock, paper, scissors' case insensitive
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Assign the getComputerChoice function call to return random strings,'Rock', 'Paper' and 'Scissors'
    computerSelection = getComputerChoice();
    //Invoke the play round function and display on console
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins the fourth round, increment player score by 1
    if(playRound(playerSelection,computerSelection) === 'You Win!'){
        playerScore++;
    }
    //If the player loses the fourth round, increment computer score by 1
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        computerScore++;
    }
    //Assign the input as a value, 'rock, paper, scissors' case insensitive
    playerSelection = prompt('Rock, Paper, or Scissors').toLowerCase();
    //Assign the getComputerChoice function call to return random strings,'Rock', 'Paper' and 'Scissors'
    computerSelection = getComputerChoice();
    //Invoke the play round function and display on console
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins the fifth round, increment player score by 1
    if(playRound(playerSelection,computerSelection) === 'You Win!'){
        playerScore++;
    }
    //If the player loses the fifth round, increment computer score by 1
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        computerScore++;
    }
    //If the player scores more than the computer, print to console, 'Player Won the Game!' and set both computer and player score to 0
    if(playerScore > computerScore){
        console.log(`Player Won the Game! (${playerScore} : ${computerScore})`);
        playerScore = 0;
        computerScore = 0;
    }
    //If the computer scores more than the player, print to console, 'Computer Won the Game!' and set both computer and player score to 0
    else if(computerScore > playerScore){
        console.log(`Computer Won the Game! (${computerScore} : ${playerScore})`);
        playerScore = 0;
        computerScore = 0;
    } 
    //If the player scores equally to the player, print to console, 'The game is tied!' and set both scores to 0
    else {
        console.log('The game is tied!');
        playerScore = 0;
        computerScore = 0;
    }
}