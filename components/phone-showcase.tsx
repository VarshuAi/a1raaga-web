"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { ChevronsDown } from "lucide-react";
import { PhoneFrame } from "./phone";
import { EASE, Reveal } from "./reveal";
import { HomeReal, LyricsReal, PlayerReal, QueueReal, SearchReal, SettingsReal } from "./screens/real";

const STEPS = [
  {
    k: "home",
    label: "Home",
    title: "Discover, tuned to you.",
    desc: "Your languages, spotlight releases, trending near you and a mini player that never gets in the way — the moment you open the app.",
    Screen: HomeReal,
  },
  {
    k: "search",
    label: "Search",
    title: "Search that thinks in music.",
    desc: "Voice search, recent searches as one-tap chips, and a live Trending Now feed — half-remembered lyrics, misspellings, it just finds it.",
    Screen: SearchReal,
  },
  {
    k: "player",
    label: "Player",
    title: "A player that breathes.",
    desc: "Song/Lyrics toggle up top, HD streaming badge, big tactile controls — the last 8 seconds matter as much as the first. Straight from the real app.",
    Screen: PlayerReal,
  },
  {
    k: "lyrics",
    label: "Lyrics",
    title: "Lyrics, perfectly in sync.",
    desc: "Line-by-line synced lyrics with the current line lit up in artwork colors. Karaoke mode for the shower concerts — straight from the real app.",
    Screen: LyricsReal,
  },
  {
    k: "queue",
    label: "Queue",
    title: "A queue you actually control.",
    desc: "One swipe and your whole queue is a drag away — reorder with handles, skip with a tap. 62 songs deep, zero friction.",
    Screen: QueueReal,
  },
  {
    k: "settings",
    label: "Settings",
    title: "Tuned to the last bit.",
    desc: "Appearance, playback, downloads and backups — every knob you’d want, none of the clutter you wouldn’t. Straight from the real app.",
    Screen: SettingsReal,
  },
];

export function PhoneShowcase() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const [idx, setIdx] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const i = Math.min(STEPS.length - 1, Math.max(0, Math.floor(v * STEPS.length)));
    if (i !== idx) setIdx(i);
  });

  const phoneTilt = useSpring(useTransform(scrollYProgress, [0, 1], [-3.5, 3.5]), {
    stiffness: 70,
    damping: 18,
  });
  const railFill = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const step = STEPS[idx];

  return (
    <section id="showcase" className="relative">
      <div className="mx-auto max-w-3xl px-6 pb-3 pt-20 text-center sm:pb-8 sm:pt-28">
        <Reveal>
          <span className="dot-matrix inline-flex items-center gap-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-[11px] font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_12px_var(--glow)]" />
            The tour
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="pt-5 font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl">
            Scroll through <span className="text-gradient">the whole app.</span>
          </h2>
        </Reveal>
      </div>

      <div ref={targetRef} className="relative" style={{ height: `${STEPS.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden [@supports(height:100svh)]:h-[100svh]">
          {/* ambience */}
          <div aria-hidden className="absolute inset-0">
            <div className="absolute left-1/2 top-1/2 size-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-20 blur-3xl" />
            <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-6 px-6 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
            {/* Step copy — desktop */}
            <div className="hidden min-h-[220px] lg:block">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={step.k}
                    initial={{ opacity: 0, y: 34 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -28 }}
                    transition={{ duration: 0.5, ease: EASE }}
                  >
                  <p className="dot-matrix pb-4 text-[11px] font-medium text-accent-2">
                    {String(idx + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")} — {step.label}
                  </p>
                  <h3 className="font-display text-4xl font-semibold leading-[1.08] tracking-[-0.03em] xl:text-[2.9rem]">
                    {step.title}
                  </h3>
                  <p className="max-w-sm pt-4 leading-relaxed text-muted-foreground">{step.desc}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky phone */}
            <motion.div
              style={{ rotate: phoneTilt }}
              className="origin-center scale-[0.68] min-[420px]:scale-[0.74] sm:scale-[0.85] lg:scale-[0.9] xl:scale-100"
            >
              <PhoneFrame>
                <AnimatePresence mode="sync" initial={false}>
                  <motion.div
                    key={step.k}
                    className="absolute inset-0 transform-gpu"
                    initial={{ opacity: 0, y: 56, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -44, scale: 0.98 }}
                    transition={{ duration: 0.55, ease: EASE }}
                  >
                    <step.Screen />
                  </motion.div>
                </AnimatePresence>
              </PhoneFrame>
            </motion.div>

            {/* Stepper rail — desktop */}
            <div className="hidden justify-center lg:flex">
              <div className="flex gap-5">
                <div className="relative w-px self-stretch bg-foreground/10">
                  <motion.div
                    style={{ scaleY: railFill }}
                    className="absolute inset-0 origin-top bg-gradient-to-b from-accent via-accent-2 to-accent-3"
                  />
                </div>
                <ul className="flex flex-col justify-between gap-1 py-1">
                  {STEPS.map((s, i) => (
                    <li key={s.k} className="flex items-center gap-3 py-2">
                      <span
                        className={
                          i === idx
                            ? "size-2 rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_10px_var(--glow)] transition-all"
                            : i < idx
                              ? "size-1.5 rounded-full bg-foreground/40 transition-all"
                              : "size-1.5 rounded-full bg-foreground/15 transition-all"
                        }
                      />
                      <span
                        className={`text-sm transition-colors duration-300 ${
                          i === idx ? "font-medium text-foreground" : "text-muted-foreground/60"
                        }`}
                      >
                        {s.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Step copy — mobile overlay */}
          <div className="absolute inset-x-4 bottom-5 z-20 lg:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={step.k}
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="glass rounded-2xl p-4"
              >
                <p className="dot-matrix pb-1.5 text-[10px] font-medium text-accent-2">
                  {String(idx + 1).padStart(2, "0")} / {String(STEPS.length).padStart(2, "0")} — {step.label}
                </p>
                <h3 className="font-display text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="line-clamp-2 pt-1 text-xs leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
                <p className="mt-2.5 flex items-center justify-between border-t border-foreground/10 pt-2.5 text-[10px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <ChevronsDown size={12} className="animate-bounce text-accent-2" />
                    {idx < STEPS.length - 1 ? "Keep scrolling for the next screen" : "Almost there — keep going"}
                  </span>
                  {idx + 1}/{STEPS.length}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Scroll hint — desktop */}
          <div className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 lg:flex">
            <p className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <ChevronsDown size={13} className="animate-bounce text-accent-2" />
              {idx < STEPS.length - 1 ? "Scroll for the next screen" : "Continue to features"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
