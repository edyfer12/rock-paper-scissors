//Include a function that the computer will randomly choose the value
function getComputerChoice(){
    //Inside the function, declare a new variable. 
    let computerMove;
    //To have random integer values between 1 and 3, round down and multiply random number by 3 and store into variable
    computerMove = Math.floor(Math.random() * 3) + 1;
    //If integer is 1, print 'Rock' 
    if(computerMove == 1) {
        console.log('Rock');
    }
    //If integer is 2, print 'Paper' 
    else if(computerMove == 2) {
        console.log('Paper');
    }
    //If integer is 3, print 'Scissors'
    else {
        console.log('Scissors');
    }
    //Return the variable inside the function
    return computerMove;
}
/* Add a function that will enable the player to play the round of Rock, Paper, Scissors by passing both the
player and computer's input and returning the result for the player if they win, lose or tie */
function playRound(playerSelection, computerSelection){
    //Initialize an existing variable for the player and enable the user to input the string value
    playerSelection = prompt('Enter "Rock", "Paper" and "Scissors"');
    //Enable the player to type in case-insensitive value
    //If user types in 'Rock' and computer selects 'Scissors', return 'You win. Rock beats Scissors'
    //If user types in 'Scissors' and computer selects 'Paper', return 'You win. Scissors beats Paper'
    //If user types in 'Paper' and computer selects 'Rock', return 'You win. Paper beats Rock'
    /*If user types in 'Rock' and computer selects 'Rock', user selects 'Scissors' and player chooses 'Scissors'
    OR user selects 'Paper' and computer chooses 'Paper', return 'You tied! let's replay another round' and 
    call the same function to instruct the player to play the round again*/
    //If the user types in 'Rock' and computer chooses 'Paper', return 'You lose. Paper beats Rock'
    //If the user types in 'Scissors' and computer selects 'Rock', return 'You lose. Rock beats Scissors'
    //If the user types in 'Paper' and computer selects 'Scissors', return 'You lose. Scissors beats Paper'
}