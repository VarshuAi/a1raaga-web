"use client";

import { useInView } from "framer-motion";
import {
  Activity,
  AudioWaveform,
  Blocks,
  Cloud,
  Database,
  Gauge,
  Lock,
  Moon,
  Palette,
  Search,
  Smartphone,
  Waves,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Counter } from "./counter";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";

const TECH = [
  { icon: Smartphone, name: "Flutter", desc: "One codebase, native feel" },
  { icon: Palette, name: "Material 3", desc: "Dynamic color, adaptive UI" },
  { icon: Database, name: "Drift Database", desc: "Type-safe reactive SQLite" },
  { icon: Search, name: "FTS5 Search", desc: "Full-text, sub-5ms queries" },
  { icon: Blocks, name: "Plugin Architecture", desc: "Sources as plugins" },
  { icon: Cloud, name: "Cloud Engine", desc: "Raaga's streaming backbone" },
  { icon: Waves, name: "Adaptive Streaming", desc: "Bitrate follows bandwidth" },
  { icon: Moon, name: "Background Playback", desc: "AudioService, battery-aware" },
  { icon: Lock, name: "Encrypted Backup", desc: "AES-256, keys stay local" },
];

const PERF = [
  { icon: Gauge, value: 0.4, suffix: "s", label: "Cold start", decimals: true },
  { icon: Activity, value: 60, suffix: " fps", label: "Scroll & transitions" },
  { icon: Zap, value: 5, prefix: "<", suffix: " ms", label: "FTS5 search query" },
  { icon: AudioWaveform, value: 320, suffix: " kbps", label: "HD stream quality" },
];

const TERMINAL = [
  "$ flutter build apk --release",
  "✓ Building with sound null safety",
  "✓ Compiled 214 modules in 41.2s",
  "✓ app-release.apk — 28.24 MB",
  "$ raaga scan ~/Music",
  "✓ Indexed 10,482 tracks in 3.1s",
  "✓ FTS5 index ready — avg query 4.2ms",
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
      className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#0a0a0d] font-mono text-[12px] leading-relaxed shadow-2xl dark:bg-black/60"
    >
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="pl-2 text-[10.5px] text-white/40">raaga — zsh</span>
      </div>
      <div className="min-h-[196px] p-4 text-white/80">
        {TERMINAL.map((line, i) => {
          const start = i > 0 ? LINE_ENDS[i - 1] : 0;
          const take = Math.max(0, Math.min(line.length, n - start));
          const shown = line.slice(0, take);
          const isCmd = line.startsWith("$");
          return (
            <p key={line} className={isCmd ? "text-emerald-400" : "text-white/45"}>
              {shown}
              {take > 0 && take < line.length && (
                <span className="ml-0.5 inline-block h-3 w-[7px] animate-pulse-soft bg-emerald-400 align-middle" />
              )}
            </p>
          );
        })}
        {n >= total && (
          <p className="text-emerald-400">
            $ <span className="ml-0.5 inline-block h-3 w-[7px] animate-pulse-soft bg-emerald-400 align-middle" />
          </p>
        )}
      </div>
    </div>
  );
}

function CodeBlock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-foreground/10 bg-[#0a0a0d] font-mono text-[12px] leading-[1.75] shadow-2xl dark:bg-black/60">
      <div className="flex items-center justify-between border-b border-white/[0.06] bg-white/[0.03] px-4 py-2.5">
        <span className="text-[10.5px] text-white/40">lib/database/tables.dart</span>
        <span className="rounded bg-accent-2/15 px-2 py-0.5 text-[9.5px] font-bold text-accent-2">DRIFT</span>
      </div>
      <pre className="overflow-x-auto p-4 text-white/75">
        <code>
          <span className="text-white/25">{"// Every query type-checked at compile time"}</span>{"\n"}
          <span className="text-fuchsia-400">class</span> <span className="text-sky-300">Songs</span> <span className="text-fuchsia-400">extends</span> <span className="text-sky-300">Table</span> <span className="text-white/60">{"{"}</span>{"\n"}
          {"  "}<span className="text-sky-300">IntColumn</span> <span className="text-fuchsia-400">get</span> <span className="text-amber-200">id</span> <span className="text-white/60">=&gt;</span> <span className="text-emerald-300">integer</span><span className="text-white/60">().</span><span className="text-emerald-300">autoIncrement</span><span className="text-white/60">()();</span>{"\n"}
          {"  "}<span className="text-sky-300">TextColumn</span> <span className="text-fuchsia-400">get</span> <span className="text-amber-200">title</span> <span className="text-white/60">=&gt;</span> <span className="text-emerald-300">text</span><span className="text-white/60">()();</span>{"\n"}
          {"  "}<span className="text-sky-300">TextColumn</span> <span className="text-fuchsia-400">get</span> <span className="text-amber-200">artist</span> <span className="text-white/60">=&gt;</span> <span className="text-emerald-300">text</span><span className="text-white/60">().</span><span className="text-emerald-300">indexed</span><span className="text-white/60">()();</span>{"\n"}
          {"  "}<span className="text-sky-300">RealColumn</span> <span className="text-fuchsia-400">get</span> <span className="text-amber-200">affinity</span> <span className="text-white/60">=&gt;</span> <span className="text-emerald-300">real</span><span className="text-white/60">().</span><span className="text-emerald-300">withDefault</span><span className="text-white/60">(</span><span className="text-orange-300">const</span> <span className="text-emerald-300">Constant</span><span className="text-white/60">(</span><span className="text-orange-300">0.0</span><span className="text-white/60">))();</span>{"\n"}
          <span className="text-white/60">{"}"}</span>{"\n\n"}
          <span className="text-white/25">{"// Raaga DNA — taste model, on-device"}</span>{"\n"}
          <span className="text-fuchsia-400">final</span> <span className="text-amber-200">mix</span> <span className="text-white/60">=</span> <span className="text-fuchsia-400">await</span> <span className="text-amber-200">dna</span><span className="text-white/60">.</span><span className="text-emerald-300">dailyMix</span><span className="text-white/60">(limit:</span> <span className="text-orange-300">32</span><span className="text-white/60">);</span>
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
          eyebrow="Under the hood"
          title={
            <>
              Built like <span className="text-gradient">an instrument.</span>
            </>
          }
          description="Engineering choices you’ll feel but never see — until you check the source. It’s all open."
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
              <div className="glass group h-full rounded-3xl p-5 transition-colors duration-300 hover:border-accent-2/30">
                <p.icon size={16} className="text-accent-2" />
                <p className="pt-3 font-display text-3xl font-bold tracking-tight">
                  {p.decimals ? (
                    <span>
                      0<span className="text-muted-foreground">.</span>4
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
              <div className="glass group flex h-full flex-col items-center gap-2.5 rounded-3xl px-3 py-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent-2/30">
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
