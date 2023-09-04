let compChoice = {value: ""};
let playerChoice;
let compChoiceInt = 0;
let playerChoiceInt = 0;
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let compScore = 0;

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#comp-score");
computer.textContent = `Computer Score: ${compScore}`;

const output = document.querySelector("#output");
output.textContent = "Probably the Person win!"

buttons.forEach((button) =>{button.addEventListener('click',()=> {
    playerChoice = button.id;
    if (playerChoice == "rock"){
        playerChoiceInt = 0;
    }
    else if (playerChoice == "paper"){
        playerChoiceInt = 1;
    }
    else if (playerChoice == "scissors"){
        playerChoiceInt = 2;
    }
    compChoiceInt = computerPlay(compChoice);
    playGame();
    })
})

function computerPlay(compChoice){
    let choiceNum = Math.floor(Math.random() * 3);
    if (choiceNum == 0){
        compChoice.value = "rock";
    }
    else if (choiceNum == 1){
        compChoice.value = "paper";
    }
    else if (choiceNum == 2){
        compChoice.value = "scissors"
    }
    return choiceNum;
}

function playRound(){
    let win_array = [[0, 2, 1],
                    [1, 0, 1],  
                    [0, 2, 1]];
    let result = win_array[playerChoiceInt][compChoiceInt];
    if (result == 0){
        output.textContent = `Its a tie! You chose ${playerChoice} and the computer chose ${compChoice.value}`;
    }
    else if (result == 1){
        output.textContent = `You won! You chose ${playerChoice} and the computer chose ${compChoice.value}`;
        playerScore++;
    }
    else if (result == 2){
        output.textContent = `You lost! You chose ${playerChoice} and the computer chose ${compChoice.value}`;
        compScore++;
}
}
function playGame(){
    output.textContent = "Choose paper, stone, or scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${compScore}`;
    if (playerScore == 5){
        output.textContent = "You win the game! congratulation";
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;
    }
    else if (compScore == 5){
        output.textContent = "You lost the game:/ find another thing to do"
        playerScore = 0;
        compScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${compScore}`;

    }
}