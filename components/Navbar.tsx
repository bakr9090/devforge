"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Logo } from "./Logo";

const links = [
  { label: "Courses", href: "/courses" },
  { label: "Learning Paths", href: "/#learning-path" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-[#080b0be8] backdrop-blur-xl transition-all ${compact ? "py-2" : "py-4"}`}>
      <nav className="shell flex items-center justify-between" aria-label="Main navigation">
        <Logo />
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link className="focus-ring text-sm text-[var(--muted)] transition-colors hover:text-white" href={link.href} key={link.label}>{link.label}</Link>)}
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button href="/login" variant="quiet">Log in</Button>
          <Button href="/register">Get started</Button>
        </div>
        <button className="focus-ring grid size-11 place-items-center border border-[var(--line)] md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="shell mt-3 border-t border-[var(--line)] py-4 md:hidden">
          <div className="flex flex-col">
            {links.map((link) => <Link className="focus-ring border-b border-[var(--line)] py-4 text-base" href={link.href} onClick={() => setOpen(false)} key={link.label}>{link.label}</Link>)}
            <div className="grid grid-cols-2 gap-3 pt-4"><Button href="/login" variant="secondary">Log in</Button><Button href="/register">Get started</Button></div>
          </div>
        </div>
      )}
    </header>
  );
}
