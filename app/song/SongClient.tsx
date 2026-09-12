"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Share2,
  Download,
  Check,
  Copy,
  Sparkles,
  Headphones,
  Radio,
  Repeat,
  Moon,
  Flame,
  ArrowRight,
  Disc,
  ShieldCheck,
  Layers,
  Mic2,
  Volume2,
} from "lucide-react";
import { Logo, Wordmark } from "@/components/brand";
import { APK_URL } from "@/lib/site";

interface SongClientProps {
  id?: string;
  title?: string;
  artist?: string;
  thumb?: string;
}

const VIBE_PRESETS = [
  { id: "listening", label: "Listening", icon: Headphones },
  { id: "repeat", label: "On Repeat", icon: Repeat },
  { id: "radio", label: "Now Playing", icon: Radio },
  { id: "favorite", label: "Favorite", icon: Sparkles },
  { id: "night", label: "Late Night", icon: Moon },
  { id: "energy", label: "Energy", icon: Flame },
];

export function SongClient({
  id = "",
  title = "Now Playing",
  artist = "A1 Swaara Artist",
  thumb = "",
}: SongClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);
  const [selectedVibe, setSelectedVibe] = useState(VIBE_PRESETS[0]);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const displayThumb =
    thumb ||
    (id
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80");

  const cleanTitle = title.replace(/\(Official.*?\)|\[Official.*?\]/gi, "").trim();
  const noteText = `${cleanTitle.slice(0, 26)} — ${artist.slice(0, 16)} // ${selectedVibe.label}`.slice(0, 60);

  // Deep link for A1 Swaara
  const appDeepLink = id ? `a1swaara://song?id=${id}` : "a1swaara://home";

  const handleOpenApp = () => {
    window.location.href = appDeepLink;
    setTimeout(() => {
      if (document.hidden) return;
      window.location.href = APK_URL;
    }, 1800);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    } catch {}
  };

  const handleCopyAndOpenInstagram = async () => {
    try {
      const shareUrl = typeof window !== "undefined" ? window.location.href : "";
      const clipboardPayload = `${noteText}\n${shareUrl}`;
      await navigator.clipboard.writeText(clipboardPayload);
      setCopiedNote(true);
      setTimeout(() => setCopiedNote(false), 2200);

      setTimeout(() => {
        window.location.href = "instagram://sharesheet";
        setTimeout(() => {
          if (!document.hidden) {
            window.open("https://instagram.com", "_blank");
          }
        }, 1200);
      }, 300);
    } catch {
      window.open("https://instagram.com", "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Ambient Neon Atmosphere Orbs */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/15 blur-[120px]" />

      {/* Top Navbar */}
      <header className="relative z-10 w-full max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="size-8 transition-transform group-hover:scale-105" />
          <Wordmark className="h-4" />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="size-3.5 text-emerald-400" />
                <span className="text-emerald-400">Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="size-3.5 text-zinc-400" />
                <span>Share Track</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Main Track Card Hero */}
      <main className="relative z-10 w-full max-w-xl mx-auto px-5 py-6 flex flex-col items-center">
        {/* Central Album Artwork & Player Container */}
        <div className="w-full p-6 sm:p-8 rounded-3xl bg-zinc-950/80 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-pink-500/10 flex flex-col items-center relative">
          {/* Neon Subtle Backlight behind album art */}
          <div className="absolute top-1/4 size-48 rounded-full bg-pink-500/20 blur-3xl pointer-events-none" />

          {/* Central Artwork */}
          <div className="relative size-56 sm:size-64 rounded-2xl overflow-hidden shadow-2xl border border-white/15 mb-6 group">
            <Image
              src={displayThumb}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              unoptimized
            />
            {/* Minimal Badge */}
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5 text-[10px] font-bold text-pink-400 tracking-wider">
              <Volume2 className="size-3" />
              <span>320 KBPS</span>
            </div>
          </div>

          {/* Track Info */}
          <div className="w-full text-center mb-6">
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight truncate">
              {title}
            </h1>
            <p className="text-sm font-semibold text-zinc-400 mt-1 truncate">
              {artist}
            </p>
          </div>

          {/* Dynamic Audio Equalizer Bars Visualizer */}
          <div className="flex items-center justify-center gap-1.5 h-7 mb-6">
            {[24, 45, 18, 55, 36, 68, 42, 60, 28, 50, 22].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-gradient-to-t from-pink-500 to-cyan-400 rounded-full animate-pulse"
                style={{
                  height: `${h}%`,
                  animationDelay: `${i * 90}ms`,
                  animationDuration: `${500 + (i % 5) * 150}ms`,
                }}
              />
            ))}
          </div>

          {/* Embedded YouTube Audio Player */}
          {id && (
            <div className="w-full mb-6">
              {isPlaying ? (
                <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-lg">
                  <iframe
                    ref={iframeRef}
                    src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
              ) : (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="w-full py-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white flex items-center justify-center gap-2.5 transition-all cursor-pointer"
                >
                  <Play className="size-4 fill-pink-500 text-pink-500" />
                  <span>Tap to Preview Track Online</span>
                </button>
              )}
            </div>
          )}

          {/* Primary Action: Open in A1 Swaara (Deep Link) */}
          <button
            onClick={handleOpenApp}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-extrabold text-sm sm:text-base tracking-wide shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Headphones className="size-5" />
            <span>Open in A1 Swaara Studio</span>
            <ArrowRight className="size-4 opacity-80" />
          </button>

          {/* Secondary Action: Direct APK Download */}
          <div className="mt-3 flex items-center justify-center gap-2 text-xs text-zinc-400">
            <span>Don&apos;t have the app?</span>
            <a
              href={APK_URL}
              className="text-pink-400 hover:text-pink-300 font-bold underline underline-offset-4 flex items-center gap-1"
            >
              <span>Download Free APK (No Ads)</span>
              <Download className="size-3" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full border-t border-white/[0.08] my-6" />

          {/* INSTAGRAM NOTE STUDIO SECTION (CLEAN & PREMIUM) */}
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
              <Sparkles className="size-3.5 text-pink-400" />
              <span>Instagram Note Status</span>
            </div>

            {/* Simulated Clean Note Floating Bubble */}
            <div className="relative mb-5 flex flex-col items-center">
              <div className="relative px-4 py-2.5 rounded-2xl bg-zinc-900 border border-white/20 shadow-xl shadow-black/50 text-xs font-semibold text-white flex items-center gap-2 max-w-[280px]">
                <selectedVibe.icon className="size-3.5 text-pink-400 shrink-0" />
                <span className="truncate">{cleanTitle}</span>
                <span className="text-zinc-500">—</span>
                <span className="text-zinc-300 truncate">{artist}</span>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-b border-r border-white/20 rotate-45" />
              </div>

              {/* Profile Circle Mockup */}
              <div className="mt-3 size-12 rounded-full p-[2px] bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-md">
                <div className="w-full h-full rounded-full bg-zinc-900 overflow-hidden relative">
                  <Image
                    src={displayThumb}
                    alt="Profile thumbnail"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Note Vibe Selector Pills (Vector Icons) */}
            <div className="flex items-center gap-2 mb-4 flex-wrap justify-center">
              {VIBE_PRESETS.map((vibe) => {
                const IconComp = vibe.icon;
                const isSelected = selectedVibe.id === vibe.id;
                return (
                  <button
                    key={vibe.id}
                    onClick={() => setSelectedVibe(vibe)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-md shadow-pink-500/25 scale-105"
                        : "bg-white/[0.05] hover:bg-white/[0.1] text-zinc-400 hover:text-white border border-white/5"
                    }`}
                  >
                    <IconComp className="size-3.5" />
                    <span>{vibe.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Copy Note & Launch Instagram Button */}
            <button
              onClick={handleCopyAndOpenInstagram}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-pink-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              {copiedNote ? (
                <>
                  <Check className="size-4 text-white" />
                  <span>Copied Note! Opening Instagram...</span>
                </>
              ) : (
                <>
                  <Copy className="size-4 text-white" />
                  <span>Copy Note & Open Instagram</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-zinc-500 mt-2 text-center">
              Status snippet is automatically copied to your clipboard ready to paste into your Instagram Note.
            </p>
          </div>
        </div>

        {/* Feature Highlights Grid (Clean Vector Icons) */}
        <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[
            { label: "320 kbps Studio", desc: "Lossless Audio Engine", icon: Disc },
            { label: "100% Ad-Free", desc: "Zero Commercials", icon: ShieldCheck },
            { label: "Story Studio", desc: "HD Video & Card Studio", icon: Layers },
            { label: "Synced Lyrics", desc: "Karaoke Transcripts", icon: Mic2 },
          ].map((f, i) => {
            const IconComponent = f.icon;
            return (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col items-center text-center"
              >
                <div className="size-8 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-2">
                  <IconComponent className="size-4 text-pink-400" />
                </div>
                <p className="text-xs font-bold text-white">{f.label}</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/[0.06] py-6 px-6 text-center">
        <p className="text-xs text-zinc-500">
          A1 Swaara — Sovereign High-Fidelity Audio Experience.
        </p>
      </footer>
    </div>
  );
}
