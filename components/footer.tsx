import { ArrowUpRight, Download } from \"lucide-react\";
import { GithubIcon, Logo, Wordmark } from \"./brand\";
import { Aurora } from \"./effects\";
import { Reveal } from \"./reveal\";
import { Button } from \"./ui/button\";
import { APK_URL, GITHUB_PROFILE, GITHUB_REPO, RELEASES_URL } from \"@/lib/site\";

const COLS = [
  {
    title: \"Product\",
    links: [
      { label: \"Features\", href: \"#features\" },
      { label: \"Showcase\", href: \"#showcase\" },
      { label: \"Screenshots\", href: \"#screenshots\" },
      { label: \"Sound Engine\", href: \"#dna\" },
      { label: \"Download\", href: \"#download\" },
    ],
  },
  {
    title: \"Resources\",
    links: [
      { label: \"Releases & Changelog\", href: RELEASES_URL },
      { label: \"Direct APK Download\", href: APK_URL },
      { label: \"Source Code (APK)\", href: GITHUB_REPO },
      { label: \"Issues & Feedback\", href: `${GITHUB_REPO}/issues` },
    ],
  },
  {
    title: \"Developer\",
    links: [
      { label: \"Architecture\", href: \"#tech\" },
      { label: \"@VarshuAi\", href: GITHUB_PROFILE },
    ],
  },
];

export function Footer() {
  return (\n    <footer className=\"relative overflow-hidden pt-28\">\n      {/* CTA band */}\n      <div className=\"relative mx-auto max-w-7xl px-6\">\n        <Reveal>\n          <div className=\"glass relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center sm:py-20\">\n            <Aurora />\n            <div className=\"bg-dots absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]\" />\n            <div className=\"relative\">\n              <Reveal delay={0.05}>\n                <h2 className=\"mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl\">\n                  Ready for a <span className=\"text-gradient\">pure sonic experience</span>?\n                </h2>\n              </Reveal>\n              <Reveal delay={0.12}>\n                <p className=\"mx-auto max-w-md pt-4 text-muted-foreground\">\n                  35.9 MB. Ultra HQ 320 kbps. Social Story Creator. No account or ads required.\n                </p>\n              </Reveal>\n              <Reveal delay={0.18}>\n                <div className=\"flex flex-wrap items-center justify-center gap-3 pt-9\">\n                  <a href={APK_URL} target=\"_blank\" rel=\"noopener noreferrer\">\n                    <Button size=\"lg\" className=\"shadow-[0_0_20px_var(--glow)]\">\n                      <Download /> Download A1 Swaara\n                    </Button>\n                  </a>\n                  <a href={GITHUB_REPO} target=\"_blank\" rel=\"noopener noreferrer\">\n                    <Button size=\"lg\" variant=\"secondary\" className=\"group/gh\">\n                      <GithubIcon />\n                      Star on GitHub\n                      <ArrowUpRight className=\"group-hover/gh:translate-x-0.5 group-hover/gh:-translate-y-0.5\" />\n                    </Button>\n                  </a>\n                </div>\n              </Reveal>\n            </div>\n          </div>\n        </Reveal>\n      </div>\n\n      {/* link grid */}\n      <div className=\"mx-auto max-w-7xl px-6 pt-20\">\n        <div className=\"grid gap-10 border-t border-foreground/10 pt-14 md:grid-cols-[1.4fr_repeat(3,1fr)]\">\n          <div>\n            <a href=\"#top\" className=\"flex items-center gap-2.5\">\n              <Logo />\n              <Wordmark />\n            </a>\n            <p className=\"max-w-xs pt-4 text-sm leading-relaxed text-muted-foreground\">\n              The cinematic high-fidelity Android music streaming & social studio.\n              Free forever. No ads, no account.\n            </p>\n            <div className=\"flex gap-2 pt-5\">\n              <a\n                href={GITHUB_REPO}\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n                aria-label=\"GitHub\"\n                className=\"flex size-9 items-center justify-center rounded-full border border-foreground/10 text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground\"\n              >\n                <GithubIcon size={15} />\n              </a>\n            </div>\n          </div>\n          {COLS.map((col) => (\n            <div key={col.title}>\n              <p className=\"dot-matrix text-[10px] font-semibold text-muted-foreground\">{col.title}</p>\n              <ul className=\"space-y-2.5 pt-4\">\n                {col.links.map((l) => (\n                  <li key={l.label}>\n                    <a\n                      href={l.href}\n                      className=\"text-sm text-muted-foreground transition-colors hover:text-foreground\"\n                      {...(l.href.startsWith(\"http\")\n                        ? { target: \"_blank\", rel: \"noopener noreferrer\" }\n                        : {})}\n                    >\n                      {l.label}\n                    </a>\n                  </li>\n                ))}\n              </ul>\n            </div>\n          ))}\n        </div>\n\n        <div className=\"flex flex-col items-center justify-between gap-3 py-10 text-xs text-muted-foreground sm:flex-row\">\n          <p>© 2026 A1 Swaara. Made with passion.</p>\n          <p>\n            Crafted with Kotlin & Jetpack Compose ·{\" \"}\n            <span className=\"text-foreground\">Pure Privacy</span>\n          </p>\n        </div>\n      </div>\n\n      {/* giant wordmark */}\n      <div aria-hidden className=\"pointer-events-none relative select-none overflow-hidden\">\n        <p className=\"bg-gradient-to-b from-foreground/[0.07] to-transparent bg-clip-text text-center font-display text-[20vw] font-black leading-[0.8] tracking-[-0.05em] text-transparent\">\n          SWAARA\n        </p>\n        <div className=\"absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent\" />\n      </div>\n    </footer>\n  );\n}\n