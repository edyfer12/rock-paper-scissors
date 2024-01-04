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

/* Declare the function that ends the game for both player and computer passing in player score and computer score*/
function endGame(playerScore, computerScore){
    //If player score is 5, notify the winner with paragraph, 'Player Wins the Game!'
    if(playerScore === 5){
        paragraphAnnounce.textContent = 'Player Wins the Game!';
    }
    //If computer score is 5, notify the winner with paragraph, 'Computer Wins the Game!'
    else if(computerScore === 5){
        paragraphAnnounce.textContent = 'Computer Wins the Game!';
    }
}


/* Declare a function that enables both player and the computer to play the full game up to 5 rounds*/
function startGame(){
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
    let paragraphComputer = document.createElement('p');
    //Add id attribute for the paragraph
    paragraphComputer.id = 'computer';
    //Stylize the paragraph
    paragraphComputer.style.cssText = 'display:inline-block; margin-right:50px;';
    //Append the paragraph element to the result class of div element
    result.appendChild(paragraphComputer);

    //Create a paragraph that annouces the winner of the game
    let paragraphAnnounce = document.createElement('p');
    //Set an id to announce for the paragraph element to avoid overlapping other paragraph elements
    paragraphAnnounce.id = 'announce';
    //Append the paragraph element to the result class of div element to make an element appear
    result.appendChild(paragraphAnnounce);

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
            paragraphComputer.textContent = 'Computer Score: ' + ++computerScore;
        }

        //If the player or computer score 5 points, end the game and reset the scores displayed on paragraphs
        if(playerScore === 5 || computerScore === 5){
            endGame(playerScore,computerScore);
            playerScore = 0;
            computerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
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
            paragraphComputer.textContent = 'Computer Score: ' +  ++computerScore;
        }

        //If the player or computer score 5 points, end the game and reset the scores displayed on paragraphs
        if(playerScore === 5 || computerScore === 5){
            endGame(playerScore,computerScore);
            playerScore = 0;
            computerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
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
            paragraphComputer.textContent = 'Computer Score: ' + ++computerScore;
        }

        //If the player or computer score 5 points, end the game and reset the scores displayed on paragraphs
        if(playerScore === 5 || computerScore === 5){
            endGame(playerScore, computerScore);
            computerScore = 0;
            playerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
        }
    });
}

//Declare score variables for player and computer and set both to 0
let playerScore = 0;
let computerScore = 0;

//Invoke the function that enable the player to play the game
startGame();