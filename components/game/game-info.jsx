import clsx from "clsx";
import { Profile } from "./profile";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "bg-white rounded-2xl shadow-md px-8 py-4 flex justify-between"
      )}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-48" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
            <CrossIcon />
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="text-slate-900 text-lg text-semibold">01:08</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-orange-800 text-lg text-semibold">00:08</div>
        <div className="h-6 w-px bg-slate-200"></div>
        <div className="relative">
          <Profile className="w-48" />
          <div className="w-5 h-5 rounded-full bg-white shadow absolute -left-1 -top-1 items-center justify-center flex">
            <CrossIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
