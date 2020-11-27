import React from "react";
import "../Style.css";

const Square = ({ value, onClick, winnerSquare }) => (
  <button
    className={`square ${winnerSquare && "winnerSquare"}`}
    onClick={onClick}
  >
    <h1>{value}</h1>
  </button>
);

export default Square;
