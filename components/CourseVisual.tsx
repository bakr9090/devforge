import { Braces, Code2, Cpu, Globe2 } from "lucide-react";
import type { Course } from "@/data/courses";

const accents = { mint: "#7cf7c5", yellow: "#f6cf63", coral: "#ff8f70", blue: "#7fb5ff" };
const icons = { web: Globe2, python: Braces, ai: Cpu, javascript: Code2 };

export function CourseVisual({ course, compact = false }: { course: Course; compact?: boolean }) {
  const Icon = icons[course.icon];
  return (
    <div className={`course-art ${compact ? "h-36" : "h-48"}`} style={{ "--art-accent": accents[course.accent] } as React.CSSProperties} role="img" aria-label={`${course.title} abstract course artwork`}>
      <div className="absolute left-7 top-7 z-10 font-mono text-xs text-white/50">COURSE / 0{course.id}</div>
      <Icon className="absolute bottom-6 right-7 z-10" size={compact ? 38 : 52} strokeWidth={1.25} style={{ color: accents[course.accent] }} aria-hidden="true" />
      <div className="absolute bottom-7 left-7 z-10 flex gap-1"><span className="h-1 w-10" style={{ background: accents[course.accent] }} /><span className="h-1 w-3 bg-white/25" /><span className="h-1 w-3 bg-white/25" /></div>
    </div>
  );
}
