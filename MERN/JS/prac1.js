let humanScore = 0;
let computerScore = 0;

function choose(number) {
    return number < 1 ? "rock" : number < 2 ? "paper" : "scissors";
}

function getComputerChoice() {
    return choose(Math.random() * 3);
}

function playRound(humanSelection) {
    const computerSelection = getComputerChoice();
    let result = "";
    
    if (humanSelection === computerSelection) {
        result = "It's a draw!";
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        result = `You win! ${humanSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        result = `You lose! ${computerSelection} beats ${humanSelection}`;
    }
    
    updateScore(result);
}

function updateScore(result) {
    const output = document.querySelector(".output");
    output.textContent = `${result}\nYour Score: ${humanScore} - Computer Score: ${computerScore}`;
    
    if (humanScore === 5) {
        output.textContent += "\nCongratulations! You won the game!";
        disableButtons();
    } else if (computerScore === 5) {
        output.textContent += "\nComputer wins the game! Try again.";
        disableButtons();
    }
}

function disableButtons() {
    document.querySelectorAll("button").forEach(button => button.disabled = true);
}

document.getElementById("rock").addEventListener("click", () => playRound("rock"));
document.getElementById("paper").addEventListener("click", () => playRound("paper"));
document.getElementById("scissor").addEventListener("click", () => playRound("scissors"));
