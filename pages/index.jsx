import { GameTitle, GameInfo } from "../components/game";
import { Header } from "../components/header";

export default function HomePage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <main className="pt-6 mx-auto max-w-[616px]">
        <GameTitle />
        <GameInfo className="mt-4 rounded-2xl shadow-md bg-white px-8 py-4" />
      </main>
    </div>
  );
}
