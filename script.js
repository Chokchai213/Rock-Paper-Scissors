const winArray = [[0, 2, 1],
[1, 0, 2],
[2, 1, 0]];
const cMap = new Map();
cMap.set(0, "Rock");
cMap.set(1, "Paper");
cMap.set(2, "Scissors");
let playerScore = 0;
let compScore = 0;
let playerChoice;
let clicknum = 0;
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        console.log("YOU CLICKED " + clicknum);
        clicknum++;
        switch (button.id) {
            case "rock0": playerChoice = 0;
                break;
            case "paper1": playerChoice = 1;
                break;
            case "scissor2": playerChoice = 2;
                break;
        }
        playGame();
    })
});
const pscore = document.querySelector("#p-score");
pscore.textContent = `Player Score : ${playerScore}`;
const cscore = document.querySelector("#c-score");
cscore.textContent = `Computer Score : ${compScore}`;
const descText = document.querySelector("#desc-text");
descText.textContent = `Choose your choice lel`;
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
        pscore.textContent = `Player Score : ${playerScore}`;
        cscore.textContent = `Computer Score : ${compScore}`;
        descText.textContent = `You Win You choose ${cMap.get(playerChoice)} Comp choose ${cMap.get(compChoice)}`;
    } else if (result == 2) {
        console.log("You lose");
        compScore++;
        pscore.textContent = `Player Score : ${playerScore}`;
        cscore.textContent = `Computer Score : ${compScore}`;
        descText.textContent = `You Lose You choose ${cMap.get(playerChoice)} Comp choose ${cMap.get(compChoice)}`;
    } else if (result == 0) {
        console.log("Tie");
        pscore.textContent = `Player Score : ${playerScore}`;
        cscore.textContent = `Computer Score : ${compScore}`;
        descText.textContent = `Its a Tie You choose ${cMap.get(playerChoice)} Comp choose ${cMap.get(compChoice)}`;
    }
    if (playerScore == 5) {
        console.log("Congrats you won");
        pscore.textContent = `Player Score : ${playerScore}`;
        cscore.textContent = `Computer Score : ${compScore}`;
        descText.textContent = `You Won lol congrats`;
        playerScore = 0;
        compScore = 0;
    } else if (compScore == 5) {
        console.log("Sorry you lose");
        pscore.textContent = `Player Score : ${playerScore}`;
        cscore.textContent = `Computer Score : ${compScore}`;
        descText.textContent = `You Lose sorry`;
        playerScore = 0;
        compScore = 0;
    }
    console.log("Player Score : " + playerScore);
    console.log("Comp Score " + compScore);
}
