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
    paragraphPlayer.style.cssText = 'display: inline-block; font-size: 28px; margin-right: 40px; font-weight: bold;';
    //Append the paragraph element for player created to the result class div element
    result.appendChild(paragraphPlayer);
    
    //Create paragraph element for computer
    let paragraphComputer = document.createElement('p');
    //Add id attribute for the paragraph
    paragraphComputer.id = 'computer';
    //Stylize the paragraph
    paragraphComputer.style.cssText = 'display: inline-block; font-size: 28px; font-weight: bold;';
    //Append the paragraph element to the result class of div element
    result.appendChild(paragraphComputer);

    //Create a paragraph that annouces the winner of the game
    let paragraphAnnounce = document.createElement('p');
    //Set an id to announce for the paragraph element to avoid overlapping other paragraph elements
    paragraphAnnounce.id = 'announce';
    //Stylize the announce id for the paragraph
    paragraphAnnounce.style.cssText = 'text-align: center; font-size: 70px; font-weight: bold; padding-top: 30px;';
    //Append the paragraph element to the result class of div element to make an element appear
    result.appendChild(paragraphAnnounce);  

    //Create variable called playerSelection that enable the player to make a choice
    let playerSelection;

    //Display the scores for player and computer
    paragraphComputer.textContent = 'Computer Score: ' + computerScore;
    paragraphPlayer.textContent = 'Player Score: ' + playerScore;

    //Create a variable and store the reference of the restart button as a value
    let restart = document.querySelector('#restart');

    //Create a variable and store the reference of the audio button as a value
    let audio = document.querySelector('#audio');
    //Capture the reference of the audio element
    let bgMusicToggle = document.querySelector('#bgMusicToggle');

    /********************************************Algorithm for Muting and Unmuting Music************************************/
    //When the player clicks on the audio button that has a mute logo and page is loaded, 
    audio.addEventListener('click', () => {
        if(audio.innerHTML == '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">'){  
        //the image is changed to an unmute icon
            audio.innerHTML = "<img src='https://st" + "atic.vecteezy.com/system/resources/" + 
            "previews/027/381/436/non_2x/sound-speaker" + "-icon-megaphone-announcement-icon-louder" + 
            "-sound-symbol-mp3-button-musical-design-elements" + "-stereo-button-audio-symbol-speaker" + 
            "-pictogram-silhouette-on-white-background-vector.jpg' alt='unmute'>";
            //unmute if music is muted mode
            if(bgMusicToggle.muted){
                bgMusicToggle.muted = false;
            }
        }
        //When the player clicks on the audio button that has an unmute logo,
        else { 
            //image is changed to a mute icon
            audio.innerHTML = '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">';
            //music is muted
            bgMusicToggle.muted = true;
        }
    });
    /***********************************************************************************************************************/ 
    //If the player clicks the restart button,
    restart.addEventListener('click', () => {
        //Play the music from the beginning
        bgMusicToggle.load();
        //If the image button is not mute, play the music
        if(audio.innerHTML === '<img src="https://static.vecteezy.com/system/resources/previews/027/381/436/non_2x/sound-speaker-icon-megaphone-announcement-icon-louder-sound-symbol-mp3-button-musical-design-elements-stereo-button-audio-symbol-speaker-pictogram-silhouette-on-white-background-vector.jpg" alt="unmute">'){
            bgMusicToggle.play();
        }

        //Set the player score to 0
        playerScore = 0;
        //Set the computer score t0 0
        computerScore = 0;
        //Display the player score
        paragraphPlayer.textContent = 'Player Score: ' + playerScore;
        //Display the computer score
        paragraphComputer.textContent = 'Computer Score: ' + computerScore;
        //Display the announcement as empty string
        paragraphAnnounce.textContent = '';
    });

    //If the player clicks the Rock button,
    rock.addEventListener('click', () => {
        //Enable the music to be repeateds
        bgMusicToggle.loop = true;
        //Adjust the volume
        bgMusicToggle.volume = 1;
        //Play the music
        bgMusicToggle.play();
       
        //Play the music in silent mode if mute button is on
        if(audio.innerHTML === '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector'
        + '-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=c' + 
        'zrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">'){
            bgMusicToggle.muted = true;
        }
        
        //Display the announcement message as empty as the game is reset or is a new game
        paragraphAnnounce.textContent = ''; 
        //Store the text value of Rock button into playerSelection variable
        playerSelection = rock.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();

        //Reset and display the scores to 0 if player score or computer score is equal to 5 and end the game
        if(playerScore === 5 || computerScore === 5){
            playerScore = 0;
            computerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
            return false;
        }       
        //If the player wins the round, add player score by 1, display the added score for player and announcement
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
            paragraphAnnounce.textContent = 'You won this round!';
        }
        //If the player loses the round, add computer score by 1, display the added score for computer and announcement
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphComputer.textContent = 'Computer Score: ' + ++computerScore;
            paragraphAnnounce.textContent = 'You lost this round!';
        }
        //If the player ties the round, just display the announcement and do not increment the scores 
        else {
            paragraphAnnounce.textContent = 'You tied this round!';
        }

        //If the player or computer score 5 points, end the game with announcement of winner on paragraph
        if(playerScore === 5 || computerScore === 5){          
            //Announce the winner. If the player wins, display this message
            if(playerScore === 5){
                paragraphAnnounce.textContent = 'Player Wins the Game!';
            }
            //If the computer wins, display this message
            else if(computerScore === 5) {
                paragraphAnnounce.textContent = 'Computer Wins the Game!';
            }
            //If the game is won or lost, stop the music
            bgMusicToggle.load();
            //Change the sound icon to mute button
            audio.innerHTML = '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">';
        }
    });

    //If the player clicks the Paper button, 
    paper.addEventListener('click', () =>{
        //Enable the music to be repeated
        bgMusicToggle.loop = true;
        //Play the music
        bgMusicToggle.play();
        //Adjust the volume
        bgMusicToggle.volume = 1;
        //Play the music in silent mode if mute button is on
        if(audio.innerHTML === '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector'
        + '-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=c' + 
        'zrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">'){
            bgMusicToggle.muted = true;
        }
        //Display the announcement message as empty as the game is reset or is a new game
        paragraphAnnounce.textContent = ''; 
        //Store the text value of Paper button into the playerSelection variable
        playerSelection = paper.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();
        //Reset and display the scores to 0 if player score or computer score is equal to 5 and end the game
        if(playerScore === 5 || computerScore === 5){
            playerScore = 0;
            computerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
            return false;
        }       
        //If the player wins the round, add player score by 1, display the added score for player and announcement
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
            paragraphAnnounce.textContent = 'You won this round!';
        }
        //If the player loses the round, add computer score by 1, display the added score for computer and announcement
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphComputer.textContent = 'Computer Score: ' +  ++computerScore;
            paragraphAnnounce.textContent = 'You lost this round!';
        }
        //If the player ties the round, just display the announcement and do not increment the scores
        else {
            paragraphAnnounce.textContent = 'You tied this round!';
        }

        //If the player or computer score 5 points, end the game and reset the scores displayed on paragraphs
        if(playerScore === 5 || computerScore === 5){
            //Announce the winner. If the player wins, display this message
            if(playerScore === 5){
                paragraphAnnounce.textContent = 'Player Wins the Game!';
            }
            //If the computer wins, display this message
            else if(computerScore === 5) {
                paragraphAnnounce.textContent = 'Computer Wins the Game!';
            }
            //If the game is won or lost, stop the music
            bgMusicToggle.load();
            //Change the sound icon to mute button
            audio.innerHTML = '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">';
        }
    });

    //If the player clicks the Scissors button, 
    scissors.addEventListener('click', () => {
        //Enable the music to be repeated
        bgMusicToggle.loop = true;
        //Play the music
        bgMusicToggle.play();
        //Adjust the volume
        bgMusicToggle.volume = 1;
        //Play the music in silent mode if mute button is on
        if(audio.innerHTML === '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector'
        + '-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=c' + 
        'zrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">'){
            bgMusicToggle.muted = true;
        }
        //Display the announcement message as empty as the game is reset or is a new game
        paragraphAnnounce.textContent = ''; 
        //Store the text value of Scissors button into the playerSelection variable
        playerSelection = paper.textContent.toLowerCase();
        //Create variable called computerSelection that enable the computer to make a choice
        let computerSelection = getComputerChoice();
        //Reset and display the scores to 0 if player score or computer score is equal to 5 and end the game
        if(playerScore === 5 || computerScore === 5){
            playerScore = 0;
            computerScore = 0;
            paragraphComputer.textContent = 'Computer Score: ' + computerScore;
            paragraphPlayer.textContent = 'Player Score: ' + playerScore;
            return false;
        }      
        //If the player wins the round, add player score by 1, display the added score for player and announcement
        if(playRound(playerSelection,computerSelection) === 'You Win!'){
            paragraphPlayer.textContent = 'Player Score: ' + ++playerScore;
            paragraphAnnounce.textContent = 'You won this round!';
        }
        //If the player loses the round, add computer score by 1, display the added score for computer and announcement
        else if(playRound(playerSelection, computerSelection) === 'You lose!'){
            paragraphComputer.textContent = 'Computer Score: ' + ++computerScore;
            paragraphAnnounce.textContent = 'You lost this round!';
        }
        //If the player ties the round, display the announcement and do not increment the scores
        else {
            paragraphAnnounce.textContent = 'You tied this round!';
        }

        //If the player or computer score 5 points, end the game and reset the scores displayed on paragraphs
        if(playerScore === 5 || computerScore === 5){
            //Announce the winner. If the player wins, display this message
            if(playerScore === 5){
                paragraphAnnounce.textContent = 'Player Wins the Game!';
            }
            //If the computer wins, display this message
            else if(computerScore === 5) {
                paragraphAnnounce.textContent = 'Computer Wins the Game!';
            }
            //If the game is won or lost, stop the music
            bgMusicToggle.load();
            //Change the sound icon to mute button
            audio.innerHTML = '<img src="https://media.istockphoto.com/id/1305893663/vector/silent-sound-off-icon-vector-for-your-web-design-logo-ui-illustration.jpg?s=612x612&amp;w=0&amp;k=20&amp;c=czrINWt2weKC3fLHU3KqI2eZBFdwhOuuCZxS5JNGpSU=">';
        }
    });
}

//Declare score variables for player and computer and set both to 0
let playerScore = 0;
let computerScore = 0;

//Invoke the function that enable the player to play the game
startGame();