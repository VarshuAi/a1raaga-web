import dynamic from "next/dynamic";
import { CursorGlow, Grain, ScrollProgress } from "@/components/effects";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PhoneShowcase } from "@/components/phone-showcase";

// Below-the-fold components dynamically loaded with SSR preserved for SEO & crawlers
const Screenshots = dynamic(
  () => import("@/components/screenshots").then((m) => m.Screenshots),
  { ssr: true }
);
const Dna = dynamic(
  () => import("@/components/dna").then((m) => m.Dna),
  { ssr: true }
);
const DownloadSection = dynamic(
  () => import("@/components/download").then((m) => m.DownloadSection),
  { ssr: true }
);
const Tech = dynamic(
  () => import("@/components/tech").then((m) => m.Tech),
  { ssr: true }
);

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      {/* global effects (Phase 8) */}
      <ScrollProgress />
      <CursorGlow />
      <Grain />
      <Navbar />

      {/* Phase 1 — hero */}
      <Hero />

      {/* Phase 2 — scroll-driven interactive phone */}
      <PhoneShowcase />

      {/* Phase 3 — feature grid */}
      <Features />

      {/* Phase 4 — screenshots gallery */}
      <Screenshots />

      {/* Phase 5 — A1 Swaara Sound Engine showcase */}
      <Dna />

      {/* Phase 6 — download */}
      <DownloadSection />

      {/* Phase 7 — performance & technical */}
      <Tech />

      <Footer />
    </main>
  );
}
