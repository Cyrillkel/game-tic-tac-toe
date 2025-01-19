import clsx from "clsx";
import { ZeroIcon } from "./icons/zero-icon";
import { CrossIcon } from "./icons/cross-icon";
import { UiButton } from "../uikit/ui-button";
import { useState } from "react";
import { GAME_SYMBOL } from "./constants";
import { GameSymbol } from "./game-symbol";

const MOVE_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRIANGLE,
  GAME_SYMBOL.SQUARE,
];

function GetNextMove(currentMove) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}

export function GameField({ className }) {
  const [cells, setCells] = useState(() => new Array(19 * 19).fill(null));
  const [currentMove, setCurrenMove] = useState(GAME_SYMBOL.CROSS);
  const nextMove = GetNextMove(currentMove);
  const handleCellClick = (index) => {
    setCurrenMove((lastCurrentMove) => GetNextMove(lastCurrentMove));
    console.log(lastCurrentMove);
  };

  const actions = (
    <>
      <UiButton variant="primary" size="md">
        Ничья
      </UiButton>
      <UiButton variant="outline" size="md">
        Сдаться
      </UiButton>
    </>
  );

  return (
    <GameFIeldLayout className={className}>
      <GameMoveInfo
        actions={actions}
        currentMove={currentMove}
        nextMove={nextMove}
      />
      <GameGrid>
        {cells.map((_, index) => {
          return (
            <GameCell
              key={index}
              onClick={() => {
                handleCellClick(index);
              }}
            />
          );
        })}
      </GameGrid>
    </GameFIeldLayout>
  );
}

function GameCell({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {children}
    </button>
  );
}

function GameFIeldLayout({ children, className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 pt-5 pb-2 mt-5"
      )}
    >
      {children}
    </div>
  );
}

function GameMoveInfo({ actions, currentMove, nextMove }) {
  return (
    <div className="flex gap-3 items-center">
      <div className="mr-auto">
        <div className="flex items-center gap-1 text-xl text-semibold leading-tight">
          Ход: <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-1 text-xs leading-tight text-slate-400">
          Следующий:
          <GameSymbol symbol={nextMove} className="w-5 h-5" />
        </div>
      </div>
      {actions}
    </div>
  );
}

function GameGrid({ children }) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px mt-3 ">
      {children}
    </div>
  );
}
