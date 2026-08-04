import { Play } from "lucide-react";
import { Art, BottomNav, HomeIndicator, MiniPlayer, ScreenShell, StatusBar } from "./shell";

const CHIPS = ["All", "Playlists", "Artists", "Albums"];
const RECENT = [
  { i: 0, title: "After Hours", sub: "The Weeknd" },
  { i: 2, title: "Random Access", sub: "Daft Punk" },
  { i: 4, title: "Divide", sub: "Ed Sheeran" },
];
const MIXES = [
  { i: 1, title: "Daily Mix", sub: "Your 32-track ritual" },
  { i: 3, title: "Focus Mix", sub: "Deep work mode" },
];

export function HomeScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="flex items-center justify-between px-5 pb-3 pt-3">
        <div>
          <p className="text-[10px] font-medium text-white/45">Tuesday evening</p>
          <h3 className="font-display text-[19px] font-semibold tracking-tight">Good evening</h3>
        </div>
        <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-3 text-[11px] font-bold text-white">
          R
        </div>
      </div>

      <div className="flex gap-1.5 px-5 pb-4">
        {CHIPS.map((c, i) => (
          <span
            key={c}
            className={
              i === 0
                ? "rounded-full bg-white px-2.5 py-1 text-[9.5px] font-semibold text-black"
                : "rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9.5px] font-medium text-white/60"
            }
          >
            {c}
          </span>
        ))}
      </div>

      <div className="flex-1 space-y-5 overflow-hidden">
        <div>
          <div className="flex items-center justify-between px-5 pb-2">
            <p className="text-[12px] font-semibold">Jump back in</p>
            <span className="text-[9.5px] font-medium text-white/40">See all</span>
          </div>
          <div className="flex gap-2.5 px-5">
            {RECENT.map((r) => (
              <div key={r.title} className="w-[72px] shrink-0">
                <Art i={r.i} className="aspect-square w-full" />
                <p className="mt-1.5 truncate text-[9.5px] font-semibold">{r.title}</p>
                <p className="truncate text-[8.5px] text-white/40">{r.sub}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="px-5 pb-2 text-[12px] font-semibold">Made by Raaga DNA</p>
          <div className="space-y-2 px-5">
            {MIXES.map((m) => (
              <div
                key={m.title}
                className="flex items-center gap-3 rounded-2xl border border-white/[0.07] bg-white/[0.04] p-2"
              >
                <Art i={m.i} className="size-11" icon={false} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] font-semibold">{m.title}</p>
                  <p className="truncate text-[9.5px] text-white/45">{m.sub}</p>
                </div>
                <div className="flex size-8 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_4px_16px_-2px_var(--glow)]">
                  <Play size={12} fill="#fff" className="ml-0.5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MiniPlayer />
      <BottomNav active="home" />
      <HomeIndicator />
    </ScreenShell>
  );
}
