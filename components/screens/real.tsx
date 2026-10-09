/**
 * Real app screenshots (cropped: no status bar / no Android nav bar).
 * Drop more PNGs into /public/screens and reuse this wrapper anywhere
 * a mock screen component is expected.
 */
export function RealScreen({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0f]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        draggable={false}
        className="h-full w-full select-none object-cover object-top"
      />
    </div>
  );
}

export function SettingsReal() {
  return (
    <RealScreen
      src="/screens/settings.png"
      alt="A1 Swaara Android app — Audio settings, 5-band equalizer, and download preferences"
    />
  );
}

export function PlayerReal() {
  return (
    <RealScreen
      src="/screens/player.png"
      alt="A1 Swaara Android music player — Now Playing screen with 320 kbps Ultra HQ streaming"
    />
  );
}

export function HomeReal() {
  return (
    <RealScreen
      src="/screens/home.png"
      alt="A1 Swaara Android music streaming app — Discover home screen with 12 regional languages"
    />
  );
}

export function LyricsReal() {
  return (
    <RealScreen
      src="/screens/lyrics.png"
      alt="A1 Swaara Android app — Real-time synchronized karaoke lyrics screen"
    />
  );
}

export function QueueReal() {
  return (
    <RealScreen
      src="/screens/queue.png"
      alt="A1 Swaara Android music player — Dynamic drag-and-drop play queue screen"
    />
  );
}

export function SearchReal() {
  return (
    <RealScreen
      src="/screens/search.png"
      alt="A1 Swaara Android music player — Multi-language search and trending music suggestions"
    />
  );
}
