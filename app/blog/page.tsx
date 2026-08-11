import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Blog", description: "Practical notes on learning, building, and shipping software." };
const posts = [
  ["Learning", "A better way to escape tutorial loops", "A practical framework for moving from passive lessons to independent builds.", "6 min read"],
  ["Projects", "What makes a portfolio project credible?", "How scope, decisions, documentation, and deployment turn an exercise into evidence.", "8 min read"],
  ["Career", "Explain your code like an engineer", "Use tradeoffs and constraints to tell a stronger story about the software you build.", "5 min read"],
] as const;

export default function BlogPage() {
  return <main><Navbar /><PageIntro eyebrow="DevForge notes" title="Ideas for becoming a stronger builder." description="Practical writing about learning software, choosing projects, and developing professional engineering habits." /><section className="section-pad shell"><div className="grid gap-5 lg:grid-cols-3" data-stagger>{posts.map(([category, title, description, duration], index) => <article className="surface card-lift flex min-h-80 flex-col p-7" key={title}><div className="flex items-center justify-between"><span className="eyebrow text-[var(--mint)]">{category}</span><span className="font-mono text-xs text-[var(--muted)]">0{index + 1}</span></div><h2 className="mt-auto pt-14 text-2xl font-bold">{title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{description}</p><div className="mt-7 flex items-center justify-between border-t border-[var(--line)] pt-5 text-sm"><span className="text-[var(--muted)]">{duration}</span><span className="flex items-center gap-2 font-bold">Coming soon<ArrowUpRight size={16} /></span></div></article>)}</div></section><Footer /></main>;
}
