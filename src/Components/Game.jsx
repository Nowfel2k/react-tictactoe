import React, { useState } from "react";
import Board from "./Board";
import { checkWinner } from "../helpers";
import "../Style.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  let winner = checkWinner(board);
  const [winnerSquares, setWinnerSquares] = useState(null);

  const winnerConfirm = () => {
    if (winner) setWinnerSquares(winner[1]);
    winnerSquares && console.log(winnerSquares);
  };

  const handleClick = (i) => {
    const boardcpy = [...board];

    if ((winner && winner[0]) || boardcpy[i]) {
      winnerConfirm();
      return;
    }

    console.log(i + " is clicked\n");

    boardcpy[i] = xIsNext ? "X" : "O";

    setBoard(boardcpy);
    setXisNext(!xIsNext);
  };

  const restart = () => {
    setBoard(Array(9).fill(null));
    setWinnerSquares(null);
    setXisNext(true);
    winner = null;
  };

  return (
    <div className="game-container">
      <Board squares={board} onClick={handleClick} winner={winnerSquares} />
      <div className="game">
        <p>
          {winner
            ? "Winner is : " + winner[0]
            : "Next player turn : " + (xIsNext ? "X" : "O")}
        </p>
        <button className="button" onClick={() => restart()}>
          RESET
        </button>
      </div>
    </div>
  );
};

export default Game;
