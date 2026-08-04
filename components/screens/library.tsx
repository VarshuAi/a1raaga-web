import { ArrowDownToLine, ListMusic, Plus } from "lucide-react";
import { Art, BottomNav, HomeIndicator, ScreenShell, StatusBar } from "./shell";
import { cn } from "@/lib/utils";

const TABS = ["Playlists", "Artists", "Albums", "Downloaded"];
const PLAYLISTS = [
  { i: 0, title: "Late Night Drive", sub: "48 songs" },
  { i: 2, title: "Monsoon Ragas", sub: "31 songs" },
  { i: 3, title: "Gym Fuel", sub: "26 songs" },
  { i: 5, title: "Chill Lo-fi", sub: "64 songs" },
];
const ARTISTS = ["Arijit", "Daft Punk", "Prateek", "Nucleya", "Anoushka"];

export function LibraryScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="flex items-center justify-between px-5 pb-2 pt-3">
        <h3 className="font-display text-[19px] font-semibold tracking-tight">Library</h3>
        <div className="flex size-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.05]">
          <Plus size={14} className="text-white/70" />
        </div>
      </div>

      <div className="flex gap-1.5 overflow-hidden px-5 pb-3">
        {TABS.map((t, i) => (
          <span
            key={t}
            className={cn(
              "shrink-0 rounded-full px-2.5 py-1 text-[9.5px] font-medium",
              i === 0
                ? "bg-white font-semibold text-black"
                : "border border-white/10 bg-white/[0.04] text-white/55"
            )}
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex-1 space-y-4 overflow-hidden">
        <div className="flex gap-3 px-5">
          {ARTISTS.map((a, i) => (
            <div key={a} className="flex w-11 shrink-0 flex-col items-center gap-1">
              <div
                className={cn(
                  "flex size-11 items-center justify-center rounded-full bg-gradient-to-br text-[11px] font-bold",
                  [
                    "from-orange-500 to-rose-600",
                    "from-indigo-500 to-fuchsia-600",
                    "from-emerald-500 to-cyan-600",
                    "from-amber-500 to-rose-500",
                    "from-sky-500 to-indigo-600",
                  ][i % 5]
                )}
              >
                {a[0]}
              </div>
              <span className="w-full truncate text-center text-[8px] text-white/50">{a}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 px-5">
          {PLAYLISTS.map((p) => (
            <div key={p.title} className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03]">
              <Art i={p.i} className="aspect-[4/3] w-full" rounded="rounded-none" icon={false} />
              <div className="p-2">
                <p className="truncate text-[10.5px] font-semibold">{p.title}</p>
                <p className="text-[8.5px] text-white/40">{p.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-5 flex items-center gap-2.5 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-2.5">
          <ArrowDownToLine size={14} className="text-accent" />
          <div className="flex-1">
            <p className="text-[10.5px] font-semibold">Downloaded</p>
            <p className="text-[8.5px] text-white/40">1,284 songs · 9.2 GB</p>
          </div>
          <ListMusic size={14} className="text-white/40" />
        </div>
      </div>

      <BottomNav active="library" />
      <HomeIndicator />
    </ScreenShell>
  );
}
