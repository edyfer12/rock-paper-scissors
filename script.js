//Include a function that will return string randomly Rock, Paper or Scissors for computer
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