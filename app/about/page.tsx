import type { Metadata } from "next";
import { Code2, Compass, Hammer, Users } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "About", description: "Why DevForge teaches software development through real projects." };

const principles = [
  [Hammer, "Build first", "Practice starts before theory fades."],
  [Compass, "Clear direction", "Every lesson has a reason and a next step."],
  [Code2, "Modern craft", "Current tools are taught with durable principles."],
  [Users, "Open doors", "Beginner-friendly without lowering the ceiling."],
] as const;

export default function AboutPage() {
  return <main><Navbar /><PageIntro eyebrow="About DevForge" title="Software is learned by making it." description="DevForge is a project-first learning platform built around a simple belief: clarity comes from building real things." /><section className="section-pad shell grid gap-14 lg:grid-cols-2"><div><h2 className="section-title font-semibold">Less passive learning. More useful work.</h2></div><div className="space-y-6 text-lg leading-8 text-[var(--muted)]"><p>Traditional courses often separate concepts from the messy, rewarding work of using them. DevForge puts the project first, then teaches each idea at the moment it becomes useful.</p><p>Every path is designed to produce visible progress: working features, deployed products, and stronger engineering judgment. The goal is not to finish more videos. It is to become someone who can make software.</p></div></section><section className="border-y border-[var(--line)] bg-[#0b0f0e] py-20"><div className="shell grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4" data-stagger>{principles.map(([Icon, title, copy]) => <article className="card-lift bg-[#0b0f0e] p-7" key={title}><Icon className="text-[var(--mint)]" /><h2 className="mt-12 text-xl font-bold">{title}</h2><p className="mt-3 leading-6 text-[var(--muted)]">{copy}</p></article>)}</div></section><section className="section-pad shell"><p className="eyebrow text-[var(--mint)]">Curriculum approach</p><div className="mt-8 grid gap-10 lg:grid-cols-[320px_1fr]"><div className="grid aspect-square place-items-center border border-[var(--line)] bg-[var(--paper)] text-7xl font-black text-[var(--ink)]">DF</div><div className="self-center"><h2 className="text-4xl font-bold">Designed around the work.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">Courses start with a useful outcome, break it into achievable milestones, and introduce technical ideas in context. Each path balances guided instruction with independent decisions so learners practice both implementation and judgment.</p><div className="mt-8 grid gap-3 sm:grid-cols-2"><span className="border-t border-[var(--line)] pt-4 font-bold">Project briefs with real constraints</span><span className="border-t border-[var(--line)] pt-4 font-bold">Checkpoints for reflection and review</span></div></div></div></section><Footer /></main>;
}
