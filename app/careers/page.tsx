import type { Metadata } from "next";
import { ArrowUpRight, HeartHandshake, Laptop, Lightbulb } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Careers", description: "Help DevForge make practical software education clearer and more useful." };

export default function CareersPage() {
  return <main><Navbar /><PageIntro eyebrow="Careers" title="Help more people become capable builders." description="We care about clear teaching, thoughtful software, and practical learning experiences that respect a student's time." /><section className="section-pad shell"><div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]"><h2 className="text-3xl font-bold">How we work</h2><div className="grid gap-5 sm:grid-cols-3" data-stagger>{[[Lightbulb, "Clarity first"], [Laptop, "Remote by design"], [HeartHandshake, "Useful by default"]].map(([Icon, label]) => { const I = Icon as typeof Lightbulb; return <div className="surface card-lift p-6" key={label as string}><I className="text-[var(--mint)]" /><p className="mt-10 font-bold">{label as string}</p></div>; })}</div></div><div className="mt-20"><p className="eyebrow text-[var(--mint)]">Open roles</p><div className="mt-6 border-y border-[var(--line)] py-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-bold">No open positions right now</h2><p className="mt-2 text-[var(--muted)]">We will publish future teaching, engineering, and community roles here.</p></div><a className="focus-ring inline-flex items-center gap-2 font-bold text-[var(--mint)] hover:text-white" href="mailto:hello@devforge.dev">Introduce yourself<ArrowUpRight size={17} /></a></div></div></div></section><Footer /></main>;
}
