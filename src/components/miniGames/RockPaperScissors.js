import React from "react";
import useScript from "../reusables/useScript";

function RockPaperScissors() {
    useScript('/logic/RPSLogic.js');

    return(
        <>
            <h2>Computer Choice: <span id="computer-choice"></span></h2>
            <h2>Your Choice: <span id="user-choice"></span></h2>
            <p></p>
            <button id="rock">Rock</button>
            <button id="paper">Paper</button>
            <button id="scissors">Scissors</button>
            <p></p>
            <h2>Result: <span id="result"></span></h2>

            <script src="./logic/RPSlogic.js"></script>
        </>
    );
};

export default RockPaperScissors;