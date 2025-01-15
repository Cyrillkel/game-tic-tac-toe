import { GameSymbol } from "./game-symbol";
import clsx from "clsx";

export function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button
      className={clsx(
        "border border-gray-600  m-0 flex items-center justify-center",
        isWinner && "bg-red-200"
      )}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
}