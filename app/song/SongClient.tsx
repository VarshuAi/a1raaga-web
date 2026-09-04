"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Play,
  Pause,
  Share2,
  Download,
  Check,
  Copy,
  Sparkles,
  Headphones,
  Radio,
  ArrowRight,
} from "lucide-react";
import { Logo, Wordmark } from "@/components/brand";
import { APK_URL } from "@/lib/site";

interface SongClientProps {
  id?: string;
  title?: string;
  artist?: string;
  thumb?: string;
}

export function SongClient({
  id = "",
  title = "Now Playing",
  artist = "A1 Swaara Artist",
  thumb = "",
}: SongClientProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedNote, setCopiedNote] = useState(false);
  const [customNoteVibe, setCustomNoteVibe] = useState("🎵");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const displayThumb =
    thumb ||
    (id
      ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg`
      : "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80");

  const cleanTitle = title.replace(/\(Official.*?\)|\[Official.*?\]/gi, "").trim();
  const noteText = `${customNoteVibe} ${cleanTitle.slice(0, 26)} • ${artist.slice(0, 18)} 🎧`;

  // Deep link for A1 Swaara
  const appDeepLink = id ? `a1swaara://song?id=${id}` : "a1swaara://home";

  const handleOpenApp = () => {
    // Attempt deep link navigation
    window.location.href = appDeepLink;
    // Fallback: if app isn't installed, navigate to download after a short delay
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

      // Attempt opening Instagram Notes / DM interface
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

  const togglePlayback = () => {
    if (!id) return;
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#08080C] text-white flex flex-col justify-between selection:bg-pink-500 selection:text-white relative overflow-hidden">
      {/* Ambient Neon Atmosphere Orbs */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-pink-600/15 blur-[120px]" />
      <div className="pointer-events-none absolute top-[30%] right-[-15%] w-[600px] h-[600px] rounded-full bg-purple-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-cyan-600/10 blur-[130px]" />

      {/* Top Header */}
      <header className="relative z-10 w-full max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo className="transition-transform duration-300 group-hover:scale-105" />
          <Wordmark />
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-xs font-semibold text-zinc-300 hover:text-white transition-all backdrop-blur-md cursor-pointer"
          >
            {copiedLink ? (
              <>
                <Check className="size-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied!</span>
              </>
            ) : (
              <>
                <Share2 className="size-3.5" />
                <span>Share</span>
              </>
            )}
          </button>
          <a
            href={APK_URL}
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white font-bold text-xs shadow-lg shadow-pink-500/20 hover:shadow-pink-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="size-3.5" />
            <span>Get APK</span>
          </a>
        </div>
      </header>

      {/* Main Experience Studio */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-5 py-6 flex-1 flex flex-col items-center justify-center">
        {/* Obsidian Glass Music Player Card */}
        <div className="w-full max-w-xl rounded-3xl bg-[#111118]/85 border border-white/[0.12] p-6 sm:p-8 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col items-center text-center relative">
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-[11px] font-semibold text-pink-400 mb-6 tracking-wide uppercase">
            <Radio className="size-3 animate-pulse text-pink-400" />
            <span>A1 Swaara Social Share</span>
          </div>

          {/* Vinyl Album Artwork Studio */}
          <div className="relative group cursor-pointer my-2" onClick={togglePlayback}>
            {/* Spinning Vinyl Background (Visible when playing) */}
            <div
              className={`absolute -right-7 -top-2 size-48 sm:size-56 rounded-full bg-black border-4 border-zinc-800 flex items-center justify-center shadow-xl transition-all duration-700 ease-out ${
                isPlaying
                  ? "translate-x-6 sm:translate-x-10 rotate-[360deg] animate-[spin_8s_linear_infinite]"
                  : "translate-x-0 opacity-40 group-hover:translate-x-3 group-hover:opacity-70"
              }`}
            >
              <div className="size-20 rounded-full border border-zinc-700 bg-zinc-900 flex items-center justify-center">
                <div className="size-6 rounded-full bg-pink-500 border-2 border-black" />
              </div>
            </div>

            {/* Front Square Artwork */}
            <div className="relative z-10 size-48 sm:size-56 rounded-2xl overflow-hidden border-2 border-white/20 shadow-[0_12px_40px_rgba(0,0,0,0.8)] bg-zinc-900">
              <Image
                src={displayThumb}
                alt={title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                unoptimized
              />
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="size-14 rounded-full bg-gradient-to-tr from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg">
                  {isPlaying ? <Pause className="size-6 fill-white" /> : <Play className="size-6 fill-white ml-0.5" />}
                </div>
              </div>
            </div>
          </div>

          {/* Song Metadata */}
          <div className="mt-7 w-full">
            <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white line-clamp-1">
              {cleanTitle}
            </h1>
            <p className="text-sm font-semibold text-zinc-400 mt-1 line-clamp-1">
              {artist}
            </p>
          </div>

          {/* Dynamic Audio Equalizer Simulation */}
          <div className="flex items-end justify-center gap-1 h-7 my-5">
            {[40, 75, 55, 90, 60, 85, 45, 95, 65, 80, 50, 70, 90, 60, 40].map((h, i) => (
              <span
                key={i}
                className={`w-1 rounded-full bg-gradient-to-t from-pink-500 to-purple-400 transition-all duration-300 ${
                  isPlaying ? "animate-pulse" : "opacity-35"
                }`}
                style={{
                  height: isPlaying ? `${h}%` : "25%",
                  animationDelay: `${i * 90}ms`,
                  animationDuration: `${500 + (i % 5) * 150}ms`,
                }}
              />
            ))}
          </div>

          {/* Embedded YouTube Audio Player (Clean & Audio-focused) */}
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
            <span>Open in A1 Swaara App (320 kbps)</span>
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

          {/* INSTAGRAM NOTE STUDIO SECTION */}
          <div className="w-full flex flex-col items-center">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-300 uppercase tracking-wider mb-3">
              <Sparkles className="size-3.5 text-pink-400" />
              <span>Share to Instagram Note</span>
            </div>

            {/* Simulated Instagram Note Speech Bubble */}
            <div className="relative mb-5 flex flex-col items-center">
              {/* Note Floating Bubble */}
              <div className="relative px-4 py-2.5 rounded-2xl bg-zinc-900 border border-white/20 shadow-xl shadow-black/50 text-xs font-semibold text-white flex items-center gap-2 max-w-[280px]">
                <span className="text-sm">{customNoteVibe}</span>
                <span className="truncate">{cleanTitle}</span>
                <span className="text-zinc-400">•</span>
                <span className="text-zinc-300 truncate">{artist}</span>
                {/* Speech Bubble Pointer */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-zinc-900 border-b border-r border-white/20 rotate-45" />
              </div>

              {/* Instagram Profile Circle Mockup */}
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

            {/* Note Vibe Selector Pills */}
            <div className="flex items-center gap-2 mb-4">
              {["🎵", "🎧", "✨", "🔥", "🌙"].map((vibe) => (
                <button
                  key={vibe}
                  onClick={() => setCustomNoteVibe(vibe)}
                  className={`size-8 rounded-full flex items-center justify-center text-xs transition-all ${
                    customNoteVibe === vibe
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 scale-110 shadow-md shadow-pink-500/30"
                      : "bg-white/[0.06] hover:bg-white/[0.12] text-zinc-300"
                  }`}
                >
                  {vibe}
                </button>
              ))}
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
                  <span>Copy 60-Char Note & Open Instagram</span>
                </>
              )}
            </button>
            <p className="text-[11px] text-zinc-500 mt-2">
              Status snippet is automatically copied to your clipboard ready to paste into your Instagram Note!
            </p>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="w-full max-w-xl grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
          {[
            { label: "320 kbps HQ", desc: "Ultra Lossless Audio", icon: "🎵" },
            { label: "100% Free", desc: "Zero Ads Forever", icon: "🛡️" },
            { label: "Story Studio", desc: "Insta & WhatsApp", icon: "🎨" },
            { label: "Synced Lyrics", desc: "Live Karaoke", icon: "🎤" },
          ].map((f, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md flex flex-col items-center text-center"
            >
              <span className="text-xl mb-1">{f.icon}</span>
              <p className="text-xs font-bold text-white">{f.label}</p>
              <p className="text-[10px] text-zinc-400 mt-0.5">{f.desc}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full border-t border-white/[0.06] py-6 px-6 text-center">
        <p className="text-xs text-zinc-500">
          A1 Swaara — The Ultimate High-Fidelity Music Streaming Experience. No Ads • Free Forever.
        </p>
      </footer>
    </div>
  );
}
