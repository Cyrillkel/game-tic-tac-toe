import { GAME_SYMBOL } from "./constants";
import { CrossIcon } from "./icons/cross-icon";
import { ZeroIcon } from "./icons/zero-icon";
import { TriangleIcon } from "./icons/tringle-icon";
import { SquareIcon } from "./icons/square-icon";

export function GameSymbol({ symbol, className }) {
  const Icon =
    {
      [GAME_SYMBOL.CROSS]: CrossIcon,
      [GAME_SYMBOL.ZERO]: ZeroIcon,
      [GAME_SYMBOL.TRIANGLE]: TriangleIcon,
      [GAME_SYMBOL.SQUARE]: SquareIcon,
    }[symbol] ?? CrossIcon;

  console.log("Rendering symbol:", symbol);

  // console.log(symbol, GAME_SYMBOL.CROSS, Icon["cross"]);

  return <Icon className={className} />;
}
