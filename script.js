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
    //Capture reference for the button named Rock
    let rock = document.querySelector('#rock');
    //Capture reference for the button named Paper
    let paper = document.querySelector('#paper');
    //Capture reference for the button named Scissors
    let scissors = document.querySelector('#scissors');
    //Capture reference for the result class of the div element
    let result = document.querySelector('.result');
    //Create a paragraph element for player
    let paragraphPlayer = document.createElement('p');
    //Add id attribute for the paragraphPlayer
    paragraphPlayer.id = 'player';
    //Stylize the paragraph that displays player score
    paragraphPlayer.style.cssText = 'display:inline-block; margin-top:10px;';
    //Append the paragraph element for player created to the result class div element
    result.appendChild(paragraphPlayer);
    //Create paragraph element for computer
    //Add id attribute for the paragraph
    //Stylize the paragraph
    //Append the paragraph element to the result class of div element
    //******************************ALGORITHMS TO PLAY THE GAME******************************************* */

    //Create variable called playerSelection that enable the player to make a choice
    let playerSelection;

    //If the player clicks the Rock button,
    rock.addEventListener('click', () => {
        //Store the text value of Rock button into playerSelection variable
        playerSelection = rock.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();
        //Play the round after both player and computer selects the input
        playRound(playerSelection,computerSelection);
       
        //If the player wins the round, add player score by 1 and display the added score for player
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
        }
        //If the player loses the round, add computer score by 1 and display the added score for computer
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphPlayer.textContent = ++computerScore;
        }

    });

    //If the player clicks the Paper button, 
    paper.addEventListener('click', () =>{
        //Store the text value of Paper button into the playerSelection variable
        playerSelection = paper.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();
        //Play the round after both player and computer selects the input
        playRound(playerSelection,computerSelection);
        //If the player wins the round, add player score by 1 and display the added score for player
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
        }
        //If the player loses the round, add computer score by 1 and display the added score for computer
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphPlayer.textContent = ++computerScore;
        }

    });

    //If the player clicks the Scissors button, 
    scissors.addEventListener('click', () => {
        //Store the text value of Scissors button into the playerSelection variable
        playerSelection = paper.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();
        //Play the round after both player and computer selects the input
        playRound(playerSelection,computerSelection);

        //If the player wins the round, add player score by 1 and display the added score for player
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
        }
        //If the player loses the round, add computer score by 1 and display the added score for computer
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphPlayer.textContent = ++computerScore;
        }


    });

    

    //If the player reaches 5 points and player score is higher than computer, display 'Player Wins!'

    //If the computer reaches 5 points and computer score is higher than player, display 'Computer Wins!'


    //*************************************************************************************************** */

    /*//When the user clicks on the button named Rock, invoke the play round function
    rock.addEventListener('click', playRound);
    //When the user clicks on the button named Paper, invoke the play round function
    paper.addEventListener('click', playRound);
    //When the user clicks on the button named Scissors, invoke the play round function
    scissors.addEventListener('click', playRound);

    //Return the reference to the div element with results class
    let result = document.querySelector('.result'); 
    //Create a paragraph element for id being player using JS and store into variable created
    let paraPlayer = document.createElement('p');
    paraPlayer.setAttribute('id', 'playerScore');
    //Create a paragraph element for id being computer using JS and store into variable created
    let paraComputer = document.createElement('p');
    paraComputer.setAttribute('id', 'computerScore');

    //If the player wins, 
    if(playRound(playerSelection, computerSelection) === 'You Win!'){
        //Increment the player score by 1 in prefix form
        ++playerScore;
        //Set the text content for paragraph where id is player to player score incremented by 1
        paraPlayer.textContent = playerScore;
        //Append the paragraph element where id being player to the results div element
        result.appendChild(paraPlayer);
    }
    //If the computer wins,
    else if(playRound(playerSelection, computerSelection) === 'You lose!'){
        //Increment the computer score by 1 in prefix form
        ++computerScore;
        //Set the text content for paragraph where id is computer to computer score incremented by 1
        paraComputer.textContent = computerScore;
        //Append the paragraph element where id being computer to the results div element
        result.appendChild(paraComputer);
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
    }*/
}

//Declare score variables for player and computer and set both to 0
let playerScore = 0;
let computerScore = 0;

//Invoke the function that enable the player to play the game
game();