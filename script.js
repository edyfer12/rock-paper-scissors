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

/* Declare a function that enables both the computer and player to play one round of the game 
with two parameters passed, playerSelection and computerSelection */
function playRound(playerSelection, computerSelection){
    /*If the playerSelection is equal to 'Rock' and computerSelection is equal to 'Scissors', 
    playerSelection is equal to 'Paper' to computerSelection is equal to 'Rock' OR 
    playerSelection is equal to 'Scissors' and computerSelection is equal to 'Paper', 
    return 'You Win!'*/
    /*If the playerSelection is equal to 'Rock' and computerSelection is equal to 'Paper', 
    playerSelection is equal to 'Paper' to computerSelection is equal to 'Scissors' OR 
    playerSelection is equal to 'Scissors' and computerSelection is equal to 'Rock',
    return 'You Lose!'*/
    //If the playerSelection has the same string as the computerSelection, return 'Tie!'
}