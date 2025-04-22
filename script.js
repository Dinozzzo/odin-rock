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
getComputerChoice();

// HUMAN'S CHOICE

function getHumanChoice() {
  let userInput = prompt(`Rock, Paper or Scissors ?`);
  console.log(`HUMAN'S CHOICE : `, userInput);
}

getHumanChoice();
