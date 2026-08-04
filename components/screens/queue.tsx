import { ChevronDown, GripVertical, Sparkles } from "lucide-react";
import { EqBars, HomeIndicator, ScreenShell, StatusBar, TrackRow } from "./shell";

const UP_NEXT = [
  { i: 3, title: "Nightcall", sub: "Kavinsky · 4:12" },
  { i: 5, title: "Midnight City", sub: "M83 · 4:03" },
  { i: 2, title: "Instant Crush", sub: "Daft Punk · 5:37" },
  { i: 4, title: "Sun Models", sub: "ODESZA · 2:41" },
];

export function QueueScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <ChevronDown size={18} className="text-white/70" />
        <p className="font-display text-[14px] font-semibold">Queue</p>
        <span className="text-[9.5px] font-medium text-accent-2">Clear</span>
      </div>

      <div className="px-5 pt-3">
        <div className="flex items-center gap-2 rounded-2xl border border-accent-2/25 bg-gradient-to-r from-accent/10 to-accent-2/10 p-2.5">
          <EqBars />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[11.5px] font-bold">Kesariya</p>
            <p className="truncate text-[9px] text-white/50">Now playing · Arijit Singh</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-3 pt-4">
        <div className="flex items-center justify-between px-2 pb-1.5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">Up next</p>
          <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[8.5px] font-medium text-white/60">
            <Sparkles size={9} className="text-accent" /> Smart order
          </span>
        </div>
        {UP_NEXT.map((t) => (
          <TrackRow
            key={t.title}
            i={t.i}
            title={t.title}
            sub={t.sub}
            right={<GripVertical size={13} className="text-white/25" />}
          />
        ))}
      </div>

      <div className="mx-5 mb-3 mt-1 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-2.5 text-center">
        <p className="text-[9.5px] text-white/50">
          Queue rebuilds itself from your listening DNA as songs finish.
        </p>
      </div>
      <HomeIndicator />
    </ScreenShell>
  );
}
