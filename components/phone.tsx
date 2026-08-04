import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Premium phone frame: Dynamic Island, machined-metal bezel,
 * screen reflection and deep soft shadows.
 */
export function PhoneFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-[318px]", className)}>
      {/* halo */}
      <div
        aria-hidden
        className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-25 blur-2xl"
      />
      {/* side buttons */}
      <div aria-hidden className="absolute -left-[2.5px] top-[120px] h-8 w-[3px] rounded-l-md bg-zinc-600" />
      <div aria-hidden className="absolute -left-[2.5px] top-[168px] h-12 w-[3px] rounded-l-md bg-zinc-600" />
      <div aria-hidden className="absolute -right-[2.5px] top-[140px] h-16 w-[3px] rounded-r-md bg-zinc-600" />
      {/* body */}
      <div className="relative rounded-[54px] bg-gradient-to-b from-zinc-500 via-zinc-700 to-zinc-800 p-[3px] shadow-[0_50px_100px_-24px_rgba(0,0,0,0.9)]">
        <div className="rounded-[51px] bg-zinc-950 p-[9px]">
          <div className="relative h-[648px] w-full overflow-hidden rounded-[42px] bg-black ring-1 ring-white/10">
            {/* Dynamic Island */}
            <div className="absolute left-1/2 top-[11px] z-40 flex h-[25px] w-[96px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2.5 ring-1 ring-white/[0.08] shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              <div className="size-1.5 rounded-full bg-zinc-800 ring-1 ring-zinc-700" />
            </div>
            {/* screen content */}
            <div className="absolute inset-0">{children}</div>
            {/* reflection */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-50 rounded-[42px] bg-[linear-gradient(115deg,rgba(255,255,255,0.09)_0%,transparent_22%,transparent_70%,rgba(255,255,255,0.04)_100%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-10 top-0 z-50 h-24 bg-gradient-to-b from-white/[0.05] to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
