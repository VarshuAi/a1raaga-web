"use client\";

import {
  Flame,
  Globe,
  Headphones,
  Languages,
  Mic2,
  Music2,
  Share2,
  Sliders,
  Sparkles,
  Video,
  Zap,
} from \"lucide-react\";
import type { ReactNode } from \"react\";
import { Counter } from \"./counter\";
import { Reveal, Stagger, StaggerItem } from \"./reveal\";
import { TiltCard } from \"./tilt-card\";

const HIGHLIGHTS = [
  { icon: Video, label: \"Story Creator Studio (9:16 & Video)\" },
  { icon: Zap, label: \"320 kbps Stream Downloader\" },
  { icon: Mic2, label: \"Synced Karaoke Lyrics\" },
  { icon: Languages, label: \"12-Language Regional Matrix\" },
];

function Sparkline() {
  return (
    <svg viewBox=\"0 0 120 36\" className=\"h-9 w-full\" fill=\"none\" aria-hidden>
      <defs>
        <linearGradient id=\"spark\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"0\">
          <stop offset=\"0\" stopColor=\"#ff2daa\" />
          <stop offset=\"1\" stopColor=\"#8b35ff\" />
        </linearGradient>
        <linearGradient id=\"sparkFill\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">
          <stop offset=\"0\" stopColor=\"#ff2daa\" stopOpacity=\"0.35\" />
          <stop offset=\"1\" stopColor=\"#ff2daa\" stopOpacity=\"0\" />
        </linearGradient>
      </defs>
      <path
        d=\"M0 28 L12 24 L24 26 L36 18 L48 21 L60 12 L72 16 L84 8 L96 12 L108 5 L120 8 V36 H0 Z\"
        fill=\"url(#sparkFill)\"
      />
      <path
        d=\"M0 28 L12 24 L24 26 L36 18 L48 21 L60 12 L72 16 L84 8 L96 12 L108 5 L120 8\"
        stroke=\"url(#spark)\"
        strokeWidth=\"2\"
        strokeLinecap=\"round\"
      />
    </svg>
  );
}

function StudioCard({
  icon: Icon,
  label,
  children,
  footer,
  big,
}: {
  icon: React.ElementType;
  label: string;
  children: ReactNode;
  footer?: string;
  big?: boolean;
}) {
  return (
    <TiltCard innerClassName=\"p-5\" intensity={5}>
      <div className=\"flex h-full flex-col\" style={{ transform: \"translateZ(24px)\" }}>
        <div className=\"flex items-center gap-2 text-muted-foreground\">
          <Icon size={13} className=\"text-accent\" />
          <span className=\"text-[10.5px] font-semibold uppercase tracking-[0.16em]\">{label}</span>
        </div>
        <div className={big ? \"flex-1 pt-3\" : \"pt-3\"}>{children}</div>
        {footer && (
          <p className=\"mt-auto pt-3 text-[11px] leading-relaxed text-muted-foreground\">{footer}</p>
        )}
      </div>
    </TiltCard>
  );
}

export function Dna() {
  return (
    <section id=\"dna\" className=\"relative overflow-hidden py-28 sm:py-40\">
      {/* signature backdrop */}
      <div aria-hidden className=\"absolute inset-0\">
        <div className=\"absolute left-1/2 top-24 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[conic-gradient(from_120deg,var(--accent),var(--accent-2),var(--accent-3),var(--accent))] opacity-[0.14] blur-[80px] md:h-[520px] md:w-[820px] md:blur-[130px]\" />
        <div className=\"bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_65%_55%_at_50%_35%,black,transparent)]\" />
      </div>

      <div className=\"relative mx-auto max-w-7xl px-6\">
        <div className=\"flex flex-col items-center text-center\">
          <Reveal>
            <span className=\"dot-matrix inline-flex items-center gap-2.5 rounded-full border border-accent/25 bg-accent/[0.06] px-4 py-2 text-[11px] font-medium text-accent\">
              <Sparkles size={12} />
              Swaara Sound & Social Studio
              <span className=\"rounded-full bg-accent/20 px-2.5 py-0.5 text-[9px] font-bold tracking-[0.18em]\">
                Flagship
              </span>
            </span>
          </Reveal>
          <Reveal delay={0.08}>\n            <h2 className=\"pt-6 font-display text-5xl font-bold leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-7xl\">\n              Pure Sound.\n              <br />\n              <span className=\"text-gradient\">Social Studio.</span>\n            </h2>\n          </Reveal>\n          <Reveal delay={0.12}>\n            <p className=\"pt-4 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground\">\n              ✦ Built for Audiophiles & Creators ✦\n            </p>\n          </Reveal>\n          <Reveal delay={0.16}>\n            <p className=\"max-w-xl pt-5 text-base leading-relaxed text-muted-foreground sm:text-lg\">\n              A1 Swaara brings you unmatched 320 kbps fidelity, direct native stream downloads, and a dedicated Social Story Creator to share music cards and video clips to Instagram and WhatsApp with one tap.\n            </p>\n          </Reveal>\n          <Stagger className=\"flex flex-wrap items-center justify-center gap-2.5 pt-8\" delay={0.2}>\n            {HIGHLIGHTS.map((p) => (\n              <StaggerItem key={p.label}>\n                <span className=\"glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium\">\n                  <p.icon size={13} className=\"text-accent\" />\n                  {p.label}\n                </span>\n              </StaggerItem>\n            ))}\n          </Stagger>\n        </div>\n\n        <Stagger className=\"grid grid-cols-2 gap-4 pt-16 lg:grid-cols-4\" delay={0.15}>\n          <StaggerItem>\n            <StudioCard\n              icon={Video}\n              label=\"Story Creator\"\n              footer=\"Export vertical 9:16 cards & 30s/60s video snippets with artwork.\"\n            >\n              <div className=\"flex items-center gap-3 pt-1\">\n                <div className=\"flex size-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 font-display text-lg font-bold text-white shadow-[0_8px_24px_-6px_var(--glow)]\">\n                  9:16\n                </div>\n                <div className=\"min-w-0\">\n                  <p className=\"truncate font-display text-base font-bold\">Instagram & WA</p>\n                  <p className=\"text-[11px] text-accent\">1-Tap Story Share</p>\n                </div>\n              </div>\n            </StudioCard>\n          </StaggerItem>\n\n          <StaggerItem>\n            <StudioCard icon={Zap} label=\"Downloader\" big>\n              <p className=\"font-display text-4xl font-bold tracking-tight\">\n                <Counter to={320} />\n                <span className=\"pl-1 text-base font-semibold text-muted-foreground\">kbps</span>\n              </p>\n              <div className=\"pt-3\">\n                <Sparkline />\n              </div>\n            </StudioCard>\n          </StaggerItem>\n\n          <StaggerItem>\n            <StudioCard icon={Languages} label=\"Language Matrix\" big>\n              <p className=\"font-display text-2xl font-bold tracking-tight\">12 Languages</p>\n              <div className=\"space-y-2 pt-3\">\n                {[\n                  [\"Kannada & Hindi\", 95],\n                  [\"Tamil & Telugu\", 88],\n                  [\"Punjabi & Malayalam\", 76],\n                ].map(([g, v]) => (\n                  <div key={g as string}>\n                    <div className=\"flex justify-between text-[10px] text-muted-foreground\">\n                      <span>{g}</span>\n                      <span>{v}%</span>\n                    </div>\n                    <div className=\"mt-1 h-1 rounded-full bg-foreground/10\">\n                      <div\n                        className=\"h-full rounded-full bg-gradient-to-r from-accent to-accent-2\"\n                        style={{ width: `${v}%` }}\n                      />\n                    </div>\n                  </div>\n                ))}\n              </div>\n            </StudioCard>\n          </StaggerItem>\n\n          <StaggerItem>\n            <StudioCard\n              icon={Sliders}\n              label=\"Parametric EQ\"\n              footer=\"5-Band frequency adjustment with Bass Boost.\"\n            >\n              <p className=\"font-display text-4xl font-bold tracking-tight\">\n                <Counter to={5} suffix=\"-Band\" />\n              </p>\n              <p className=\"pt-1 text-[11px] text-muted-foreground\">Hardware-accelerated presets</p>\n            </StudioCard>\n          </StaggerItem>\n        </Stagger>\n      </div>\n    </section>\n  );\n}\n