import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "A1 Swaara — Pure Sonic Experience",
    short_name: "A1 Swaara",
    description:
      "A1 Swaara — High-fidelity Android music player. 320 kbps streaming, Story Creator Studio, synced lyrics. Free forever. No ads. No tracking.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080C",
    theme_color: "#08080C",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
