import Image from "next/image";
import AvatarSrc from "./avatar.png";
import clsx from "clsx";

export function Profile({ className }) {
  return (
    <div
      className={clsx(
        "flex text-teal-600 items-center gap-2 text-start",
        className
      )}
    >
      <Image src={AvatarSrc} width={48} height={48} alt="avatar" unoptimized />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
