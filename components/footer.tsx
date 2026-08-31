import { ArrowUpRight, Download } from "lucide-react";
import { GithubIcon, Logo, Wordmark } from "./brand";
import { Aurora } from "./effects";
import { Reveal } from "./reveal";
import { Button } from "./ui/button";
import { APK_URL, GITHUB_PROFILE, GITHUB_REPO, RELEASES_URL } from "@/lib/site";

const COLS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Showcase", href: "#showcase" },
      { label: "Screenshots", href: "#screenshots" },
      { label: "Sound Engine", href: "#dna" },
      { label: "Download", href: "#download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Releases & Changelog", href: RELEASES_URL },
      { label: "Direct APK Download", href: APK_URL },
      { label: "Source Code (APK)", href: GITHUB_REPO },
      { label: "Issues & Feedback", href: `${GITHUB_REPO}/issues` },
    ],
  },
  {
    title: "Developer",
    links: [
      { label: "Architecture", href: "#tech" },
      { label: "@VarshuAi", href: GITHUB_PROFILE },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-28">
      {/* CTA band */}
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:py-20">
            <Aurora />
            <div className="bg-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
            <div className="relative">
              <Reveal delay={0.05}>
                <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
                  Ready for a <span className="text-gradient">pure sonic experience</span>?
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mx-auto max-w-md pt-4 text-muted-foreground">
                  35.9 MB. Ultra HQ 320 kbps. Social Story Creator. No account or ads required.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div className="flex flex-wrap items-center justify-center gap-3 pt-9">
                  <a href={APK_URL} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="shadow-[0_0_20px_var(--glow)]">
                      <Download /> Download A1 Swaara
                    </Button>
                  </a>
                  <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="secondary" className="group/gh">
                      <GithubIcon />
                      Star on GitHub
                      <ArrowUpRight className="group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5" />
                    </Button>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </Reveal>
      </div>

      {/* link grid */}
      <div className="mx-auto max-w-7xl px-6 pt-20">
        <div className="grid gap-10 border-t border-foreground/10 pt-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <Logo />
              <Wordmark />
            </a>
            <p className="max-w-xs pt-4 text-sm leading-relaxed text-muted-foreground">
              The cinematic high-fidelity Android music streaming & social studio.
              Free forever. No ads, no account.
            </p>
            <div className="flex gap-2 pt-5">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground"
              >
                <GithubIcon size={15} />
              </a>
            </div>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <p className="dot-matrix text-[10px] font-semibold text-muted-foreground">{col.title}</p>
              <ul className="space-y-2.5 pt-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-3 py-10 text-xs text-muted-foreground sm:flex-row">
          <p>© 2026 A1 Swaara. Made with passion.</p>
          <p>
            Crafted with Kotlin & Jetpack Compose ·{" "}
            <span className="text-foreground">Pure Privacy</span>
          </p>
        </div>
      </div>

      {/* giant wordmark */}
      <div aria-hidden className="pointer-events-none relative select-none overflow-hidden">
        <p className="bg-gradient-to-b from-foreground/[0.07] to-transparent bg-clip-text text-center font-display text-[20vw] font-black leading-[0.8] tracking-[-0.05em] text-transparent">
          SWAARA
        </p>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>
    </footer>
  );
}
