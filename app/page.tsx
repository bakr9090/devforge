import { Blocks, BookOpenCheck, BriefcaseBusiness, Code2, Compass, Download, FolderGit2, Gauge, Layers3, Rocket, Trophy, Users } from "lucide-react";
import { courses } from "@/data/courses";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CourseCard } from "@/components/CourseCard";
import { LearningPath } from "@/components/LearningPath";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";
import { Button } from "@/components/Button";
import { Footer } from "@/components/Footer";

const values = [
  [FolderGit2, "Project-Based", "Learn by building products that solve real problems."], [Compass, "Structured Paths", "Know what to learn next and why it matters."], [Code2, "Real-World Skills", "Practice the tools and workflows modern teams use."], [BriefcaseBusiness, "Career Focused", "Create work you can confidently showcase."],
] as const;
const features = [[Blocks, "Project-based learning"], [Download, "Downloadable resources"], [Code2, "Coding exercises"], [FolderGit2, "Real-world projects"], [Trophy, "Certificates"], [Users, "Community"], [Gauge, "Progress tracking"], [BookOpenCheck, "Lifetime access"]] as const;
const projects = [
  ["SaaS Dashboard", "Analytics / React", "mint"], ["E-commerce Platform", "Commerce / Full-stack", "yellow"], ["AI Chat Application", "AI / Retrieval", "coral"], ["Task Management App", "Productivity / APIs", "blue"], ["Portfolio Website", "Frontend / Motion", "mint"], ["Automation System", "Python / Workflows", "yellow"],
];
const testimonials = [
  ["Instead of jumping between random videos, I finally had a roadmap. The projects made everything click.", "Nadia Rahman", "Junior frontend developer", "Full-Stack Web Development", "NR"],
  ["I automated a weekly report in week three. That one project now saves my team hours every month.", "Marcus Lee", "Operations analyst", "Python & Automation", "ML"],
  ["The course treated AI as an engineering discipline. I left with an app I could actually demo to employers.", "Sofia Alvarez", "Software engineer", "AI Engineering", "SA"],
];

