"use client";

import {
  Languages,
  Mic2,
  Sliders,
  Sparkles,
  Video,
  Zap,
} from "lucide-react";
import type { ReactNode } from "react";
import { Counter } from "./counter";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { TiltCard } from "./tilt-card";

const HIGHLIGHTS = [
  { icon: Video, label: "Story Creator Studio (9:16 & Video)" },
  { icon: Zap, label: "320 kbps Stream Downloader" },
  { icon: Mic2, label: "Synced Karaoke Lyrics" },
  { icon: Languages, label: "12-Language Regional Matrix" },
];

function Sparkline() {
  return (
    <svg viewBox="0 0 120 36" className="h-9 w-full" fill="none" aria-hidden>
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff2daa" />
          <stop offset="1" stopColor="#8b35ff" />
        </linearGradient>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ff2daa" stopOpacity="0.35" />
          <stop offset="1" stopColor="#ff2daa" stopOpacity="0" />
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

function StudioCard({
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
          <Icon size={13} className="text-accent" />
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
            <span className="dot-matrix inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2 text-[11px] font-medium text-accent">
              <Sparkles size={12} />
              Swaara Sound & Social Studio
              <span className="rounded-full bg-accent/20 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.18em]">
                Flagship
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="pt-6 font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Pure Sound.
              <br />
              <span className="text-gradient">Social Studio.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="pt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              ✦ Built for Audiophiles & Creators ✦
            </p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="max-w-xl pt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              A1 Swaara brings you unmatched 320 kbps fidelity, direct native stream downloads, and a dedicated Social Story Creator to share music cards and video clips to Instagram and WhatsApp with one tap.
            </p>
          </Reveal>
          <Stagger className="flex flex-wrap items-center justify-center gap-2.5 pt-8" delay={0.2}>
            {HIGHLIGHTS.map((p) => (
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
            <StudioCard
              icon={Video}
              label="Story Creator"
              footer="Export vertical 9:16 cards & 30s/60s video snippets with artwork."
            >
              <div className="flex items-center gap-3 pt-1">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display text-lg font-bold text-white shadow-[0_8px_24px_-6px_var(--glow)]">
                  9:16
                </div>
                <div className="min-w-0">
                  <p className="truncate font-display text-base font-bold">Instagram & WA</p>
                  <p className="text-[11px] text-accent">1-Tap Story Share</p>
                </div>
              </div>
            </StudioCard>
          </StaggerItem>

          <StaggerItem>
            <StudioCard icon={Zap} label="Downloader" big>
              <p className="font-display text-4xl font-bold tracking-tight">
                <Counter to={320} />
                <span className="pl-1 text-base font-semibold text-muted-foreground">kbps</span>
              </p>
              <div className="pt-3">
                <Sparkline />
              </div>
            </StudioCard>
          </StaggerItem>

          <StaggerItem>
            <StudioCard icon={Languages} label="Language Matrix" big>
              <p className="font-display text-2xl font-bold tracking-tight">12 Languages</p>
              <div className="space-y-2 pt-3">
                {[
                  ["Kannada & Hindi", 95],
                  ["Tamil & Telugu", 88],
                  ["Punjabi & Malayalam", 76],
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
            </StudioCard>
          </StaggerItem>

          <StaggerItem>
            <StudioCard
              icon={Sliders}
              label="Parametric EQ"
              footer="5-Band frequency adjustment with Bass Boost."
            >
              <p className="font-display text-4xl font-bold tracking-tight">
                <Counter to={5} suffix="-Band" />
              </p>
              <p className="pt-1 text-[11px] text-muted-foreground">Hardware-accelerated presets</p>
            </StudioCard>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
