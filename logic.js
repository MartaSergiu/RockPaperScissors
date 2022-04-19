const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice
let computerChoice
let result
let rock = "rock";
let papper = "paper";
let scissors = "scissors";

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    playRound()
}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * (3 - 1) + 1);
    if(randomNumber === 1) {
        computerChoice = "rock"
    } else if(randomNumber === 2){
        computerChoice = "paper"
    } else {
        computerChoice = "scissors"
    }
    computerChoiceDisplay.innerHTML = computerChoice
}



function playRound(){
    if(computerChoice === rock && userChoice === paper){
        result = "You win. Rock loses to paper."
    } else if (computerChoice === rock && userChoice === scissors){
        result = "You lose. Rock beats scissors."
    } else if (computerChoice === rock && userChoice === rock){
        result = "Draw."
    } else if (computerChoice === paper && userChoice === rock){
        result = "You lose. Paper beats rock."
    } else if (computerChoice === paper && userChoice === paper){
        result = "Draw."
    } else if (computerChoice === paper && userChoice === scissors){
        result = "You win. Paper loses to scissors."
    } else if (computerChoice === scissors && userChoice === rock){
        result = "You win. Rock loses to scissors."
    }  else if (computerChoice === scissors && userChoice === paper){
        result = "You lose. Rock beats to paper."
    } else if (computerChoice === scissors && userChoice === scissors){
        result = "Draw."
    }
    resultDisplay.innerHTML = result
}

