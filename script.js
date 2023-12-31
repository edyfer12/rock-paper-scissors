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
    return 'You Win!'*/
    if(playerSelection === 'rock' && computerSelection === 'Scissors' || 
    playerSelection === 'paper' && computerSelection === 'Rock' ||
    playerSelection === 'scissors' && computerSelection === 'Paper'){
        return 'You Win!';
    }
    /*If the playerSelection is equal to 'rock' and computerSelection is equal to 'Paper', 
    playerSelection is equal to 'paper' to computerSelection is equal to 'Scissors' OR 
    playerSelection is equal to 'scissors' and computerSelection is equal to 'Rock',
    return 'You Lose!'*/
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
    //Create a paragraph element for id being player using JS and store into variable created
    //Create a paragraph element for id being computer using JS and store into variable created
    //Invoke the play round function and display on the paragraph on the results div element
    console.log(playRound(playerSelection, computerSelection));
    //If the player wins, 
        //Increment the player score by 1 in prefix form
        //Set the text content for paragraph where id is player to player score incremented by 1
        //Append the paragraph element where id being player to the results div element
    //If the computer wins,
        //Increment the computer score by 1 in prefix form
        //Set the text content for paragraph where id is computer to computer score incremented by 1
        //Append the paragraph element where id being computer to the results div element
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

//Capture reference for the button named Rock
let rock = document.querySelector('#rock');
//Capture reference for the button named Paper
let paper = document.querySelector('#paper');
//Capture reference for the button named Scissors
let scissors = document.querySelector('#scissors');

//When the user clicks on the button named Rock, invoke the play round function
rock.addEventListener('click', playRound(rock.textContent.toLowerCase(), getComputerChoice));
//When the user clicks on the button named Paper, invoke the play round function
paper.addEventListener('click', playRound(paper.textContent.toLowerCase(), getComputerChoice));
//When the user clicks on the button named Scissors, invoke the play round function
scissors.addEventListener('click', playRound(scissors.textContent.toLowerCase(), getComputerChoice));