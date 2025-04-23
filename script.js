// PROJECT STARTED ON TUES. 22TH AT 00.30AM //

// COMPUTER'S CHOICE

function getComputerChoice() {
  const a = Math.random();
  if (a < 0.33) {
    console.log(`COMPUTER'S CHOICE : Rock`);
  } else if (a < 0.66) {
    console.log(`COMPUTER'S CHOICE : Paper`);
  } else {
    console.log(`COMPUTER'S CHOICE : Scissors`);
  }
}

// HUMAN'S CHOICE

function getHumanChoice() {
  let userInput = prompt(`Rock, Paper or Scissors ?`);
  console.log(`HUMAN'S CHOICE : `, userInput);
}

// PLAYERS SCORES

let humanScore = 0;
let computerScore = 0;
let roundWinner = `Winner : `;

console.log(humanScore);
console.log(computerScore);
console.log(roundWinner);

// PLAY A SINGLE ROUND

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === `Rock` && computerChoice === `Scissors`) ||
    (humanChoice === `Paper` && computerChoice === `Rock`) ||
    (humanChoice === `Scissors` && computerChoice === `Paper`)
  ) {
    humanScore++;
    roundWinner = `You won!`;
  } else if (
    (humanChoice === `Rock` && computerChoice === `Paper`) ||
    (humanChoice === `Paper` && computerChoice === `Scissors`) ||
    (humanChoice === `Scissors` && computerChoice === `Rock`)
  ) {
    computerScore++;
    roundWinner = `You lose`;
  } else {
    roundWinner = `Tie! Play again!`;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
