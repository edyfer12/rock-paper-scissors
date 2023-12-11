//Include a function that the computer will randomly choose the value
function getComputerChoice(){
    //Inside the function, declare a new variable. 
    let computerMove;
    //To have random integer values between 1 and 3, round down and multiply random number by 3 and store into variable
    computerMove = Math.floor(Math.random() * 3) + 1;
    //If integer is 1, print 'Rock' and return string value, 'Rock'
    if(computerMove == 1) {
        console.log('Rock');
        return 'rock';
    }
    //If integer is 2, print 'Paper' and return string value, 'Paper'
    else if(computerMove == 2) {
        console.log('Paper');
        return 'paper';
    }
    //If integer is 3, print 'Scissors' and return string value, 'Scissors'
    else {
        console.log('Scissors');
        return 'scissors';
    }
}
//Add a variable that assigns the value of the computer's move
//let computerSelection = getComputerChoice();

/* Add a function that will enable the player to play the round of Rock, Paper, Scissors by passing both the
player and computer's input and returning the result for the player if they win, lose or tie */
function playRound(playerSelection, computerSelection){    
    //Initialize an existing variable for the player and enable the user to input the string value
    //playerSelection = prompt('Enter "Rock", "Paper" and "Scissors"');
    //Enable the player to type in case-insensitive value
    //playerSelection = playerSelection.toLowerCase();
    //If user types in 'Rock' and computer selects 'Scissors', return 'You win. Rock beats Scissors'
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You win. Rock beats Scissors';
    }
    //If user types in 'Scissors' and computer selects 'Paper', return 'You win. Scissors beats Paper'
    else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You win. Scissors beats Paper';
    }
    //If user types in 'Paper' and computer selects 'Rock', return 'You win. Paper beats Rock'
    else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return 'You win. Paper beats Rock';
    }
    /*If user types in 'Rock' and computer selects 'Rock', user selects 'Scissors' and player chooses 'Scissors'
    OR user selects 'Paper' and computer chooses 'Paper', return 'You tied!*/
    else if (playerSelection === computerSelection) {
        return 'You tied! Let\'s play another round';
    }
    //If the user types in 'Rock' and computer chooses 'Paper', return 'You lose. Paper beats Rock'
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'You lose. Paper beats Rock';
    }
    //If the user types in 'Scissors' and computer selects 'Rock', return 'You lose. Rock beats Scissors'
    else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'You lose. Rock beats Scissors';
    }
    //If the user types in 'Paper' and computer selects 'Scissors', return 'You lose. Scissors beats Paper'
    else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return 'You lose. Scissors beats Paper';
    }    
}
/* Include a function that a user plays five rounds of the game */
function game() {
    //Declare a variable that stores score for the player and initialize to 0
    //Declare a variable that stores score for the computer and initialize to 0 
    
    //At first round, instruct the player to enter the input and enable the value to be case in-sensitive
    //Enable the computer to return random string values, 'Scissors', 'Paper' or 'Rock'
    //For the first round, invoke the play round function and display the result on console
    //If the player wins the first round,
        //Increment the player score by 1
    //If the player loses the first round,
        //Increment the computer score by 1
    //If the computer ties with the player for the first round,
        //Increment both the value by 0

    //At second round, instruct the player to enter the input and enable the value to be case in-sensitive
    //Enable the computer to return random string values, 'Scissors', 'Paper' or 'Rock'
    //For the second round, invoke the play round function and display the result on console
    //If the player wins the second round,
        //Increment the player score by 1
    //If the player loses the second round,
        //Increment the computer score by 1
    //If the computer ties with the player for the second round,
        //Increment both the value by 0

    //At third round, instruct the player to enter the input and enable the value to be case in-sensitive
    //Enable the computer to return random string values, 'Scissors', 'Paper' or 'Rock'
    //For the third round, invoke the play round function and display the result on console
    //If the player wins the third round,
        //Increment the player score by 1
    //If the player loses the third round,
        //Increment the computer score by 1
    //If the computer ties with the player for the third round,
        //Increment both the value by 0

    //At fourth round, instruct the player to enter the input and enable the value to be case in-sensitive
    //Enable the computer to return random string values, 'Scissors', 'Paper' or 'Rock'
    //For the fourth round, invoke the play round function and display the result on console
    //If the player wins the fourth round,
        //Increment the player score by 1
    //If the player loses the fourth round,
        //Increment the computer score by 1
    //If the computer ties with the player for the fourth round,
        //Increment both the value by 0

    //At fifth round, instruct the player to enter the input and enable the value to be case in-sensitive
    //Enable the computer to return random string values, 'Scissors', 'Paper' or 'Rock'
    //For the fifth round, invoke the play round function and display the result on console
    //If the player wins the fifth round,
        //Increment the player score by 1
    //If the player loses the fifth round,
        //Increment the computer score by 1
    //If the computer ties with the player for the fifth round,
        //Increment both the value by 0
    
    //If the player scores 5 points, display 'Player Won the game!' on console
    //If the computer scores 5 points, display 'Computer Won the game!' on console
}
    