import {
  Cast,
  ChevronDown,
  Heart,
  ListMusic,
  MoreHorizontal,
  Music2,
  Pause,
  Repeat,
  Share2,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import { Art, EqBars, HomeIndicator, ScreenShell, StatusBar } from "./shell";

export function PlayerScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="flex items-center justify-between px-5 pt-2">
        <ChevronDown size={18} className="text-white/70" />
        <div className="text-center">
          <p className="text-[8.5px] font-medium uppercase tracking-[0.22em] text-white/40">
            Playing from Daily Mix
          </p>
        </div>
        <MoreHorizontal size={16} className="text-white/70" />
      </div>

      <div className="flex flex-1 items-center justify-center px-8">
        <div className="relative w-full">
          <div className="absolute inset-0 scale-110 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-2/30 to-accent-3/40 blur-2xl" />
          <Art i={1} className="relative aspect-square w-full shadow-2xl" rounded="rounded-[1.6rem]" icon={false} />
          <div className="absolute bottom-2.5 right-2.5 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 backdrop-blur">
            <EqBars className="h-2.5" />
            <span className="text-[7.5px] font-semibold uppercase tracking-wider text-white/80">Gapless</span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-1">
        <div className="flex items-end justify-between">
          <div className="min-w-0">
            <h3 className="truncate font-display text-[21px] font-bold tracking-tight">Kesariya</h3>
            <p className="truncate text-[11.5px] text-white/50">Arijit Singh · Brahmāstra</p>
          </div>
          <Heart size={18} className="mb-1 shrink-0 fill-accent-2 text-accent-2" />
        </div>

        <div className="pt-3">
          <div className="relative h-[3.5px] w-full rounded-full bg-white/15">
            <div className="absolute inset-y-0 left-0 w-[46%] rounded-full bg-gradient-to-r from-accent to-accent-2" />
            <div className="absolute left-[46%] top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_10px_var(--glow)]" />
          </div>
          <div className="flex justify-between pt-1.5 text-[8.5px] font-medium text-white/40">
            <span>1:47</span>
            <span>3:54</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-1">
          <Shuffle size={15} className="text-accent-2" />
          <SkipBack size={20} fill="currentColor" className="text-white" />
          <div className="flex size-14 items-center justify-center rounded-full bg-white text-black shadow-[0_8px_30px_-4px_rgba(255,255,255,0.4)]">
            <Pause size={22} fill="currentColor" />
          </div>
          <SkipForward size={20} fill="currentColor" className="text-white" />
          <Repeat size={15} className="text-white/60" />
        </div>

        <div className="flex items-center justify-between pt-3 text-white/45">
          <Cast size={14} />
          <div className="flex items-center gap-1 text-[9px] font-medium">
            <Music2 size={11} className="text-accent" /> Lyrics in sync
          </div>
          <div className="flex items-center gap-3">
            <Share2 size={13} />
            <ListMusic size={15} />
          </div>
        </div>
      </div>
      <HomeIndicator />
    </ScreenShell>
  );
}
