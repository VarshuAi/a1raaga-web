"use client";

import type { LucideIcon } from "lucide-react";
import {
  ArrowDownToLine,
  ArrowLeftRight,
  AudioWaveform,
  BarChart3,
  Fingerprint,
  LayoutGrid,
  ListMusic,
  Play,
  Radio,
  Search,
  Sparkles,
  Waves,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Stagger, StaggerItem } from "./reveal";
import { TiltCard } from "./tilt-card";
import { cn } from "@/lib/utils";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span?: boolean;
  accent?: boolean;
  tag?: string;
};

const FEATURES: Feature[] = [
  {
    icon: AudioWaveform,
    title: "320k HD Streaming",
    desc: "Crystal-clear 320 kbps sound with adaptive bitrate that follows your network — flawless on metro Wi-Fi, smooth on patchy 4G. The cloud engine does the heavy lifting; you just press play.",
    span: true,
    accent: true,
  },
  {
    icon: Fingerprint,
    title: "Raaga DNA",
    desc: "A taste engine that lives on your phone and learns what moves you — privately.",
    tag: "Next update",
  },
  {
    icon: Search,
    title: "Smart Search",
    desc: "FTS5-powered full-text search. Find any of 10,000 songs in under 5ms — even misspelled.",
  },
  {
    icon: Waves,
    title: "Gapless Playback",
    desc: "Albums flow exactly as the artist sequenced them. No clicks, no silence, ever.",
  },
  {
    icon: ArrowLeftRight,
    title: "Crossfade",
    desc: "Blend tracks into each other with adjustable curves from 0–12 seconds.",
  },
  {
    icon: ListMusic,
    title: "Smart Queue",
    desc: "Drag to reorder, swipe to remove, and let DNA refill it when the music runs out.",
    span: true,
  },
  {
    icon: LayoutGrid,
    title: "Widgets",
    desc: "Material You home-screen widgets that match your wallpaper’s palette.",
  },
  {
    icon: Play,
    title: "Background Playback",
    desc: "Keeps playing while you live your life. Battery sipping, not gulping.",
  },
  {
    icon: ArrowDownToLine,
    title: "Download Manager",
    desc: "Queue downloads, pick quality per album, resume anything. Up to lossless FLAC.",
  },
  {
    icon: Radio,
    title: "Radio",
    desc: "Start a station from any song, artist or mood — generated locally from your library.",
  },
  {
    icon: Sparkles,
    title: "Smart Playlists",
    desc: "Rules like “genre is lo-fi AND plays < 3” auto-build playlists that update themselves.",
  },
  {
    icon: BarChart3,
    title: "Insights",
    desc: "Beautiful listening stats — streaks, top artists, night-owl score — zero data leaves the device.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Features"
          title={
            <>
              Twelve reasons you’ll <span className="text-gradient">never go back.</span>
            </>
          }
          description="No feature farms a click. Everything in Raaga exists to make listening feel effortless."
        />

        <Stagger className="grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {FEATURES.map((f) => (
            <StaggerItem key={f.title} className={cn(f.span && "sm:col-span-2")}>
              <TiltCard innerClassName={cn("p-6", f.accent && "border-accent-2/25")}>
                {f.tag && (
                  <span className="absolute right-4 top-4 rounded-full border border-accent-2/35 bg-accent-2/10 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent-2">
                    {f.tag}
                  </span>
                )}
                {f.accent && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-40 blur-2xl"
                  />
                )}
                <div className="relative flex h-full flex-col" style={{ transform: "translateZ(30px)" }}>
                  <div className="flex size-11 items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] to-transparent transition-transform duration-300 group-hover:scale-110">
                    <f.icon size={19} className="text-accent-2" strokeWidth={1.9} />
                  </div>
                  <h3 className="pt-4 font-display text-lg font-semibold tracking-tight">
                    {f.title}
                  </h3>
                  <p className="pt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
