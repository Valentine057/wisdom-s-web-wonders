import { useState } from "react";
import { PROFILE } from "./data";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 h-16 sm:flex sm:justify-between">
        <span className="truncate font-mono text-xl font-bold tracking-tighter text-foreground">
          W.B.J.
        </span>
        <div className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-primary">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden rounded-full border border-border bg-foreground/5 px-4 py-2 font-mono text-xs text-foreground transition-all hover:bg-foreground/10 sm:inline-block"
          >
            GET IN TOUCH
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border bg-foreground/5 px-4 py-2 font-mono text-xs text-foreground md:hidden"
          >
            {open ? "CLOSE" : "MENU"}
          </button>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4 text-sm text-muted-foreground">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
