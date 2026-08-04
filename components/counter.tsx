"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { EASE } from "./reveal";

/**
 * Animated number counter that starts when scrolled into view.
 */
export function Counter({
  to,
  duration = 2.2,
  prefix = "",
  suffix = "",
  className,
}: {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) =>
    `${prefix}${Math.round(v).toLocaleString("en-IN")}${suffix}`
  );

  useEffect(() => {
    if (!inView) return;
    const controls = animate(value, to, { duration, ease: EASE });
    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
}
