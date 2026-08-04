import {
  ArrowDownToLine,
  Home,
  Library,
  Music2,
  Play,
  Search,
  Settings,
  Wifi,
} from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const COVERS = [
  "from-orange-500 via-rose-500 to-purple-600",
  "from-amber-400 via-orange-500 to-rose-600",
  "from-indigo-500 via-purple-500 to-fuchsia-500",
  "from-emerald-400 via-teal-500 to-cyan-600",
  "from-rose-400 via-pink-500 to-fuchsia-600",
  "from-sky-400 via-blue-500 to-indigo-600",
];

/** Gradient album art tile with a vinyl ring accent. */
export function Art({
  i = 0,
  className,
  rounded = "rounded-xl",
  icon = true,
}: {
  i?: number;
  className?: string;
  rounded?: string;
  icon?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br",
        COVERS[i % COVERS.length],
        rounded,
        className
      )}
    >
      <div className="absolute inset-0 bg-noise opacity-20" />
      <div className="absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-white/20" />
      <div className="absolute -right-1/4 -top-1/4 size-full rounded-full border border-white/15" />
      {icon && <Music2 className="size-1/3 text-white/85" strokeWidth={1.5} />}
    </div>
  );
}

export function StatusBar() {
  return (
    <div className="relative z-20 flex items-center justify-between px-7 pt-3.5 text-[10px] font-semibold text-white">
      <span className="tracking-wide">9:41</span>
      <div className="flex items-center gap-1.5 text-white/90">
        <svg width="13" height="9" viewBox="0 0 16 12" fill="currentColor" aria-hidden>
          <rect x="0" y="7" width="3" height="5" rx="1" />
          <rect x="4.5" y="5" width="3" height="7" rx="1" />
          <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
          <rect x="13.5" y="0" width="2.5" height="12" rx="1" opacity="0.35" />
        </svg>
        <Wifi size={11} strokeWidth={2.5} />
        <svg width="18" height="9" viewBox="0 0 25 12" fill="none" aria-hidden>
          <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity="0.4" />
          <rect x="2" y="2" width="15" height="8" rx="2" fill="currentColor" />
          <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

export function HomeIndicator() {
  return (
    <div className="relative z-20 flex justify-center pb-1.5 pt-1">
      <div className="h-[3.5px] w-24 rounded-full bg-white/40" />
    </div>
  );
}

/** Animated equalizer bars (pure CSS, 60fps). */
export function EqBars({ className, bars = 4 }: { className?: string; bars?: number }) {
  return (
    <div className={cn("flex h-3.5 items-end gap-[2.5px]", className)} aria-hidden>
      {Array.from({ length: bars }).map((_, i) => (
        <span
          key={i}
          className="w-[2.5px] origin-bottom animate-eq rounded-full bg-gradient-to-t from-accent to-accent-2"
          style={{ height: "100%", animationDelay: `${i * 0.14}s`, animationDuration: `${0.9 + i * 0.17}s` }}
        />
      ))}
    </div>
  );
}

const NAV = [
  { icon: Home, label: "Home", key: "home" },
  { icon: Search, label: "Search", key: "search" },
  { icon: Library, label: "Library", key: "library" },
  { icon: ArrowDownToLine, label: "Downloads", key: "downloads" },
  { icon: Settings, label: "Settings", key: "settings" },
];

export function BottomNav({ active }: { active: string }) {
  return (
    <div className="relative z-20 mt-auto flex items-center justify-around border-t border-white/[0.06] bg-black/60 px-2 pb-1 pt-2 backdrop-blur-xl">
      {NAV.map(({ icon: Icon, label, key }) => {
        const on = key === active;
        return (
          <div key={key} className="flex w-[54px] flex-col items-center gap-0.5 py-0.5">
            <div
              className={cn(
                "flex h-7 w-11 items-center justify-center rounded-full transition-colors",
                on && "bg-gradient-to-r from-accent/25 to-accent-2/25"
              )}
            >
              <Icon size={16} className={on ? "text-white" : "text-white/40"} strokeWidth={on ? 2.2 : 1.8} />
            </div>
            <span className={cn("text-[8px] font-medium", on ? "text-white" : "text-white/40")}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}

export function MiniPlayer() {
  return (
    <div className="relative z-20 mx-3 mb-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] backdrop-blur-xl">
      <div className="flex items-center gap-2.5 p-2">
        <Art i={1} className="size-9" rounded="rounded-lg" icon={false} />
        <div className="min-w-0 flex-1">
          <p className="truncate text-[11px] font-semibold text-white">Kesariya</p>
          <p className="truncate text-[9.5px] text-white/50">Arijit Singh · Brahmāstra</p>
        </div>
        <EqBars />
        <div className="flex size-8 items-center justify-center rounded-full bg-white text-black">
          <Play size={13} fill="currentColor" className="ml-0.5" />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-white/10">
        <div className="h-full w-[62%] bg-gradient-to-r from-accent to-accent-2" />
      </div>
    </div>
  );
}

export function TrackRow({
  i,
  title,
  sub,
  right,
  active,
}: {
  i: number;
  title: string;
  sub: string;
  right?: ReactNode;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl px-2 py-2",
        active && "bg-white/[0.06]"
      )}
    >
      <Art i={i} className="size-10" rounded="rounded-lg" icon={false} />
      <div className="min-w-0 flex-1">
        <p className={cn("truncate text-[12px] font-semibold", active ? "text-gradient" : "text-white")}>
          {title}
        </p>
        <p className="truncate text-[10px] text-white/45">{sub}</p>
      </div>
      {active ? <EqBars className="h-3 pr-1" /> : right}
    </div>
  );
}

/** Full screen container: AMOLED black, column layout. */
export function ScreenShell({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex h-full w-full flex-col overflow-hidden bg-black text-white", className)}>
      {children}
    </div>
  );
}