export default function HomePage() {
  return (
    <main><Navbar /><Hero />
      <section className="overflow-hidden border-b border-[var(--line)] py-8" aria-label="Student communities"><p className="mb-6 text-center text-sm text-[var(--muted)]">Trusted by developers building their future</p><div className="marquee-track flex w-max gap-16 whitespace-nowrap font-mono text-sm font-bold uppercase tracking-[.18em] text-white/35">{["NORTHSTAR", "BYTEHOUSE", "MAKERLAB", "STACKWORKS", "ORBITAL", "NORTHSTAR", "BYTEHOUSE", "MAKERLAB", "STACKWORKS", "ORBITAL"].map((name, i) => <span key={`${name}-${i}`}>{name}</span>)}</div></section>

      <section id="value" className="section-pad shell"><SectionHeading eyebrow="The difference" title={<>Stop watching tutorials.<br /><span className="text-[var(--mint)]">Start building.</span></>} description="Disconnected tutorials teach isolated syntax. DevForge gives you the sequence, context, and practice to turn knowledge into working software." /><div className="mt-16 grid gap-px bg-[var(--line)] border border-[var(--line)] md:grid-cols-2 lg:grid-cols-4">{values.map(([Icon, title, description], i) => <article className="bg-[var(--ink)] p-7" key={title}><span className="mb-10 grid size-11 place-items-center border border-[var(--line)] text-[var(--mint)]"><Icon size={20} /></span><p className="mb-3 font-mono text-xs text-[var(--muted)]">0{i + 1}</p><h3 className="text-xl font-bold">{title}</h3><p className="mt-3 leading-6 text-[var(--muted)]">{description}</p></article>)}</div></section>

      <section className="section-pad border-y border-[var(--line)] bg-[#0b0f0e]"><div className="shell"><div className="flex flex-col justify-between gap-7 md:flex-row md:items-end"><SectionHeading eyebrow="Course catalog" title="Learn by building." description="Courses designed around real-world projects, not endless theory." /><Button href="/courses" variant="secondary" arrow>View all courses</Button></div><div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">{courses.map((course) => <CourseCard course={course} key={course.id} />)}</div></div></section>

      <section id="learning-path" className="section-pad shell"><SectionHeading eyebrow="Learning path" title="Your roadmap from beginner to developer." description="Follow a clear sequence or enter where your current skills meet your next goal." /><LearningPath /></section>

      <section className="section-pad border-y border-[var(--line)] bg-[var(--paper)] text-[var(--ink)]"><div className="shell"><SectionHeading eyebrow="Built for progress" title="Everything you need to actually become a developer." /><div className="mt-16 grid gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-4">{features.map(([Icon, label]) => <div className="flex items-center gap-4 border-t border-black/20 py-6" key={label}><Icon size={20} /><span className="font-bold">{label}</span></div>)}</div></div></section>

      <section className="section-pad shell"><SectionHeading eyebrow="The process" title="Build momentum in three steps." /><div className="mt-16 grid gap-10 md:grid-cols-3">{[[Compass, "Choose your path", "Match a focused roadmap to the kind of work you want to do."], [Layers3, "Learn and build", "Turn each new concept into part of a working project."], [Rocket, "Launch your projects", "Deploy polished work and show people what you can make."]].map(([Icon, title, text], i) => { const StepIcon = Icon as typeof Compass; return <div key={title as string} className="border-t border-[var(--line)] pt-7"><div className="flex items-center justify-between"><StepIcon className="text-[var(--mint)]" size={25} /><span className="font-mono text-sm text-[var(--muted)]">0{i + 1}</span></div><h3 className="mt-16 text-2xl font-bold">{title as string}</h3><p className="mt-4 leading-7 text-[var(--muted)]">{text as string}</p></div>;})}</div></section>

      <section className="section-pad border-y border-[var(--line)] bg-[#0b0f0e]"><div className="shell"><SectionHeading eyebrow="Your portfolio" title="Projects people can actually use." description="Move beyond toy exercises. Every path produces credible, working software." /><div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{projects.map(([name, category, accent], i) => <article className="group relative min-h-64 overflow-hidden border border-[var(--line)] bg-[var(--panel)] p-6" key={name}><div className="absolute inset-x-5 bottom-5 top-16 border border-[var(--line)] bg-[#0a0e0d] p-4 transition-transform group-hover:-translate-y-2"><div className="flex gap-1.5"><i className="size-2 rounded-full bg-[#ff8f70]" /><i className="size-2 rounded-full bg-[#f6cf63]" /><i className="size-2 rounded-full bg-[var(--mint)]" /></div><div className="mt-7 grid grid-cols-[1fr_2fr] gap-2"><div className="h-24 bg-white/5" /><div className="space-y-2"><div className="h-7 opacity-20" style={{ backgroundColor: `var(--${accent})` }} /><div className="h-12 bg-white/5" /><div className="h-7 w-2/3 bg-white/5" /></div></div></div><span className="eyebrow relative z-10 text-[var(--muted)]">0{i + 1} / {category}</span><h3 className="absolute bottom-8 left-8 z-10 text-xl font-bold">{name}</h3></article>)}</div></div></section>

      <section className="section-pad shell"><SectionHeading eyebrow="Student outcomes" title="Built by learners, not spectators." /><div className="mt-14 grid gap-5 lg:grid-cols-3">{testimonials.map(([quote, name, role, course, initials]) => <figure className="surface flex min-h-80 flex-col p-7" key={name}><div className="mb-8 font-mono text-4xl leading-none text-[var(--mint)]">&quot;</div><blockquote className="flex-1 text-xl leading-8">{quote}</blockquote><figcaption className="mt-8 flex items-center gap-4 border-t border-[var(--line)] pt-5"><span className="grid size-11 place-items-center bg-[var(--paper)] text-sm font-black text-[var(--ink)]">{initials}</span><span><strong className="block text-sm">{name}</strong><span className="text-xs text-[var(--muted)]">{role} / {course}</span></span></figcaption></figure>)}</div><p className="mt-5 text-center text-xs text-[var(--muted)]">Representative demo testimonials for this fictional platform.</p></section>

      <section id="pricing" className="section-pad border-y border-[var(--line)] bg-[#0b0f0e]"><div className="shell"><SectionHeading eyebrow="Simple pricing" title="Start building today." description="Choose one course or unlock the complete DevForge library." align="center" /><div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-3"><PricingCard name="Free" price="$0" features={["Intro lessons", "Basic exercises", "Community access"]} href="/register" /><PricingCard name="Pro" price="$149" suffix="/year" features={["All courses", "Portfolio projects", "Certificates", "Progress tracking", "Community"]} featured href="/checkout/pro" /><PricingCard name="Lifetime" price="$399" features={["Everything in Pro", "Lifetime access", "Future courses", "Premium projects"]} href="/checkout/lifetime" /></div></div></section>

      <section id="faq" className="section-pad shell"><div className="grid gap-14 lg:grid-cols-[.7fr_1.3fr]"><SectionHeading eyebrow="Questions" title="The details, answered." description="Everything you need to know before starting your first build." /><FAQ /></div></section>

      <section className="grid-bg border-t border-[var(--line)] py-24"><div className="shell text-center"><p className="eyebrow mb-5 text-[var(--mint)]">Ready when you are</p><h2 className="section-title text-balance font-semibold">Your next project starts here.</h2><p className="mx-auto mt-6 max-w-xl text-lg text-[var(--muted)]">Stop collecting tutorials. Start building the skills that matter.</p><Button href="/register" arrow className="mt-9 min-w-48">Start learning</Button></div></section>
      <Footer />
    </main>
  );
}
