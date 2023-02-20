let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

const announcer = document.querySelector('.announcer');

let playerPoints = document.querySelector('#player-points');
let computerPoints = document.querySelector('#computer-points');



const buttons = document.querySelectorAll('button');






buttons.forEach(button =>  {
    button.addEventListener('click', () =>  {
      
        playerSelection = button.id
        getComputerSelection()
        playRound(playerSelection, computerSelection)
        if (playerScore === 5 || computerScore === 5) {
            endGame()
            playerScore = 0;
            computerScore = 0;
        }
       
        

    })
})




function getComputerSelection () {
     computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection === 0) {
        computerSelection = 'rock'
    } if (computerSelection === 1){
        computerSelection = 'paper'
    } if (computerSelection === 2) {
        computerSelection = 'scissors'
    }

    
    return computerSelection
}

function playRound (playerSelection, computerSelection) {
    
    
    if (playerSelection === computerSelection) {
        announcer.textContent = `Tie! ${playerSelection} and ${computerSelection} are the same!`
    }
    if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
        playerScore++
        announcer.textContent = `Player wins! ${playerSelection} beats ${computerSelection}!`
    }
    if (
        (computerSelection === 'rock' && playerSelection === 'scissors') ||
        (computerSelection === 'paper' && playerSelection === 'rock') ||
        (computerSelection == 'scissors' && playerSelection === 'paper')
    ) {
        computerScore++
        announcer.textContent = `Computer wins. ${computerSelection} beats ${playerSelection}.`
    }
    playerPoints.textContent = playerScore
    computerPoints.textContent = computerScore

}



function endGame () {
    if (playerScore === 5){
        announcer.textContent = 'Player wins the game! Click rock, paper or scissors to play again.'
    } if (computerScore === 5) {
        announcer.textContent = 'Computer wins the game. Click rock, paper or scissors to play again.'
    }
}