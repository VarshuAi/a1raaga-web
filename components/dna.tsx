"use client";

import {
  CloudOff,
  Dumbbell,
  EyeOff,
  Flame,
  Focus,
  HardDrive,
  History,
  MoonStar,
  Sparkles,
  Sun,
  UserX,
} from "lucide-react";
import type { ReactNode } from "react";
import { Counter } from "./counter";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { TiltCard } from "./tilt-card";

const PRIVACY = [
  { icon: HardDrive, label: "Learning stays on-device" },
  { icon: CloudOff, label: "No cloud profiling" },
  { icon: EyeOff, label: "No tracking" },
  { icon: UserX, label: "No account" },
];

function Sparkline() {
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff6a3d" />
          <stop offset="1" stopColor="#ff2e63" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff2e63" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ff2e63" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 28 L12 24 L24 26 L36 18 L48 21 L60 12 L72 16 L84 8 L96 12 L108 5 L120 8 V36 H0 Z"
        fill="url(#sparkFill)"
      />
      <path
        d="M0 28 L12 24 L24 26 L36 18 L48 21 L60 12 L72 16 L84 8 L96 12 L108 5 L120 8"
        stroke="url(#spark)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function DnaCard({
  icon: Icon,
  label,
  children,
  footer,
  big,
}: {
  icon: React.ElementType;
  label: string;
  children: ReactNode;
  footer?: string;
  big?: boolean;
}) {
  return (
    <TiltCard innerClassName="p-5" intensity={5}>
      <div className="flex h-full flex-col" style={{ transform: "translateZ(24px)" }}>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon size={13} className="text-accent-2" />
          <span className="text-[10.5px] font-semibold uppercase tracking-[0.16em]">{label}</span>
        </div>
        <div className={big ? "flex-1 pt-3" : "pt-3"}>{children}</div>
        {footer && (
          <p className="mt-auto pt-3 text-[11px] leading-relaxed text-muted-foreground">{footer}</p>
        )}
      </div>
    </TiltCard>
  );
}

export function Dna() {
  return (
    <section id="dna" className="relative overflow-hidden py-28 sm:py-40">
      {/* signature backdrop */}
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-24 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_120deg,var(--accent),var(--accent-2),var(--accent-3),var(--accent))] opacity-[0.14] blur-[80px] md:h-[520px] md:w-[820px] md:blur-[130px]" />
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,black,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="dot-matrix inline-flex items-center gap-2.5 rounded-full border border-accent-2/25 bg-accent-2/[0.06] px-4 py-2 text-[11px] font-medium text-accent-2">
              <Sparkles size={12} />
              Raaga DNA
              <span className="rounded-full bg-accent-2/20 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.18em]">
                Next update
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="pt-6 font-display text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Your Music.
              <br />
              <span className="text-gradient">Learns You.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              ✦ In training now — ships with the next update ✦
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl pt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Most apps learn you on a server. Raaga DNA will learn you on your phone.
              Every play, skip and repeat will train a taste model that never leaves
              the device — because it’s nobody else’s business.
            </p>
          </Reveal>
          <Stagger className="flex flex-wrap items-center justify-center gap-2.5 pt-8" delay={0.2}>
            {PRIVACY.map((p) => (
              <StaggerItem key={p.label}>
                <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium">
                  <p.icon size={13} className="text-accent" />
                  {p.label}
                </span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>

        <Stagger className="grid grid-cols-2 gap-4 pt-16 lg:grid-cols-4" delay={0.15}>
          <StaggerItem>
            <DnaCard
              icon={Flame}
              label="Favorite artist"
              footer="1,204 plays this year — discovered March 2024"
            >
              <div className="flex items-center gap-3 pt-1">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display text-lg font-bold text-white shadow-[0_8px_24px_-6px_var(--glow)]">
                  AS
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-bold">Arijit Singh</p>
                  <p className="text-[11px] text-accent-2">Top 0.1% listener</p>
                </div>
              </div>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard icon={Sun} label="Listening time" big>
              <p className="font-display text-4xl font-bold tracking-tight">
                <Counter to={1282} />
                <span className="pl-1 text-base font-semibold text-muted-foreground">hrs</span>
              </p>
              <div className="pt-3">
                <Sparkline />
              </div>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard icon={Sparkles} label="Top genre" big>
              <p className="font-display text-2xl font-bold tracking-tight">Melodic House</p>
              <div className="space-y-2 pt-3">
                {[
                  ["Melodic House", 82],
                  ["Bollywood", 64],
                  ["Indie", 41],
                ].map(([g, v]) => (
                  <div key={g as string}>
                    <div className="flex justify-between text-[10px] text-muted-foreground">
                      <span>{g}</span>
                      <span>{v}%</span>
                    </div>
                    <div className="mt-1 h-1 rounded-full bg-foreground/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-2"
                        style={{ width: `${v}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard
              icon={MoonStar}
              label="Night owl"
              footer="You and 3 AM have a thing going."
            >
              <p className="font-display text-4xl font-bold tracking-tight">
                <Counter to={63} suffix="%" />
              </p>
              <p className="pt-1 text-[11px] text-muted-foreground">of listening after 11 PM</p>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard
              icon={Dumbbell}
              label="Workout mix"
              footer="Tempo-matched to your pace, refreshed weekly."
            >
              <div className="flex items-center justify-between pt-1">
                <p className="font-display text-xl font-bold">Beast Mode</p>
                <span className="rounded-full bg-accent-2/15 px-2 py-0.5 text-[10px] font-bold text-accent-2">
                  128 BPM
                </span>
              </div>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard icon={Sun} label="Daily mix" footer="32 tracks, on your shelf by 6 AM.">
              <div className="flex pt-1">
                {[0, 2, 4].map((i) => (
                  <div
                    key={i}
                    className={`size-9 rounded-lg bg-gradient-to-br ${
                      ["from-orange-500 to-rose-600", "from-indigo-500 to-fuchsia-600", "from-emerald-500 to-cyan-600"][i / 2]
                    } ${i > 0 ? "-ml-3" : ""} ring-2 ring-card`}
                  />
                ))}
                <div className="-ml-3 flex size-9 items-center justify-center rounded-lg bg-foreground/10 text-[10px] font-bold ring-2 ring-card">
                  +29
                </div>
              </div>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard
              icon={History}
              label="Rediscover"
              footer="Songs you loved 2 years ago, resurfaced gently."
            >
              <p className="pt-1 font-display text-xl font-bold leading-snug">
                “Fix You” felt new again
              </p>
            </DnaCard>
          </StaggerItem>

          <StaggerItem>
            <DnaCard
              icon={Focus}
              label="Focus mix"
              footer="Built from your deep-work hours. Distraction-free by design."
            >
              <div className="flex items-center gap-2 pt-1">
                <p className="font-display text-xl font-bold">Flow State</p>
                <span className="flex gap-0.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="size-1 animate-pulse-soft rounded-full bg-accent-3"
                      style={{ animationDelay: `${i * 0.35}s` }}
                    />
                  ))}
                </span>
              </div>
            </DnaCard>
          </StaggerItem>
        </Stagger>

        <Reveal className="pt-10 text-center" delay={0.1}>
          <p className="mx-auto max-w-md text-sm text-muted-foreground">
            A preview of what ships next.{" "}
            <span className="text-foreground">No servers will be contacted in the making of these stats —</span>{" "}
            the way it should be.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
