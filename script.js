// PROJECT STARTED ON TUES. 22TH AT 00.30AM //

// COMPUTER'S CHOICE

function getComputerChoice() {
  const computer = Math.random();
  if (computer < 0.33) {
    console.log(`COMPUTER'S CHOICE : Rock`);
  } else if (computer < 0.66) {
    console.log(`COMPUTER'S CHOICE : Paper`);
  } else {
    console.log(`COMPUTER'S CHOICE : Scissors`);
  }
  return computer;
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

console.log(humanScore);
console.log(computerScore);

// PLAY A SINGLE ROUND

// function playRound(humanChoice, computerChoice) {
//   humanChoice = humanChoice.toLowerCase();
//   if (
//     (humanChoice === `Rock` && computerChoice === `Scissors`) ||
//     (humanChoice === `Paper` && computerChoice === `Rock`) ||
//     (humanChoice === `Scissors` && computerChoice === `Paper`)
//   ) {
//     humanScore++;
//     roundWinner = `You won!`;
//   } else if (
//     (humanChoice === `Rock` && computerChoice === `Paper`) ||
//     (humanChoice === `Paper` && computerChoice === `Scissors`) ||
//     (humanChoice === `Scissors` && computerChoice === `Rock`)
//   ) {
//     computerScore++;
//     roundWinner = `You lose`;
//   } else {
//     roundWinner = `Tie! Play again!`;
//   }
// }

// (`Rock`, `Scissors`) || (`Paper`, `Rock`) || (`Scissors`, `Paper`)
function playRound(humanChoice, computerChoice) {
  if ((humanChoice = computerChoice)) {
    console.log(`It's a tie. Let's play again!`);
  } else if (
    (`Rock`, `Paper`) ||
    (`Paper`, `Scissors`) ||
    (`Scissors`, `Rock`)
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
