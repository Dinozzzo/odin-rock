function getComputerChoice() {
  const choices = [`rock`, `paper`, `scissors`];
  const random = Math.floor(Math.random() * 3);
  return choices[random];
}
let humanScore = 0;
let computerScore = 0;

const computerChoice = getComputerChoice();

const display = document.querySelector(".display");
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");
const score = document.querySelector(".score");
const buttons = document.querySelector("button");

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    const p = document.createElement("p");
    p.innerText = `You tied! You both picked ${humanChoice}`;
    display.appendChild(p);
  } else if (humanChoice === `rock` && computerChoice === `paper`) {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Paper beats Rock.`;
    display.appendChild(p);
  } else if (humanChoice === `rock` && computerChoice === `scissors`) {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Rock beats Scissors.`;
    display.appendChild(p);
  } else if (humanChoice === `paper` && computerChoice === `scissors`) {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Scissors beats Paper.`;
    display.appendChild(p);
  } else if (humanChoice === `paper` && computerChoice === `rock`) {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Paper beats Rock.`;
    display.appendChild(p);
  } else if (humanChoice === `scissors` && computerChoice === `rock`) {
    computerScore++;
    const p = document.createElement("p");
    p.innerText = `You lost! Rock beats Scissors.`;
    display.appendChild(p);
  } else if (humanChoice === `scissors` && computerChoice === `paper`) {
    humanScore++;
    const p = document.createElement("p");
    p.innerText = `You won! Scissors beats Paper!`;
    display.appendChild(p);
  }
}

const winner = (humanScore, computerScore) => {
  if (humanScore >= 5) {
    const h2 = document.createElement("h2");
    h2.innerText = `Congratulations! You won the game!`;
    display.appendChild(h2);
    buttons.forEach((button) => {
      button.disabled = true;
    });
  } else if (computerScore >= 5) {
    const h2 = document.createElement("h2");
    h2.innerText = `You lost the game! You will do better next time!`;
    display.appendChild(h2);
    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
};

rockBtn.addEventListener("click", () => {
  const humanChoice = `rock`;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  score.textContent = `Your score : ${humanScore}. Computer's score : ${computerScore}.`;
  winner(humanScore, computerScore);
});

paperBtn.addEventListener("click", () => {
  const humanChoice = `paper`;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  score.textContent = `Your score : ${humanScore}. Computer's score : ${computerScore}.`;
  winner(humanScore, computerScore);
});

scissorsBtn.addEventListener("click", () => {
  const humanChoice = `scissors`;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
  score.textContent = `Your score : ${humanScore}. Computer's score : ${computerScore}.`;
  winner(humanScore, computerScore);
});
