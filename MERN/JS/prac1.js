function getHumanChoice() {
    return prompt("Enter your choice: ").toLowerCase();
}

function choose(number) {
    return number<1?"rock":number<2?"paper":"scissor";
}

function getComputerChoice() {
    return choose(Math.random()*3);
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        return ("It's a draw!");
      } else if ((humanSelection === "rock") && (computerSelection === "scissors")) {
        return ("You win! Rock beats scissors");
      } else if (humanSelection === "rock" && computerSelection === "paper") {
        return ("You lose! Paper beats rock");
      } else if (humanSelection === "paper" && computerSelection === "rock") {
        return ("You win! Paper beats rock");
      } else if (humanSelection === "paper" && computerSelection === "scissors") {
        return ("You lose! Scissors beat paper");
      } else if (humanSelection === "scissors" && computerSelection === "paper") {
        return ("You win! Scissors beat paper");
      } else if (humanSelection === "scissors" && computerSelection === "rock") {
        return ("You lose!Rock beats scissors");
      }
}

function playGame() {
    for(i=0; i<5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}

playGame();
