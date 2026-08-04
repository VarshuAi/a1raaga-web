"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState, useSyncExternalStore } from "react";
import { GithubIcon, Logo, Wordmark } from "./brand";
import { GITHUB_REPO } from "@/lib/site";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const LINKS = [
  { label: "Features", href: "#features" },
  { label: "Showcase", href: "#showcase" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Raaga DNA", href: "#dna" },
  { label: "Developers", href: "#tech" },
];

function useIsDark() {
  return useSyncExternalStore(
    (onChange) => {
      const obs = new MutationObserver(onChange);
      obs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });
      return () => obs.disconnect();
    },
    () => document.documentElement.classList.contains("dark"),
    () => true
  );
}

function ThemeToggle() {
  const dark = useIsDark();
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };
  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="relative flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ opacity: 0, rotate: -40, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 40, scale: 0.6 }}
          transition={{ duration: 0.18 }}
          className="flex"
        >
          {dark ? <Moon size={15} /> : <Sun size={15} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[70]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "mt-3 flex items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4",
            scrolled
              ? "glass bg-background/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]"
              : "border-transparent bg-transparent"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 pl-1" aria-label="Raaga home">
            <Logo />
            <Wordmark />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                  <span className="absolute inset-x-3.5 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={GITHUB_REPO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hidden size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground sm:flex"
            >
              <GithubIcon size={15} />
            </a>
            <ThemeToggle />
            <a href="#download" className="hidden sm:block">
              <Button size="sm" className="gap-1.5">
                <Download size={13} />
                Download
              </Button>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              className="flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] lg:hidden"
            >
              {open ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </motion.nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="glass mt-2 overflow-hidden rounded-2xl p-2 lg:hidden"
            >
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground"
                >
                  {l.label}
                </motion.a>
              ))}
              <a href="#download" onClick={() => setOpen(false)} className="block p-2">
                <Button className="w-full">
                  <Download size={14} /> Download APK
                </Button>
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
