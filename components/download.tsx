"use client";

import {
  ArrowUpRight,
  Calendar,
  Check,
  Copy,
  Download as DownloadIcon,
  FileCheck2,
  Package,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Aurora } from "./effects";
import { Reveal, Stagger, StaggerItem } from "./reveal";
import { SectionHeading } from "./section-heading";
import { Button } from "./ui/button";
import { APK_SIZE as DEFAULT_APK_SIZE, APK_URL as DEFAULT_APK_URL, RELEASES_URL, SHA256 as DEFAULT_SHA256 } from "@/lib/site";

export function DownloadSection() {
  const [copied, setCopied] = useState(false);
  const [version, setVersion] = useState("1.0.0");
  const [apkUrl, setApkUrl] = useState(DEFAULT_APK_URL);
  const [sha256, setSha256] = useState(DEFAULT_SHA256);
  const [apkSize, setApkSize] = useState(DEFAULT_APK_SIZE);
  const [releaseNotes, setReleaseNotes] = useState<string[]>([
    "Integrated native Voice Search directly via system recognizer.",
    "Added Developer Profile in settings (Insta: being.version & GitHub: varshuai).",
    "Autoplay recommendations match YT Music radio queues precisely.",
    "Added a pull-to-refresh dynamic shuffle on the Homepage.",
    "Added a refresh button in the Play Queue to regenerate recommendations.",
  ]);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/VarshuAi/raagaplayer/main/release-info.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.version) setVersion(data.version);
        if (data.apkUrl) setApkUrl(data.apkUrl);
        if (data.releaseNotes) {
          const notes = data.releaseNotes
            .split("\n")
            .map((line: string) => line.replace("•", "").trim())
            .filter((line: string) => line.length > 0);
          if (notes.length > 0) setReleaseNotes(notes);
        }
      })
      .catch(() => {});
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(sha256);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {}
  };

  const META = [
    { icon: Package, label: "APK size", value: apkSize },
    { icon: Smartphone, label: "Android", value: "8.0 and up" },
    { icon: Calendar, label: "Released", value: "Aug 7, 2026" },
    { icon: ShieldCheck, label: "Cost", value: "Free forever" },
  ];

  const INSTALL_STEPS = [
    { title: "Download the APK", desc: "Grab the latest release below — it’s signed and checksummed." },
    { title: "Allow this source", desc: "Android will ask once to allow installs from your browser." },
    { title: "Verify (optional)", desc: "Match the SHA-256 against the checksum shown here." },
    { title: "Press play", desc: "Open Raaga, pick your languages. That’s the entire setup." },
  ];

  const CHANGELOG = [
    {
      v: "Next",
      date: "Upcoming",
      title: "Raaga DNA",
      items: ["On-device taste engine", "Daily & mood mixes", "Listening insights — 100% local"],
      upcoming: true,
    },
    {
      v: `v${version}`,
      date: "Aug 7, 2026",
      title: "Lalith — Voice Search update",
      items: releaseNotes,
      current: true,
    },
    {
      v: "v1.4.0",
      date: "Jul 3, 2026",
      title: "Saarang",
      items: ["Insights rebuilt with yearly recap", "Word-level synced lyrics", "Crossfade curves up to 12s"],
    },
  ];

  return (
    <section id="download" className="relative overflow-hidden py-28 sm:py-36">
      <Aurora />
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Download"
          title={
            <>
              Press play <span className="text-gradient">in 30 seconds.</span>
            </>
          }
          description="Free forever. No sign up, no ads, no catch — because there’s nothing to sign up to."
        />

        <div className="grid gap-4 pt-16 lg:grid-cols-5">
          {/* main card */}
          <Reveal className="lg:col-span-3">
            <div className="glass relative h-full overflow-hidden rounded-3xl p-7 sm:p-9">
              <div
                aria-hidden
                className="absolute -right-20 -top-20 size-72 animate-pulse-soft rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-50 blur-3xl"
              />
              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Latest
                  </span>
                  <h3 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">v{version}</h3>
                  <span className="rounded-full border border-foreground/12 px-3 py-1 font-mono text-[11px] text-muted-foreground">
                    “Lalith”
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-8 sm:grid-cols-4">
                  {META.map((m) => (
                    <div key={m.label} className="rounded-2xl border border-foreground/10 bg-foreground/[0.02] p-3.5">
                      <m.icon size={15} className="text-accent-2" />
                      <p className="pt-2.5 font-display text-sm font-semibold">{m.value}</p>
                      <p className="text-[10.5px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-8">
                  <a href={apkUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="group/dl">
                      <DownloadIcon className="group-hover/dl:-translate-y-0.5" />
                      Download APK
                    </Button>
                  </a>
                  <a href={RELEASES_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="ghost" className="group/al">
                      All releases
                      <ArrowUpRight className="group-hover/al:translate-x-0.5 group-hover/al:-translate-y-0.5" />
                    </Button>
                  </a>
                </div>

                {/* checksum */}
                <div className="mt-8 rounded-2xl border border-foreground/10 bg-black/20 p-3.5 dark:bg-black/40">
                  <div className="flex items-center gap-3">
                    <FileCheck2 size={15} className="shrink-0 text-accent" />
                    <p className="font-mono text-[11px] font-bold text-foreground/80">SHA-256</p>
                    <button
                      onClick={copy}
                      aria-label="Copy checksum"
                      className="ml-auto flex size-8 shrink-0 items-center justify-center rounded-full border border-foreground/10 transition-all hover:border-foreground/30 hover:bg-foreground/5"
                    >
                      {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                    </button>
                  </div>
                  <p className="pt-2 break-all font-mono text-[11px] leading-relaxed text-muted-foreground">
                    {sha256}
                  </p>
                </div>

                <p className="flex items-center gap-2 pt-4 text-xs text-muted-foreground">
                  <ShieldCheck size={13} className="text-emerald-400" />
                  Signed release · verified on VirusTotal
                </p>
              </div>
            </div>
          </Reveal>

          {/* changelog timeline */}
          <Reveal className="lg:col-span-2" delay={0.1}>
            <div className="glass h-full rounded-3xl p-6 sm:p-7">
              <h4 className="font-display text-lg font-semibold">Version timeline</h4>
              <div className="relative mt-5 space-y-6 pl-5 before:absolute before:bottom-1 before:left-[5px] before:top-1 before:w-px before:bg-gradient-to-b before:from-accent before:via-foreground/15 before:to-transparent">
                {CHANGELOG.map((c) => (
                  <div key={c.v} className="relative">
                    <span
                      className={`absolute -left-5 top-1 rounded-full ${
                        c.upcoming
                          ? "size-[11px] animate-pulse-soft bg-gradient-to-r from-accent-3 to-accent-2 shadow-[0_0_14px_rgba(139,92,246,0.6)]"
                          : c.current
                            ? "size-[11px] bg-gradient-to-r from-accent to-accent-2 shadow-[0_0_12px_var(--glow)]"
                            : "size-[9px] translate-x-[1px] bg-foreground/25"
                      }`}
                    />
                    <div className="flex items-baseline justify-between gap-2">
                      <p className="font-display text-sm font-bold">
                        {c.v}
                        <span className="pl-2 text-xs font-medium text-muted-foreground">{c.title}</span>
                        {c.upcoming && (
                          <span className="ml-2 rounded-full border border-accent-3/40 bg-accent-3/10 px-2 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent-3">
                            Next update
                          </span>
                        )}
                      </p>
                      <span className={`shrink-0 font-mono text-[10px] ${c.upcoming ? "text-gradient font-bold" : "text-muted-foreground"}`}>
                        {c.date}
                      </span>
                    </div>
                    <ul className="space-y-1 pt-1.5">
                      {c.items.map((i) => (
                        <li key={i} className="text-[12.5px] leading-snug text-muted-foreground">
                          · {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* quote + install guide */}
        <Reveal className="pt-20 text-center">
          <blockquote className="mx-auto max-w-2xl">
            <p className="font-display text-3xl font-medium leading-snug tracking-tight sm:text-4xl">
              “Where words fail,
              <br />
              <span className="text-gradient">music speaks.”</span>
            </p>
            <footer className="dot-matrix pt-4 text-[10px] text-muted-foreground">
              Hans Christian Andersen
            </footer>
          </blockquote>
        </Reveal>
        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.1}>
          {INSTALL_STEPS.map((s) => (
            <StaggerItem key={s.title}>
              <div className="glass group h-full rounded-3xl p-5 transition-colors duration-300 hover:border-accent-2/30">
                <span className="block h-1 w-8 rounded-full bg-gradient-to-r from-accent to-accent-2 transition-all duration-300 group-hover:w-14" />
                <p className="pt-3 font-display text-base font-semibold">{s.title}</p>
                <p className="pt-1.5 text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
