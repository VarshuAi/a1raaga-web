"use client";

import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
} from "framer-motion";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

/** Scroll progress hairline pinned to the top of the viewport. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[90] h-[2px] origin-left bg-gradient-to-r from-accent via-accent-2 to-accent-3"
    />
  );
}

/** Soft gradient glow that trails the cursor (desktop only). */
export function CursorGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 55, damping: 18, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 55, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy }}
      className="pointer-events-none fixed left-0 top-0 z-[5] -ml-[300px] -mt-[300px] hidden size-[600px] rounded-full opacity-60 md:block dark:opacity-100"
    >
      <div className="size-full rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--accent-2)_10%,transparent),transparent_62%)]" />
    </motion.div>
  );
}

/** Slow-drifting blurred gradient blobs used as section ambience. */
export function Aurora({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className
      )}
    >
      <div className="absolute -left-32 top-1/4 size-[300px] animate-blob rounded-full bg-accent-2/15 blur-[80px] md:size-[420px] md:blur-[120px]" />
      <div className="absolute right-[-10%] top-0 size-[280px] animate-blob-slow rounded-full bg-accent-3/15 blur-[80px] md:size-[380px] md:blur-[120px]" />
      <div className="absolute bottom-[-10%] left-1/3 size-[260px] animate-blob rounded-full bg-accent/12 blur-[90px] [animation-delay:4s] md:size-[360px] md:blur-[130px]" />
    </div>
  );
}

/** Film-grain overlay for the whole page (desktop only — blend modes tank mobile scroll). */
export function Grain() {
  return (
    <div
      aria-hidden
      className="bg-noise pointer-events-none fixed inset-0 z-[80] hidden opacity-[0.035] mix-blend-overlay md:block"
    />
  );
}
