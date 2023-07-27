export function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  
  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  return computerChoice;
};