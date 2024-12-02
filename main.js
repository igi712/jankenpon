function getComputerChoice () {
    let hand = Math.floor(Math.random() * 3);
    switch (hand) {
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
        default:
            break;
    }
}
function getHumanChoice() {
    let hand = prompt("What's your choice, rock, paper, or scissors?");
    if (hand.toLowerCase() === "rock" || hand.toLowerCase() === "paper" || hand.toLowerCase() === "scissors") {
        return hand.toLowerCase();
    }   else    {
        alert("Wrong answer!");
    }
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}`);
    } else if (humanChoice === "rock" && computerChoice === "paper" || humanChoice === "paper" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock" || humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "scissors" && computerChoice === "paper") {
        console.log(`You won! ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    }
    console.log(`Current standings:\nHuman: ${humanScore}\nComputer: ${computerScore}`);
  }
function playGame() {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}!`);
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}!`);
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}!`);
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}!`);
    playRound(humanSelection, computerSelection);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    console.log(`Computer chose ${computerSelection}!`);
    playRound(humanSelection, computerSelection);
}
playGame();
  