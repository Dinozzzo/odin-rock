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
    } else if (
      (humanChoice === `rock` && computerChoice === `paper`) ||
      (humanChoice === `paper` && computerChoice === `scissors`) ||
      (humanChoice === `scissors` && computerChoice === `rock`)
    ) {
      computerScore++;
    } else {
      humanScore++;
    }
  }

  // PLAY ROUND 1

  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(`Your score is ${humanScore}.`);
  console.log(`Computer's score is ${computerScore}.`);

  // GO TO ROUND 2

  if (humanScore < computerScore) {
    console.log(` -- You're losing! Let's play Round 2! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else if (humanScore > computerScore) {
    console.log(` -- You're winning! Let's play Round 2! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- It's a tie! Let's play Round 2! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // GO TO ROUND 3
  if (humanScore < computerScore) {
    console.log(` -- You're losing! Let's play  Round 3! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else if (humanScore > computerScore) {
    console.log(` -- You're winning! Let's play  Round 3! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- It's a tie! Let's play Round 3! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // GO TO ROUND 4
  if (humanScore < computerScore) {
    console.log(` -- You're losing! Let's play Round 4! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else if (humanScore > computerScore) {
    console.log(` -- You're winning! Let's play Round 4! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- It's a tie! Let's play Round 4! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // GO TO ROUND 5
  if (humanScore < computerScore) {
    console.log(` -- You're losing! Let's play Round 5! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else if (humanScore > computerScore) {
    console.log(` -- You're winning! Let's play Round 5! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  } else {
    console.log(` -- It's a tie! Let's play Round 5! -- `);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Your score is ${humanScore}.`);
    console.log(`Computer's score is ${computerScore}.`);
  }

  // WINNER
  if (humanScore > computerScore) {
    console.log(` -- YOU'RE THE GREAT WINNER! -- `);
  } else if (humanScore < computerScore) {
    console.log(` -- YOU LOSE THIS GAME! -- `);
  } else {
    console.log(` -- THE GAME IS A TIE!`);
  }
}
playGame();
