import Link from "next/link";
import { BriefcaseBusiness, GitFork, PlaySquare } from "lucide-react";
import { Logo } from "./Logo";

const groups = [
  { title: "Platform", links: [["Courses", "/courses"], ["Learning Paths", "/#learning-path"], ["Pricing", "/#pricing"], ["Community", "/contact"]] },
  { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Careers", "/contact"]] },
  { title: "Resources", links: [["Blog", "/about"], ["Documentation", "/courses"], ["FAQ", "/#faq"]] },
  { title: "Legal", links: [["Privacy", "/about"], ["Terms", "/about"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--line)] bg-[#060808] py-16">
      <div className="shell grid gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div><Logo /><p className="mt-5 max-w-xs leading-6 text-[var(--muted)]">Practical development education for people ready to build what comes next.</p><div className="mt-7 flex gap-3">{[GitFork, BriefcaseBusiness, PlaySquare].map((Icon, index) => <a href="https://example.com" aria-label={["GitHub", "LinkedIn", "YouTube"][index]} className="focus-ring grid size-10 place-items-center border border-[var(--line)] text-[var(--muted)] hover:text-white" key={index}><Icon size={18} /></a>)}</div></div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">{groups.map((group) => <div key={group.title}><h3 className="mb-4 text-sm font-bold">{group.title}</h3><ul className="space-y-3">{group.links.map(([label, href]) => <li key={label}><Link className="focus-ring text-sm text-[var(--muted)] hover:text-white" href={href}>{label}</Link></li>)}</ul></div>)}</div>
      </div>
      <div className="shell mt-14 border-t border-[var(--line)] pt-6 text-xs text-[var(--muted)]">Copyright 2026 DevForge. A fictional education platform built for demonstration.</div>
    </footer>
  );
}
