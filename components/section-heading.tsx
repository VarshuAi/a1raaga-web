import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "relative z-10 flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <Reveal>
        <span className="dot-matrix inline-flex items-center gap-2.5 rounded-full border border-foreground/10 bg-foreground/[0.03] px-4 py-2 text-[11px] font-medium text-muted-foreground backdrop-blur">
          <span className="size-1.5 rounded-full bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_12px_var(--glow)]" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="max-w-3xl font-display text-4xl font-semibold leading-[1.06] tracking-[-0.03em] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
