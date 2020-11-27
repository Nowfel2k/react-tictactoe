import React from "react";
import Square from "./Square";
import "../Style.css";

const Board = ({ squares, onClick, winner }) => (
  <div className="board">
    {squares.map((square, i) =>
      winner && (i === winner[0] || i === winner[1] || i === winner[2]) ? (
        <Square
          key={i}
          value={square}
          onClick={() => onClick(i)}
          winnerSquare
        />
      ) : (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      )
    )}
  </div>
);

export default Board;
