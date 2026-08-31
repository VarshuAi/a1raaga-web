"use client\";

import { AnimatePresence, motion } from \"framer-motion\";
import { Download, Menu, Moon, Sun, X } from \"lucide-react\";
import { useEffect, useState, useSyncExternalStore } from \"react\";
import { GithubIcon, Logo, Wordmark } from \"./brand\";
import { GITHUB_REPO } from \"@/lib/site\";
import { Button } from \"./ui/button\";
import { cn } from \"@/lib/utils\";

const LINKS = [
  { label: \"Features\", href: \"#features\" },
  { label: \"Showcase\", href: \"#showcase\" },
  { label: \"Screenshots\", href: \"#screenshots\" },
  { label: \"Sound Engine\", href: \"#dna\" },
  { label: \"Architecture\", href: \"#tech\" },
];

function useIsDark() {
  return useSyncExternalStore(
    (onChange) => {
      const obs = new MutationObserver(onChange);
      obs.observe(document.documentElement, {
        attributes: true,
        attributeFilter: [\"class\"],
      });
      return () => obs.disconnect();
    },
    () => document.documentElement.classList.contains(\"dark\"),
    () => true
  );
}

function ThemeToggle() {
  const dark = useIsDark();
  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle(\"dark\", next);\n    try {\n      localStorage.setItem(\"theme\", next ? \"dark\" : \"light\");\n    } catch {}\n  };\n  return (\n    <button\n      onClick={toggle}\n      aria-label=\"Toggle theme\"\n      className=\"relative flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground\"\n    >\n      <AnimatePresence mode=\"wait\" initial={false}>\n        <motion.span\n          key={dark ? \"moon\" : \"sun\"}\n          initial={{ opacity: 0, rotate: -40, scale: 0.6 }}\n          animate={{ opacity: 1, rotate: 0, scale: 1 }}\n          exit={{ opacity: 0, rotate: 40, scale: 0.6 }}\n          transition={{ duration: 0.18 }}\n          className=\"flex\"\n        >\n          {dark ? <Moon size={15} /> : <Sun size={15} />}\n        </motion.span>\n      </AnimatePresence>\n    </button>\n  );\n}\n\nexport function Navbar() {\n  const [scrolled, setScrolled] = useState(false);\n  const [open, setOpen] = useState(false);\n\n  useEffect(() => {\n    const onScroll = () => setScrolled(window.scrollY > 24);\n    onScroll();\n    window.addEventListener(\"scroll\", onScroll, { passive: true });\n    return () => window.removeEventListener(\"scroll\", onScroll);\n  }, []);\n\n  return (\n    <header className=\"fixed inset-x-0 top-0 z-[70]\">\n      <div className=\"mx-auto max-w-7xl px-4 sm:px-6\">\n        <motion.nav\n          initial={{ y: -24, opacity: 0 }}\n          animate={{ y: 0, opacity: 1 }}\n          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}\n          className={cn(\n            \"mt-3 flex items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-500 sm:px-4\",\n            scrolled\n              ? \"glass bg-background/80 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.5)]\"\n              : \"border-transparent bg-transparent\"\n          )}\n        >\n          <a href=\"#top\" className=\"flex items-center gap-2.5 pl-1\" aria-label=\"A1 Swaara home\">\n            <Logo />\n            <Wordmark />\n          </a>\n\n          <ul className=\"hidden items-center gap-1 lg:flex\">\n            {LINKS.map((l) => (\n              <li key={l.href}>\n                <a\n                  href={l.href}\n                  className=\"group relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground\"\n                >\n                  {l.label}\n                  <span className=\"absolute inset-x-3.5 -bottom-px h-px origin-left scale-x-0 bg-gradient-to-r from-accent to-accent-2 transition-transform duration-300 group-hover:scale-x-100\" />\n                </a>\n              </li>\n            ))}\n          </ul>\n\n          <div className=\"flex items-center gap-2\">\n            <a\n              href={GITHUB_REPO}\n              target=\"_blank\"\n              rel=\"noopener noreferrer\"\n              aria-label=\"GitHub\"\n              className=\"hidden size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] text-muted-foreground transition-all hover:border-foreground/25 hover:text-foreground sm:flex\"\n            >\n              <GithubIcon size={15} />\n            </a>\n            <ThemeToggle />\n            <a href=\"#download\" className=\"hidden sm:block\">\n              <Button size=\"sm\" className=\"gap-1.5\">\n                <Download size={13} />\n                Download\n              </Button>\n            </a>\n            <button\n              onClick={() => setOpen((v) => !v)}\n              aria-label=\"Menu\"\n              className=\"flex size-9 items-center justify-center rounded-full border border-foreground/10 bg-foreground/[0.03] lg:hidden\"\n            >\n              {open ? <X size={15} /> : <Menu size={15} />}\n            </button>\n          </div>\n        </motion.nav>\n\n        <AnimatePresence>\n          {open && (\n            <motion.div\n              initial={{ opacity: 0, y: -10, scale: 0.98 }}\n              animate={{ opacity: 1, y: 0, scale: 1 }}\n              exit={{ opacity: 0, y: -10, scale: 0.98 }}\n              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}\n              className=\"glass mt-2 overflow-hidden rounded-2xl p-2 lg:hidden\"\n            >\n              {LINKS.map((l, i) => (\n                <motion.a\n                  key={l.href}\n                  href={l.href}\n                  onClick={() => setOpen(false)}\n                  initial={{ opacity: 0, x: -12 }}\n                  animate={{ opacity: 1, x: 0 }}\n                  transition={{ delay: 0.04 * i }}\n                  className=\"block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground\"\n                >\n                  {l.label}\n                </motion.a>\n              ))}\n              <a href=\"#download\" onClick={() => setOpen(false)} className=\"block p-2\">\n                <Button className=\"w-full\">\n                  <Download size={14} /> Download APK\n                </Button>\n              </a>\n            </motion.div>\n          )}\n        </AnimatePresence>\n      </div>\n    </header>\n  );\n}\n