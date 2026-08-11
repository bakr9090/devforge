import type { Metadata } from "next";
import { BookOpen, Check, CirclePlay, FolderGit2, Trophy } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Documentation", description: "A guide to courses, projects, progress, and certificates on DevForge." };
const guides = [
  [CirclePlay, "Course lessons", "Move through video, written notes, coding exercises, and checkpoints in order."],
  [FolderGit2, "Project submissions", "Use each project brief to plan, implement, test, document, and deploy your work."],
  [BookOpen, "Learning paths", "Follow the recommended sequence or start at the stage that matches your current skills."],
  [Trophy, "Certificates", "Complete required lessons and projects before generating a course certificate."],
] as const;

export default function DocumentationPage() {
  return <main><Navbar /><PageIntro eyebrow="Documentation" title="Get the most from every build." description="A concise guide to navigating courses, completing projects, and tracking your progress through DevForge." /><section className="section-pad shell grid gap-14 lg:grid-cols-[260px_1fr]"><aside><p className="eyebrow text-[var(--muted)]">In this guide</p><ol className="mt-5 space-y-3 text-sm">{guides.map(([, title], index) => <li className="flex gap-3" key={title}><span className="font-mono text-[var(--mint)]">0{index + 1}</span>{title}</li>)}</ol></aside><div className="space-y-12" data-stagger>{guides.map(([Icon, title, description], index) => <section className="border-t border-[var(--line)] pt-7" key={title}><div className="flex items-center gap-4"><Icon className="text-[var(--mint)]" size={22} /><h2 className="text-2xl font-bold">{title}</h2></div><p className="mt-4 max-w-2xl leading-7 text-[var(--muted)]">{description}</p><p className="mt-4 flex items-center gap-2 text-sm"><Check size={15} className="text-[var(--mint)]" />Stage {index + 1} of the learning workflow</p></section>)}</div></section><Footer /></main>;
}
