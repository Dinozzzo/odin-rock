// COMPUTER'S CHOICE

function getComputerChoice() {
  const a = Math.random();
  if (a < 0.33) {
    console.log(`Rock`);
  } else if (a < 0.66) {
    console.log(`Paper`);
  } else {
    console.log(`Scissors`);
  }
}
getComputerChoice();
