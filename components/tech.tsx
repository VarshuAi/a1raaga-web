"use client";

import { useInView } from "framer-motion";
import {
  Activity,
  AudioWaveform,
  Cloud,
  Database,
  Gauge,
  Lock,
  Moon,
  Palette,
  Smartphone,
  Waves,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Counter } from "./counter";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

const TECH = [
  { icon: Smartphone, name: "Jetpack Compose", desc: "Declarative modern Android UI" },
  { icon: AudioWaveform, name: "Media3 / ExoPlayer", desc: "Low-latency 320 kbps engine" },
  { icon: Database, name: "Room SQLite DB", desc: "Type-safe relational storage" },
  { icon: Zap, name: "HTTP/3 & QUIC", desc: "Multiplexed stream transport" },
  { icon: Palette, name: "Material 3", desc: "Obsidian glass design system" },
  { icon: Cloud, name: "Cloud Extractor", desc: "High-speed audio resolver" },
  { icon: Waves, name: "Parametric EQ", desc: "5-Band equalizer & Bass Boost" },
  { icon: Moon, name: "MediaSession", desc: "Background & Lock Screen service" },
  { icon: Lock, name: "Local Privacy", desc: "Zero telemetry, 100% on-device" },
];

const PERF = [
  { icon: Gauge, value: 0.3, suffix: "s", label: "Cold start", decimals: true },
  { icon: Activity, value: 120, suffix: " fps", label: "Compose UI smoothness" },
  { icon: AudioWaveform, value: 320, suffix: " kbps", label: "Ultra HQ audio stream" },
  { icon: Zap, value: 5, prefix: "<", suffix: " ms", label: "Room DB query speed" },
];

const TERMINAL = [
  "$ ./gradlew assembleHttp3Release",
  "✓ Kotlin 2.x & Jetpack Compose compiler ready",
  "✓ HTTP/3 QUIC native transport linked",
  "✓ AndroidX Media3 audio pipeline verified",
  "✓ app-http3-release.apk — 35.90 MB",
  "$ a1swaara verify --all",
  "✓ Story Creator Studio: OK (9:16 & Video)",
  "✓ 320 kbps Fast Downloader: Ready",
];

const LINE_ENDS = TERMINAL.reduce<number[]>(
  (acc, line, i) => [...acc, (acc[i - 1] ?? 0) + line.length],
  []
);

function Terminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const total = LINE_ENDS[LINE_ENDS.length - 1];
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let cur = 0;
    const id = setInterval(() => {
      cur += 2;
      if (cur >= total) {
        cur = total;
        clearInterval(id);
      }
      setN(cur);
    }, 26);
    return () => clearInterval(id);
  }, [inView, total]);
  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#08080c] font-mono text-[12px] leading-relaxed shadow-2xl dark:bg-[#08080c]"
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="pl-2 text-[10.5px] text-white/40">a1swaara — gradle</span>
      </div>
      <div className="min-h-[196px] p-4 text-white/80">
        {TERMINAL.map((line, i) => {
          const start = i > 0 ? LINE_ENDS[i - 1] : 0;
          const take = Math.max(0, Math.min(line.length, n - start));
          const shown = line.slice(0, take);
          const isCmd = line.startsWith("$");
          return (
            <p key={line} className={isCmd ? "text-accent" : "text-white/45"}>
              {shown}
              {take > 0 && take < line.length && (
                <span className="ml-0.5 inline-block h-3 w-[7px] animate-pulse-soft bg-accent align-middle" />
              )}
            </p>
          );
        })}
        {n >= total && (
          <p className="text-accent">
            $ <span className="ml-0.5 inline-block h-3 w-[7px] animate-pulse-soft bg-accent align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#08080c] font-mono text-[12px] leading-[1.75] shadow-2xl dark:bg-[#08080c]">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
        <span className="text-[10.5px] text-white/40">service/PlayerService.kt</span>
        <span className="rounded bg-accent/20 px-2 py-0.5 text-[9.5px] font-bold text-accent">KOTLIN</span>
      </div>
      <pre className="overflow-x-auto p-4 text-white/75">
        <code>
          <span className="text-white/25">{"// High-Fidelity 320 kbps Stream Downloader & Cache"}</span>{"\n"}
          <span className="text-fuchsia-400">object</span> <span className="text-sky-300">SwaaraFastDownloader</span> <span className="text-white/60">{"{"}</span>{"\n"}
          {"  "}<span className="text-fuchsia-400">fun</span> <span className="text-amber-200">download</span><span className="text-white/60">(mediaItem: </span><span className="text-sky-300">MediaItem</span><span className="text-white/60">) {"{"}</span>{"\n"}
          {"    "}<span className="text-fuchsia-400">val</span> <span className="text-amber-200">stream</span> <span className="text-white/60">= </span><span className="text-emerald-300">resolveAudioStream</span><span className="text-white/60">(mediaItem.mediaId)</span>{"\n"}
          {"    "}<span className="text-sky-300">CacheWriter</span><span className="text-white/60">(cacheDataSource, dataSpec).</span><span className="text-emerald-300">cache</span><span className="text-white/60">()</span>{"\n"}
          {"    "}<span className="text-sky-300">Database</span><span className="text-white/60">.</span><span className="text-emerald-300">insert</span><span className="text-white/60">(mediaItem)</span>{"\n"}
          {"  "}<span className="text-white/60">{"}"}</span>{"\n\n"}
          <span className="text-white/25">{"// Social Story Creator Studio Export"}</span>{"\n"}
          <span className="text-fuchsia-400">fun</span> <span className="text-amber-200">exportStoryCard</span><span className="text-white/60">(bitmap: </span><span className="text-sky-300">Bitmap</span><span className="text-white/60">) = </span><span className="text-sky-300">FileProvider</span><span className="text-white/60">.</span><span className="text-emerald-300">getUri</span><span className="text-white/60">()</span>
        </code>
      </pre>
    </div>
  );
}

export function Tech() {
  return (
    <section id="tech" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Architecture"
          title={
            <>
              Built with <span className="text-gradient">modern Android precision.</span>
            </>
          }
          description="Modern Kotlin, Jetpack Compose, ExoPlayer Media3, and HTTP/3 QUIC protocol delivering pure acoustic excellence."
        />

        <div className="grid gap-4 pt-16 lg:grid-cols-2">
          <Reveal>
            <Terminal />
          </Reveal>
          <Reveal delay={0.1}>
            <CodeBlock />
          </Reveal>
        </div>

        {/* performance cards */}
        <Stagger className="mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4" delay={0.05}>
          {PERF.map((p) => (
            <StaggerItem key={p.label}>
              <div className="glass group h-full rounded-3xl p-5 transition-colors duration-300 hover:border-accent/30">
                <p.icon size={16} className="text-accent" />
                <p className="pt-3 font-display text-3xl font-bold tracking-tight">
                  {p.decimals ? (
                    <span>
                      0<span className="text-muted-foreground">.</span>3
                    </span>
                  ) : (
                    <Counter to={p.value} prefix={p.prefix ?? ""} suffix={p.suffix ?? ""} />
                  )}
                  {p.decimals && <span className="pl-0.5 text-lg text-muted-foreground">s</span>}
                </p>
                <p className="pt-1 text-xs uppercase tracking-wider text-muted-foreground">{p.label}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        {/* stack grid */}
        <Stagger className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-9" delay={0.1}>
          {TECH.map((t) => (
            <StaggerItem key={t.name}>
              <div className="glass group flex h-full flex-col items-center gap-2.5 rounded-3xl px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent/30">
                <div className="flex size-10 items-center justify-center rounded-2xl border border-foreground/10 bg-foreground/[0.04] transition-transform duration-300 group-hover:scale-110">
                  <t.icon size={17} className="text-accent" />
                </div>
                <p className="text-[13px] font-semibold leading-tight">{t.name}</p>
                <p className="text-[10.5px] leading-snug text-muted-foreground">{t.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
