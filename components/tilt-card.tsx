"use client";

import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Card with high-performance 3D tilt + cursor-tracking glow spotlight.
 * Uses GPU-accelerated CSS transforms to avoid main-thread spring physics overhead.
 */
export function TiltCard({
  children,
  className,
  innerClassName,
  intensity = 7,
  glow = true,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  intensity?: number;
  glow?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * (intensity * 2);
    const ry = (px - 0.5) * (intensity * 2);

    el.style.transform = `perspective(1200px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
    el.style.transition = "transform 0.08s ease-out";

    if (glow && glowRef.current) {
      glowRef.current.style.opacity = "1";
      glowRef.current.style.background = `radial-gradient(280px circle at ${
        e.clientX - r.left
      }px ${e.clientY - r.top}px, color-mix(in oklab, var(--accent-2) 13%, transparent), transparent 70%)`;
    }
  }

  function onLeave() {
    const el = ref.current;
    if (el) {
      el.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg)";
      el.style.transition = "transform 0.4s ease-out";
    }
    if (glowRef.current) glowRef.current.style.opacity = "0";
  }

  return (
    <div style={{ perspective: 1200 }} className={cn("group h-full", className)}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ transformStyle: "preserve-3d" }}
        className={cn(
          "relative h-full overflow-hidden rounded-3xl border border-foreground/10 bg-card/70 backdrop-blur-xl transition-colors duration-300 group-hover:border-foreground/20 dark:bg-white/[0.03]",
          innerClassName
        )}
      >
        {glow && (
          <div
            ref={glowRef}
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500"
          />
        )}
        {/* top hairline highlight */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-foreground/25 to-transparent"
        />
        {children}
      </div>
    </div>
  );
}
