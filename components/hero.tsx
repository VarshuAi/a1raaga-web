"use client";

import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChevronsDown, Download, Sparkles } from "lucide-react";
import { PhoneFrame } from "./phone";
import { GithubIcon } from "./brand";
import { PlayerReal } from "./screens/real";
import { Button } from "./ui/button";
import { EASE } from "./reveal";
import { APK_URL as DEFAULT_APK_URL, GITHUB_PROFILE } from "@/lib/site";

const HEADLINE = [
  { text: "Feel every" },
  { text: "beat of", gradient: false },
  { text: "your music.", gradient: true },
];

const STATS = [
  { value: "4.9", label: "Play rating" },
  { value: "28.2", label: "MB APK" },
  { value: "0", label: "Data collected" },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 16, mass: 0.8 });
  const sy = useSpring(my, { stiffness: 50, damping: 16, mass: 0.8 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-7, 7]);
  const bgX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const bgY = useTransform(sy, [-0.5, 0.5], [-16, 16]);

  const [version, setVersion] = useState("1.0.0");
  const [apkUrl, setApkUrl] = useState(DEFAULT_APK_URL);
  const [tagline, setTagline] = useState("Voice Search, Developer settings & Autoplay updates");

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/VarshuAi/raagaplayer/main/release-info.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.version) setVersion(data.version);
        if (data.apkUrl) setApkUrl(data.apkUrl);
        if (data.releaseNotes) {
          const lines = data.releaseNotes.split("\n");
          if (lines.length > 0) {
            setTagline(lines[0].replace("•", "").trim());
          }
        }
      })
      .catch(() => {});
  }, []);

  function onMouse(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <section
      id="top"
      onMouseMove={onMouse}
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32"
    >
      {/* backdrop */}
      <motion.div aria-hidden style={{ x: bgX, y: bgY }} className="absolute inset-0">
        <div className="absolute left-[8%] top-[12%] size-[320px] animate-blob rounded-full bg-accent-2/20 blur-[80px] md:size-[460px] md:blur-[130px]" />
        <div className="absolute right-[4%] top-[30%] size-[300px] animate-blob-slow rounded-full bg-accent-3/20 blur-[80px] md:size-[420px] md:blur-[130px]" />
        <div className="absolute bottom-[-6%] left-[30%] size-[280px] animate-blob rounded-full bg-accent/15 blur-[90px] [animation-delay:3s] md:size-[380px] md:blur-[140px]" />
      </motion.div>
      <div className="bg-grid absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          className="flex flex-col items-start"
        >
          <motion.div variants={badgeVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/[0.03] py-1.5 pl-1.5 pr-4 text-xs text-muted-foreground backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-2.5 py-0.5 text-[10px] font-bold text-white">
                NEW
              </span>
              v{version} is live — {tagline}
            </span>
          </motion.div>

          <h1 className="pt-7 font-display text-[13.5vw] font-semibold leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.4rem]">
            {HEADLINE.map((w) => (
              <motion.span key={w.text} variants={badgeVariants} className="block">
                {w.gradient ? <span className="text-gradient pb-1">{w.text}</span> : w.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={badgeVariants}
            className="max-w-md pt-6 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Raaga is an online music player with 320k HD streaming, synced lyrics
            and discovery in your languages. Free forever — no ads, no account,
            nothing to sign up to.
          </motion.p>

          <motion.div variants={badgeVariants} className="flex flex-wrap items-center gap-3 pt-9">
            <a href={apkUrl} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="group/btn">
                <Download className="group-hover/btn:-translate-y-0.5" />
                Download APK
              </Button>
            </a>
            <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="group/fl">
                <span className="flex size-6 items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-2 transition-transform group-hover/fl:scale-110 [&_svg]:text-white">
                  <GithubIcon size={13} />
                </span>
                Follow me
              </Button>
            </a>
          </motion.div>

          <motion.dl
            variants={badgeVariants}
            className="grid w-full max-w-md grid-cols-3 gap-4 pt-12"
          >
            {STATS.map((s) => (
              <div key={s.label} className="border-l border-foreground/10 pl-3">
                <dt className="order-2 pt-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </dt>
                <dd className="font-display text-xl font-semibold sm:text-2xl">{s.value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Floating phone */}
        <div className="relative mx-auto hidden justify-center sm:flex" style={{ perspective: 1400 }}>
          <motion.div
            initial={{ opacity: 0, y: 90, rotate: -6 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
          >
            <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}>
              <div className="animate-float">
                <PhoneFrame>
                  <PlayerReal />
                </PhoneFrame>
              </div>
            </motion.div>
          </motion.div>

          {/* floating chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6, ease: EASE }}
            className="glass absolute -left-6 top-[16%] animate-float-delayed rounded-2xl px-3.5 py-2 text-xs font-medium shadow-xl"
          >
            <span className="flex items-center gap-1.5">
              <Sparkles size={12} className="text-accent" /> Raaga DNA
              <span className="rounded-full bg-accent-2/15 px-1.5 py-px text-[8px] font-bold uppercase tracking-wider text-accent-2">Soon</span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: EASE }}
            className="glass absolute -right-4 top-[58%] animate-float rounded-2xl px-3.5 py-2 text-xs font-medium shadow-xl [animation-delay:1.8s]"
          >
            320k HD streaming
          </motion.div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* scroll hint */}
      <motion.a
        href="#showcase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground"
      >
        Scroll to explore
        <ChevronsDown size={15} className="animate-bounce text-accent-2" />
      </motion.a>
    </section>
  );
}
