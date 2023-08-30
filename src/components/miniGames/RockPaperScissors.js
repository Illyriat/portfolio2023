import React, { useState } from "react";
import { generateComputerChoice } from "./logic/RPSLogic";
import "./miniGameStyle/RPS.css";

function RockPaperScissors() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const userClick = (newUserChoice) => {
    const newComputerChoice = generateComputerChoice();
    let newResult;
    if (newComputerChoice === newUserChoice) {
      newResult = "Its a Draw!";
    } else if (newComputerChoice === "rock" && newUserChoice === "paper") {
      newResult = "You WIN!";
    } else if (newComputerChoice === "rock" && newUserChoice === "scissors") {
      newResult = "You LOST!";
    } else if (newComputerChoice === "paper" && newUserChoice === "scissors") {
      newResult = "You WIN!";
    } else if (newComputerChoice === "paper" && newUserChoice === "rock") {
      newResult = "You LOST!";
    } else if (newComputerChoice === "scissors" && newUserChoice === "rock") {
      newResult = "You WIN!";
    } else if (newComputerChoice === "scissors" && newUserChoice === "paper") {
      newResult = "You LOST!";
    };

    setUserChoice(newUserChoice);
    setComputerChoice(newComputerChoice);
    setResult(newResult);
  };
  

  return (
    <div className="rps-box">
      <h2>Computer Choice:  {computerChoice ? computerChoice : "Undecided"}</h2>
      <h2>Your Choice: {userChoice ? userChoice : "Undecided"}</h2>
      <p></p>
      <button
        onClick={() => {
          userClick("rock");
        }}
      >
        Rock
      </button>

      <button
        onClick={() => {
          userClick("paper");
        }}
      >
        Paper
      </button>
      <button
        onClick={() => {
          userClick("scissors");
        }}
      >
        Scissors
      </button>
      <p></p>
      <h2>Result: {result ? result : "Select an option to play"}</h2>
    </div>
  );
}

export default RockPaperScissors;