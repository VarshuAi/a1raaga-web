"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, type ComponentType } from "react";
import { SectionHeading } from "./section-heading";
import { EASE } from "./reveal";
import { InsightsScreen } from "./screens/insights";
import { HomeReal, LyricsReal, PlayerReal, QueueReal, SearchReal, SettingsReal } from "./screens/real";
import { LibraryScreen } from "./screens/library";

import { cn } from "@/lib/utils";

/**
 * Add a future screenshot by dropping one entry here — filtering,
 * layout and animations pick it up automatically.
 */
const SHOTS: { cat: string; title: string; caption: string; Screen: ComponentType }[] = [
  { cat: "Home", title: "Discover", caption: "Real app screenshot", Screen: HomeReal },
  { cat: "Player", title: "Player", caption: "Real app screenshot", Screen: PlayerReal },
  { cat: "Lyrics", title: "Lyrics", caption: "Real app screenshot", Screen: LyricsReal },
  { cat: "Search", title: "Search", caption: "Real app screenshot", Screen: SearchReal },
  { cat: "Library", title: "Library", caption: "Playlists & downloads", Screen: LibraryScreen },
  { cat: "Settings", title: "Settings", caption: "Real app screenshot", Screen: SettingsReal },
  { cat: "Queue", title: "Play Queue", caption: "Real app screenshot", Screen: QueueReal },
  { cat: "Insights", title: "Insights", caption: "Stats, 100% local", Screen: InsightsScreen },
];

const CATS = ["All", ...SHOTS.map((s) => s.cat)];

export function Screenshots() {
  const [cat, setCat] = useState("All");
  const scrollerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  // gentle page-scroll parallax across the whole row
  const drift = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const visible = cat === "All" ? SHOTS : SHOTS.filter((s) => s.cat === cat);

  const nudge = (dir: number) =>
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section id="screenshots" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0">
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-foreground/15 to-transparent" />
        <div className="absolute -left-24 top-1/3 size-[400px] animate-blob-slow rounded-full bg-accent-3/12 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Screenshots"
          title={
            <>
              Every pixel, <span className="text-gradient">obsessed over.</span>
            </>
          }
          description="Real in-app UI — not mockups. AMOLED blacks, Material 3 motion, and light exactly where it earns its place."
        />

        {/* category filter */}
        <div className="mask-fade-x mt-12 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {CATS.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300",
                cat === c
                  ? "border-transparent bg-gradient-to-r from-accent to-accent-2 text-white shadow-[0_6px_24px_-6px_var(--glow)]"
                  : "border-foreground/10 bg-foreground/[0.03] text-muted-foreground hover:border-foreground/25 hover:text-foreground"
              )}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto hidden shrink-0 gap-2 md:flex">
            <button
              onClick={() => nudge(-1)}
              aria-label="Scroll left"
              className="flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] transition-colors hover:border-foreground/25"
            >
              <ChevronLeft size={15} />
            </button>
            <button
              onClick={() => nudge(1)}
              aria-label="Scroll right"
              className="flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] transition-colors hover:border-foreground/25"
            >
              <ChevronRight size={15} />
            </button>
          </div>
        </div>
      </div>

      {/* horizontal gallery */}
      <motion.div style={{ x: drift }} className="relative mt-8">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-6 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.figure
                layout
                key={s.cat}
                initial={{ opacity: 0, y: 44 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: Math.min(i * 0.06, 0.3), ease: EASE }}
                whileHover="hover"
                className="group w-[248px] shrink-0 snap-center"
              >
                {/* device-ish glass frame */}
                <div className="relative overflow-hidden rounded-[2.2rem] border border-foreground/12 bg-gradient-to-b from-foreground/[0.07] to-transparent p-[9px] shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)] transition-colors duration-500 group-hover:border-accent-2/40">
                  <div className="pointer-events-none absolute inset-0 z-10 rounded-[2.2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]" />
                  <div className="relative h-[500px] overflow-hidden rounded-[1.7rem] bg-black">
                    <motion.div
                      variants={{ hover: { scale: 1.05, y: -8 } }}
                      transition={{ duration: 0.55, ease: EASE }}
                      className="h-full"
                    >
                      <s.Screen />
                    </motion.div>
                    {/* zoom veil */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </div>
                <figcaption className="flex items-center justify-between px-2 pt-4">
                  <div>
                    <p className="text-sm font-semibold">{s.title}</p>
                    <p className="text-xs text-muted-foreground">{s.caption}</p>
                  </div>
                  <span className="rounded-full border border-foreground/10 bg-foreground/[0.03] px-2.5 py-1 text-[10px] font-medium text-muted-foreground">
                    {s.cat}
                  </span>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
