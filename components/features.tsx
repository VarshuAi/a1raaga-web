"use client\";

import type { LucideIcon } from \"lucide-react\";
import {
  ArrowDownToLine,
  AudioWaveform,
  Equalizer as EqualizerIcon,
  Globe,
  Headphones,
  Languages,
  Layers,
  ListMusic,
  Radio,
  Share2,
  Sliders,
  Sparkles,
  Video,
  Zap,
} from \"lucide-react\";
import { SectionHeading } from \"./section-heading\";
import { Stagger, StaggerItem } from \"./reveal\";
import { TiltCard } from \"./tilt-card\";
import { cn } from \"@/lib/utils\";

type Feature = {
  icon: LucideIcon;
  title: string;
  desc: string;
  span?: boolean;
  accent?: boolean;
  tag?: string;
};

const FEATURES: Feature[] = [
  {
    icon: AudioWaveform,
    title: \"320 kbps Ultra HQ Audio\",
    desc: \"Studio-fidelity audio streaming powered by AndroidX Media3 (ExoPlayer) with automatic bitrate adaptation up to 320 kbps.\",
    span: true,
    accent: true,
  },
  {
    icon: Video,
    title: \"Story Creator Studio\",
    desc: \"Create 9:16 vertical Instagram & WhatsApp story cards with ambient glow, and export 30s/60s music video snippets in 1 tap.\",
    span: true,
    accent: true,
    tag: \"Flagship\",
  },
  {
    icon: ArrowDownToLine,
    title: \"High-Speed Stream Downloader\",
    desc: \"Direct chunk downloader that writes directly to the shared ExoPlayer cache with real-time percentage progress.\",
  },
  {
    icon: Sparkles,
    title: \"Synced Karaoke Lyrics\",
    desc: \"Real-time synchronized karaoke lyrics with dynamic smooth auto-scrolling and instant player/lyrics toggle.\",
  },
  {
    icon: Languages,
    title: \"12-Language Matrix\",
    desc: \"Onboarding & discovery in Kannada, Hindi, Tamil, Telugu, Punjabi, Malayalam, Marathi, Bengali, Gujarati, Bhojpuri, Haryanvi, English.\",
  },
  {
    icon: Sliders,
    title: \"5-Band Parametric Equalizer\",
    desc: \"Hardware-accelerated 5-Band studio EQ with Bass Boost virtualizer, loudness enhancer, and custom acoustic presets.\",
  },
  {
    icon: ListMusic,
    title: \"Dynamic Auto-Queue\",
    desc: \"Intelligent automated queue that generates continuous matching music tracks based on your vibe.\",
  },
  {
    icon: Zap,
    title: \"HTTP/3 & QUIC Network\",
    desc: \"High-performance HTTP/3 network transport delivering zero packet-loss and instant audio buffering.\",
  },
  {
    icon: Headphones,
    title: \"Background & Lock Screen\",
    desc: \"Native Android MediaSession integration with rich lock screen notifications and sleep timer.\",
  },
  {
    icon: Layers,
    title: \"Local Room Database\",
    desc: \"Structured offline storage via Android Jetpack Room for fast playlist management and search.\",
  },
  {
    icon: Radio,
    title: \"Continuous Radio\",
    desc: \"Spin up endless radio stations from any song, artist, or album with smart non-repeating queues.\",
  },
  {
    icon: Share2,
    title: \"100% Free & Private\",
    desc: \"Zero accounts required, zero analytics tracking, and no intrusive advertisements.\",
  },
];

export function Features() {
  return (\n    <section id=\"features\" className=\"relative py-28 sm:py-36\">\n      <div className=\"mx-auto max-w-7xl px-6\">\n        <SectionHeading\n          eyebrow=\"Features\"\n          title={\n            <>\n              Engineered for <span className=\"text-gradient\">pure sonic fidelity.</span>\n            </>\n          }\n          description=\"Every feature in A1 Swaara is built to make music streaming feel cinematic, fast, and effortless.\"\n        />\n\n        <Stagger className=\"grid grid-cols-1 gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-4\" delay={0.1}>\n          {FEATURES.map((f) => (\n            <StaggerItem key={f.title} className={cn(f.span && \"sm:col-span-2\")}>\n              <TiltCard innerClassName={cn(\"p-6\", f.accent && \"border-accent/30\")}>\n                {f.tag && (\n                  <span className=\"absolute right-4 top-4 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 text-[8.5px] font-bold uppercase tracking-[0.14em] text-accent shadow-[0_0_8px_var(--glow)]\">\n                    {f.tag}\n                  </span>\n                )}\n                {f.accent && (\n                  <div\n                    aria-hidden\n                    className=\"pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[radial-gradient(closest-side,var(--glow),transparent)] opacity-40 blur-2xl\"\n                  />\n                )}\n                <div className=\"relative flex h-full flex-col\" style={{ transform: \"translateZ(30px)\" }}>\n                  <div className=\"flex size-11 items-center justify-center rounded-2xl border border-foreground/10 bg-gradient-to-br from-foreground/[0.06] to-transparent transition-transform duration-300 group-hover:scale-110\">\n                    <f.icon size={19} className=\"text-accent\" strokeWidth={1.9} />\n                  </div>\n                  <h3 className=\"pt-4 font-display text-lg font-bold tracking-tight\">\n                    {f.title}\n                  </h3>\n                  <p className=\"pt-1.5 text-sm leading-relaxed text-muted-foreground\">\n                    {f.desc}\n                  </p>\n                </div>\n              </TiltCard>\n            </StaggerItem>\n          ))}\n        </Stagger>\n      </div>\n    </section>\n  );\n}\n