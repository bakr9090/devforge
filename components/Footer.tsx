import Link from "next/link";
import { Logo } from "./Logo";

const groups = [
  { title: "Platform", links: [["Courses", "/courses"], ["Learning Paths", "/#learning-path"], ["Pricing", "/#pricing"], ["Community", "/community"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Careers", "/careers"]] },
  { title: "Resources", links: [["Blog", "/blog"], ["Documentation", "/documentation"], ["FAQ", "/#faq"]] },
  { title: "Legal", links: [["Privacy", "/privacy"], ["Terms", "/terms"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#060808] py-16">
      <div className="shell grid gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div><Logo /><p className="mt-5 max-w-xs leading-6 text-[var(--muted)]">Practical development education for people ready to build what comes next.</p><a className="focus-ring mt-7 inline-block text-sm font-bold text-[var(--mint)] hover:text-white" href="mailto:hello@devforge.dev">hello@devforge.dev</a></div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4" data-stagger>{groups.map((group) => <div key={group.title}><h3 className="mb-4 text-sm font-bold">{group.title}</h3><ul className="space-y-3">{group.links.map(([label, href]) => <li key={label}><Link className="footer-link focus-ring inline-block text-sm text-[var(--muted)]" href={href}>{label}</Link></li>)}</ul></div>)}</div>
      </div>
      <div className="shell mt-14 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">Copyright 2026 DevForge. All rights reserved.</div>
    </footer>
  );
}
