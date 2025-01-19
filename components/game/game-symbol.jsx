import { GAME_SYMBOL } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TringleIcon } from "./icons/tringle-icon";
import { SquareIcon } from "./icons/square-icon";

export function GameSymbol(symbol, className) {
  const Icon =
    {
      [GAME_SYMBOL.CROSS]: CrossIcon,
      [GAME_SYMBOL.ZERO]: ZeroIcon,
      [GAME_SYMBOL.TRIANGLE]: TringleIcon,
      [GAME_SYMBOL.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  return <Icon className={className} />;
}
