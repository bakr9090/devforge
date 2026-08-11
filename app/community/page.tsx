import type { Metadata } from "next";
import { Code2, MessageSquareText, Presentation, Users } from "lucide-react";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Community", description: "Learn, build, and share progress with the DevForge community." };

const spaces = [
  [MessageSquareText, "Build discussions", "Ask focused questions and compare approaches with other learners."],
  [Code2, "Code reviews", "Share project decisions and get feedback that helps you improve."],
  [Presentation, "Demo sessions", "Present finished work, practice explaining it, and learn from other builds."],
  [Users, "Accountability groups", "Keep a steady rhythm with learners following a similar path."],
] as const;

export default function CommunityPage() {
  return <main><Navbar /><PageIntro eyebrow="DevForge community" title="Build alongside people who are building too." description="A focused space for questions, project feedback, demos, and the steady accountability that helps work get shipped." /><section className="section-pad shell"><div className="grid gap-px border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2" data-stagger>{spaces.map(([Icon, title, description]) => <article className="card-lift bg-[var(--ink)] p-7 sm:p-9" key={title}><Icon className="text-[var(--mint)]" size={24} /><h2 className="mt-12 text-2xl font-bold">{title}</h2><p className="mt-4 max-w-md leading-7 text-[var(--muted)]">{description}</p></article>)}</div><div className="mt-16 flex flex-col items-start justify-between gap-7 border-t border-[var(--line)] pt-10 md:flex-row md:items-center"><div><h2 className="text-3xl font-bold">Your first build is welcome here.</h2><p className="mt-3 text-[var(--muted)]">Create an account to join the learning community.</p></div><Button href="/register" arrow>Join DevForge</Button></div></section><Footer /></main>;
}
