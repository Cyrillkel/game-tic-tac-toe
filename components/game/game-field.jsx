import clsx from "clsx";
import { UiButton } from "../uikit/ui-button";
import { GameSymbol } from "./game-symbol";
import { useGameState } from "./use-game-state";

export function GameField({ className }) {
  const { cells, handleCellClick, currentMove, nextMove } = useGameState();

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
    <GameFieldLayout className={className}>
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
              symbol={cells[index]}
              onClick={() => {
                handleCellClick(index);
              }}
            />
          );
        })}
      </GameGrid>
    </GameFieldLayout>
  );
}

function GameCell({ symbol, onClick }) {
  return (
    <button
      onClick={onClick}
      className="border border-slate-200 -ml-px -mt-px flex items-center justify-center"
    >
      {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
    </button>
  );
}

function GameFieldLayout({ children, className }) {
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
