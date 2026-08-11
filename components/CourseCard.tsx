import { ArrowUpRight, Clock3, FolderGit2, Gauge } from "lucide-react";
import type { Course } from "@/data/courses";
import { CourseVisual } from "./CourseVisual";
import Link from "next/link";

export function CourseCard({ course }: { course: Course }) {
  return (
    <article className="surface card-lift group flex h-full flex-col">
      <CourseVisual course={course} />
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center justify-between"><span className="eyebrow text-[var(--muted)]">{course.category}</span><span className="text-xl font-bold">${course.price}</span></div>
        <h3 className="text-2xl font-semibold">{course.title}</h3>
        <p className="mt-3 flex-1 leading-6 text-[var(--muted)]">{course.shortDescription}</p>
        <div className="my-6 grid grid-cols-3 gap-2 border-y border-[var(--line)] py-4 text-xs text-[var(--muted)]">
          <span className="flex items-center gap-1.5"><Gauge size={14} />{course.level.split(" to ")[0]}</span>
          <span className="flex items-center gap-1.5"><Clock3 size={14} />{course.duration}</span>
          <span className="flex items-center gap-1.5"><FolderGit2 size={14} />{course.projects} projects</span>
        </div>
        <Link href={`/courses/${course.slug}`} className="focus-ring flex items-center justify-between font-bold transition-colors group-hover:text-[var(--mint)]">View course <ArrowUpRight size={18} /></Link>
      </div>
    </article>
  );
}
