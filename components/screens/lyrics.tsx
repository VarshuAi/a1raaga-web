import { ChevronDown, Maximize2, Pause } from "lucide-react";
import { Art, HomeIndicator, ScreenShell, StatusBar } from "./shell";

const LINES = [
  { t: "Mmm…", dim: 2 },
  { t: "Kya itna sa hai bhi kya", dim: 1 },
  { t: "Tumse mere yeh rishta", dim: 1 },
  { t: "Rab jaise bhi rang mila do", dim: 0, active: true },
  { t: "Kesariya tera ishq hai piya", dim: 1 },
  { t: "Rang jaaun jo main haath lagaun", dim: 2 },
  { t: "Din beete saara teri fikr mein", dim: 2 },
];

export function LyricsScreen() {
  return (
    <ScreenShell className="bg-[#160508]">
      {/* adaptive backdrop derived from album art */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-accent-2/25 via-transparent to-black" />
      <StatusBar />
      <div className="relative flex items-center gap-3 px-5 pt-2">
        <Art i={1} className="size-11" rounded="rounded-lg" icon={false} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[13px] font-bold">Kesariya</p>
          <p className="truncate text-[10px] text-white/50">Arijit Singh</p>
        </div>
        <Maximize2 size={13} className="text-white/50" />
        <ChevronDown size={16} className="text-white/50" />
      </div>

      <div className="relative flex-1 space-y-3.5 overflow-hidden px-5 pt-7">
        {LINES.map((l) => (
          <p
            key={l.t}
            className={
              l.active
                ? "text-gradient font-display text-[20px] font-bold leading-snug tracking-tight"
                : `font-display text-[15px] font-semibold leading-snug ${
                    l.dim === 1 ? "text-white/45" : "text-white/20"
                  }`
            }
            style={l.dim === 2 ? { filter: "blur(0.6px)" } : undefined}
          >
            {l.t}
          </p>
        ))}
        <div className="pointer-events-none absolute inset-x-0 -bottom-2 h-24 bg-gradient-to-t from-[#160508] to-transparent" />
      </div>

      <div className="relative px-5 pb-2">
        <div className="h-[3px] w-full rounded-full bg-white/15">
          <div className="h-full w-[46%] rounded-full bg-gradient-to-r from-accent to-accent-2" />
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <span className="text-[8.5px] text-white/40">1:47</span>
          <div className="flex size-10 items-center justify-center rounded-full bg-white text-black">
            <Pause size={16} fill="currentColor" />
          </div>
          <span className="text-[8.5px] text-white/40">3:54</span>
        </div>
      </div>
      <HomeIndicator />
    </ScreenShell>
  );
}
