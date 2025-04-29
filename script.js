// PROJECT STARTED ON TUES. 22TH AT 00.30AM //

// COMPUTER'S CHOICE

function getComputerChoice() {
  const computer = Math.random();
  if (computer < 0.33) {
    console.log(`- COMPUTER'S CHOICE : Rock`);
    return `Rock`;
  } else if (computer < 0.66) {
    console.log(`- COMPUTER'S CHOICE : Paper`);
    return `Paper`;
  } else {
    console.log(`- COMPUTER'S CHOICE : Scissors`);
    return `Scissors`;
  }
}

// HUMAN'S CHOICE

function getHumanChoice() {
  let userInput = prompt(`Rock, Paper or Scissors ?`);
  console.log(`- HUMAN'S CHOICE : `, userInput);
  return userInput;
}

/////// PLAY 5 ROUNDS

function playGame() {
  // PLAYERS SCORES

  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === computerChoice) {
      console.log(`It's a tie.`);
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

  // PLAY ROUND 1

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score is ${humanScore}.`);
  console.log(`Computer's score is ${computerScore}.`);

  // PLAY ROUND 2

  if (humanScore === 1 || computerScore === 1) {
    console.log(` -- Let's play Round 2!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- Let's play Round 1 again!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // // PLAY ROUND 3

  if (humanScore === 2 || computerScore === 2) {
    console.log(` -- Let's play Round 3!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- Let's play Round 2 again!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // PLAY ROUND 4

  if (humanScore === 3 || computerScore === 3) {
    console.log(` -- Let's play Round 4!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- Let's play Round 3 again!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // PLAY ROUND 5
  if (humanScore === 4 || computerScore === 4) {
    console.log(` -- Let's play Round 4!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- Let's play Round 4 again!`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // WINNER
  if (humanScore === 5) {
    console.log(` -- YOU'RE THE GREAT WINNER! -- `);
  } else if (computerScore === 5) {
    console.log(` -- YOU LOSE THIS GAME! -- `);
  } else {
    console.log(` -- Let's play Round 5 again!`);
  }
}

playGame();
