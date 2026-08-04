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
        draggable={false}
        className="h-full w-full select-none object-cover object-top"
      />
    </div>
  );
}

export function SettingsReal() {
  return <RealScreen src="/screens/settings.png" alt="Raaga app — Settings screen" />;
}

export function PlayerReal() {
  return <RealScreen src="/screens/player.png" alt="Raaga app — Now Playing screen" />;
}

export function HomeReal() {
  return <RealScreen src="/screens/home.png" alt="Raaga app — Discover home screen" />;
}

export function LyricsReal() {
  return <RealScreen src="/screens/lyrics.png" alt="Raaga app — synced lyrics screen" />;
}

export function QueueReal() {
  return <RealScreen src="/screens/queue.png" alt="Raaga app — play queue sheet" />;
}

export function SearchReal() {
  return <RealScreen src="/screens/search.png" alt="Raaga app — search screen" />;
}
