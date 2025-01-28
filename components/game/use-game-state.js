import { useState } from "react";
import { GAME_SYMBOL, MOVE_ORDER } from "./constants";

function GetNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function useGameState() {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrentMove] = useState(GAME_SYMBOL.ZERO);
  const nextMove = GetNextMove(currentMove);
  console.log(currentMove + " current move");

  console.log(nextMove + " next move");

  const handleCellClick = (index) => {
    // Если клетка уже занята, ничего не делаем
    if (cells[index]) {
      return;
    }
    const newCells = [...cells];
    newCells[index] = currentMove;
    setCells(newCells);
    setCurrentMove((lastCurrentMove) => GetNextMove(lastCurrentMove));
  };
  return { cells, handleCellClick, currentMove, nextMove };
}
