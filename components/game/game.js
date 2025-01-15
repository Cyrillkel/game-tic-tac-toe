import { useGameState } from "./use-game-state";
import { GameInfo } from "./game-info";
import { GameCell } from "./game-cell";
import { ResetButton } from "./button-reset";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    <div className="flex flex-col items-center w-[150px] my-[100px] mx-auto p-5 border border-black">
      <GameInfo
        isDraw={isDraw}
        winnerSymbol={winnerSymbol}
        currentStep={currentStep}
      />
      <div className="grid py-px px-px grid-cols-game-field grid-rows-game-field">
        {cells.map((symbol, index) => (
          <GameCell
            key={index}
            symbol={symbol}
            isWinner={winnerSequence?.includes(index)}
            onClick={() => handleCellClick(index)}
          />
        ))}
      </div>
      <ResetButton onClick={handleResetClick} />
    </div>
  );
}
