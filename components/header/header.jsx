import Image from "next/image";
import LogoSrc from "./logo.svg";
import { Profile } from "../game/profile";
import { ArrowDownIcon } from "./icons/arrow-down-icons";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 items-center px-8 bg-white shadow-lg">
      <Image src={LogoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6" />
      <UiButton className="w-44" variant="primary" size="lg">
        Играть
      </UiButton>
      <button className="ml-auto flex text-teal-600 items-center gap-2 text-start">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}
