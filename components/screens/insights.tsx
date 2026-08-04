import { Flame, Headphones, MoonStar, TrendingUp } from "lucide-react";
import { BottomNav, HomeIndicator, ScreenShell, StatusBar } from "./shell";

const WEEK = [35, 52, 44, 68, 58, 86, 74];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];
const ARTISTS = [
  { rank: 1, name: "Arijit Singh", plays: "214 plays" },
  { rank: 2, name: "Daft Punk", plays: "168 plays" },
  { rank: 3, name: "Prateek Kuhad", plays: "142 plays" },
];

export function InsightsScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="flex items-center justify-between px-5 pb-3 pt-3">
        <h3 className="font-display text-[19px] font-semibold tracking-tight">Insights</h3>
        <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[9px] font-medium text-white/60">
          This week
        </span>
      </div>

      <div className="flex-1 space-y-3 overflow-hidden px-5">
        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3.5">
          <div className="flex items-center justify-between pb-3">
            <div>
              <p className="font-display text-[22px] font-bold leading-none">
                12<span className="text-[12px] font-semibold text-white/50">h</span> 40
                <span className="text-[12px] font-semibold text-white/50">m</span>
              </p>
              <p className="pt-1 text-[9px] text-white/45">Listening time · +18% vs last week</p>
            </div>
            <TrendingUp size={16} className="text-accent" />
          </div>
          <div className="flex h-[72px] items-end justify-between gap-1.5">
            {WEEK.map((v, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1">
                <div
                  className={`w-full rounded-md ${
                    i === 5
                      ? "bg-gradient-to-t from-accent to-accent-2 shadow-[0_0_14px_var(--glow)]"
                      : "bg-white/12"
                  }`}
                  style={{ height: `${v}%` }}
                />
                <span className="text-[7.5px] text-white/35">{DAYS[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
            <Flame size={14} className="text-accent-2" />
            <p className="pt-2 font-display text-[17px] font-bold leading-none">21 days</p>
            <p className="pt-1 text-[8.5px] text-white/45">Listening streak</p>
          </div>
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
            <MoonStar size={14} className="text-accent-3" />
            <p className="pt-2 font-display text-[17px] font-bold leading-none">Night owl</p>
            <p className="pt-1 text-[8.5px] text-white/45">63% after 11 PM</p>
          </div>
        </div>

        <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3">
          <div className="flex items-center gap-1.5 pb-2">
            <Headphones size={12} className="text-accent" />
            <p className="text-[10px] font-semibold">Top artists</p>
          </div>
          {ARTISTS.map((a) => (
            <div key={a.rank} className="flex items-center gap-2.5 py-1.5">
              <span className="w-4 font-display text-[12px] font-bold text-gradient">{a.rank}</span>
              <div className="size-7 rounded-full bg-gradient-to-br from-accent/60 to-accent-3/60" />
              <div className="flex-1">
                <p className="text-[10.5px] font-semibold">{a.name}</p>
              </div>
              <span className="text-[8.5px] text-white/40">{a.plays}</span>
            </div>
          ))}
        </div>

        <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[8.5px] text-white/35">
          Computed 100% on-device by Raaga DNA
        </p>
      </div>

      <BottomNav active="" />
      <HomeIndicator />
    </ScreenShell>
  );
}
