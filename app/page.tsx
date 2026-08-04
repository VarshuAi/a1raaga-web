import { CursorGlow, Grain, ScrollProgress } from "@/components/effects";
import { Dna } from "@/components/dna";
import { DownloadSection } from "@/components/download";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { PhoneShowcase } from "@/components/phone-showcase";
import { Screenshots } from "@/components/screenshots";
import { Tech } from "@/components/tech";

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

      {/* Phase 5 — Raaga DNA showcase */}
      <Dna />

      {/* Phase 6 — download */}
      <DownloadSection />

      {/* Phase 7 — performance & technical */}
      <Tech />

      <Footer />
    </main>
  );
}
