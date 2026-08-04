import {
  AudioWaveform,
  Bell,
  ChevronRight,
  CloudOff,
  Download,
  Fingerprint,
  SlidersHorizontal,
} from "lucide-react";
import { BottomNav, HomeIndicator, ScreenShell, StatusBar } from "./shell";
import { cn } from "@/lib/utils";

function Toggle({ on }: { on?: boolean }) {
  return (
    <div
      className={cn(
        "flex h-[18px] w-[32px] items-center rounded-full px-[2px] transition-colors",
        on ? "justify-end bg-gradient-to-r from-accent to-accent-2" : "bg-white/15"
      )}
    >
      <div className="size-[14px] rounded-full bg-white shadow" />
    </div>
  );
}

const ROWS = [
  { icon: AudioWaveform, label: "Gapless playback", sub: "Seamless album transitions", on: true },
  { icon: SlidersHorizontal, label: "Crossfade", sub: "8s blend between tracks", on: true },
  { icon: Download, label: "Download quality", sub: "Lossless · FLAC", chevron: true },
  { icon: Bell, label: "New mix ready", sub: "Daily at 6:00 AM", on: true },
  { icon: CloudOff, label: "Offline mode", sub: "Never touch the network", on: true },
  { icon: Fingerprint, label: "Private by design", sub: "All data stays on-device", chevron: true },
];

export function SettingsScreen() {
  return (
    <ScreenShell>
      <StatusBar />
      <div className="px-5 pb-2 pt-3">
        <h3 className="font-display text-[19px] font-semibold tracking-tight">Settings</h3>
      </div>

      <div className="flex-1 space-y-1 overflow-hidden px-3">
        <p className="px-2 pb-1 pt-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Audio
        </p>
        {ROWS.map((r) => (
          <div key={r.label} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/[0.04]">
            <div className="flex size-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.07] bg-white/[0.05]">
              <r.icon size={14} className="text-accent-2" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11.5px] font-semibold">{r.label}</p>
              <p className="truncate text-[9px] text-white/40">{r.sub}</p>
            </div>
            {r.on !== undefined ? (
              <Toggle on={r.on} />
            ) : (
              <ChevronRight size={13} className="text-white/30" />
            )}
          </div>
        ))}

        <p className="px-2 pb-1 pt-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/35">
          Equalizer
        </p>
        <div className="flex h-[74px] items-end justify-around rounded-2xl border border-white/[0.07] bg-white/[0.03] px-4 pb-3 pt-2">
          {[46, 62, 84, 56, 70, 38].map((v, i) => (
            <div key={i} className="relative h-full w-[3px] rounded-full bg-white/12">
              <div
                className="absolute bottom-0 w-full rounded-full bg-gradient-to-t from-accent to-accent-2"
                style={{ height: `${v}%` }}
              />
              <div
                className="absolute left-1/2 size-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_var(--glow)]"
                style={{ bottom: `calc(${v}% - 3px)` }}
              />
            </div>
          ))}
        </div>
      </div>

      <BottomNav active="settings" />
      <HomeIndicator />
    </ScreenShell>
  );
}
