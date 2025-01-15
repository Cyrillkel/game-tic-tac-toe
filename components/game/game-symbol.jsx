import { SYMBOL_X, SYMBOL_O } from "./constants";

export function GameSymbol({ symbol }) {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-700";
    if (symbol === SYMBOL_X) return "text-red-700";
    return "";
  };
  return (
    <div className="flex justify-center">
      <span className={`text-xl leading-6 ${getSymbolClassName(symbol)}`}>
        {symbol}
      </span>
    </div>
  );
}
