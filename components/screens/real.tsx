import Image from "next/image";

/**
 * Real app screenshots (cropped: no status bar / no Android nav bar).
 * Optimized with Next.js Image for automatic WebP/AVIF conversion,
 * responsive srcset sizing, and LCP preloading.
 */
export function RealScreen({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0a0a0f]">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 300px, 320px"
        priority={priority}
        loading={priority ? undefined : "lazy"}
        decoding={priority ? "sync" : "async"}
        draggable={false}
        className="select-none object-cover object-top"
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

export function PlayerReal({ priority = false }: { priority?: boolean }) {
  return (
    <RealScreen
      src="/screens/player.png"
      alt="A1 Swaara Android music player — Now Playing screen with 320 kbps Ultra HQ streaming"
      priority={priority}
    />
  );
}

export function HomeReal({ priority = false }: { priority?: boolean }) {
  return (
    <RealScreen
      src="/screens/home.png"
      alt="A1 Swaara Android music streaming app — Discover home screen with 12 regional languages"
      priority={priority}
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
