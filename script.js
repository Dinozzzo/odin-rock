// PROJECT STARTED ON TUES. 22TH AT 00.30AM //

// COMPUTER'S CHOICE

function getComputerChoice() {
  const computer = Math.random();
  if (computer < 0.33) {
    console.log(`COMPUTER'S CHOICE : Rock`);
    return `Rock`;
  } else if (computer < 0.66) {
    console.log(`COMPUTER'S CHOICE : Paper`);
    return `Paper`;
  } else {
    console.log(`COMPUTER'S CHOICE : Scissors`);
    return `Scissors`;
  }
}

// HUMAN'S CHOICE

function getHumanChoice() {
  let userInput = prompt(`Rock, Paper or Scissors ?`);
  console.log(`HUMAN'S CHOICE : `, userInput);
  return userInput;
}

// PLAYERS SCORES

let humanScore = 0;
let computerScore = 0;

// PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log(`It's a tie. Let's play again!`);
  } else if (
    (humanChoice === `rock` && computerChoice === `paper`) ||
    (humanChoice === `paper` && computerChoice === `scissors`) ||
    (humanChoice === `scissors` && computerChoice === `rock`)
  ) {
    computerScore++;
    console.log(`You lose this round!`);
  } else {
    console.log(`You win this round!`);
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`Your score is ${humanScore}.`);
console.log(`Computer's score is ${computerScore}.`);

// PLAY 5 ROUNDS

function playGame() {}
