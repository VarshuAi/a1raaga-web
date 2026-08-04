import { Clock, Mic, Search as SearchIcon, TrendingUp, X } from "lucide-react";
import { Art, BottomNav, HomeIndicator, ScreenShell, StatusBar } from "./shell";

const RECENT = ["kesariya arijit singh", "daft punk ram", "lofi beats rain"];
const TRENDING = [
  { i: 0, title: "Tum Hi Ho", sub: "Aashiqui 2" },
  { i: 2, title: "Starboy", sub: "The Weeknd" },
  { i: 5, title: "Blinding Lights", sub: "After Hours" },
];
const GENRES = [
  { i: 0, label: "Bollywood" },
  { i: 2, label: "Indie" },
  { i: 3, label: "Lo-fi" },
  { i: 1, label: "Classical" },
];

export function SearchScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="px-5 pb-3 pt-3">
        <h3 className="font-display text-[19px] font-semibold tracking-tight">Search</h3>
      </div>

      <div className="px-5">
        <div className="flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/[0.06] px-3.5 py-2.5 backdrop-blur">
          <SearchIcon size={14} className="text-white/45" />
          <span className="flex-1 text-[11px] text-white/40">Songs, artists, albums…</span>
          <Mic size={13} className="text-white/45" />
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-hidden pt-4">
        <div className="px-5">
          <p className="pb-1.5 text-[11px] font-semibold text-white/60">Recent searches</p>
          {RECENT.map((r) => (
            <div key={r} className="flex items-center gap-2.5 py-1.5">
              <Clock size={11} className="text-white/30" />
              <span className="flex-1 truncate text-[10.5px] text-white/70">{r}</span>
              <X size={11} className="text-white/30" />
            </div>
          ))}
        </div>

        <div>
          <p className="flex items-center gap-1.5 px-5 pb-2 text-[11px] font-semibold text-white/60">
            <TrendingUp size={12} className="text-accent-2" /> Trending near you
          </p>
          {TRENDING.map((t, n) => (
            <div key={t.title} className="flex items-center gap-3 px-5 py-1.5">
              <span className="w-4 font-display text-[13px] font-bold text-gradient">{n + 1}</span>
              <Art i={t.i} className="size-9" rounded="rounded-lg" icon={false} />
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold">{t.title}</p>
                <p className="truncate text-[9px] text-white/40">{t.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="px-5">
          <p className="pb-2 text-[11px] font-semibold text-white/60">Browse genres</p>
          <div className="grid grid-cols-2 gap-2">
            {GENRES.map((g) => (
              <div
                key={g.label}
                className={`flex h-12 items-end rounded-xl bg-gradient-to-br ${[
                  "from-orange-500 to-rose-600",
                  "from-indigo-500 to-fuchsia-600",
                  "from-emerald-500 to-cyan-600",
                  "from-amber-500 to-rose-500",
                ][g.i]} p-2.5 text-[10.5px] font-bold`}
              >
                {g.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      <BottomNav active="search" />
      <HomeIndicator />
    </ScreenShell>
  );
}
