const winArray = [[0, 2, 1],
[1, 0, 2],
[2, 1, 0]];

let playerScore = 0;
let compScore = 0;
let playerChoice;
let clicknum = 0;
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("YOU CLICKED " + clicknum);
        clicknum++;
        playerChoice = button.id;
        playGame();
    })
});
const pscore = document.querySelector("#p-score");
pscore.textContent = `Player Score : ${playerScore}`;
const cscore = document.querySelector("#c-score");
cscore.textContent = `Computer Score : ${compScore}`;
function getComputerChoice() {
    return Math.floor(Math.random() * 2);
}

function playRound(playerChoice, compChoice) {
    return winArray[playerChoice][compChoice];
}
function playGame() {
    let compChoice = getComputerChoice();
    let result = playRound(playerChoice, compChoice);
    if (result == 1) {
        console.log("You Win");
        playerScore++;
    } else if (result == 2) {
        console.log("You lose");
        compScore++;
    } else if (result == 0) {
        console.log("Tie");
    }
    if (playerScore == 5) {
        console.log("Congrats you won");
        playerScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        console.log("Sorry you lose");
        playerScore = 0;
        compScore = 0;
    }
    console.log("Player Score : " + playerScore);
    console.log("Comp Score " + compScore);
}
