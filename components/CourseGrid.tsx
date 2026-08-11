"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import type { Course } from "@/data/courses";
import { CourseCard } from "./CourseCard";

const filters = ["All", "Development", "AI", "Python", "Web", "Backend", "Beginner", "Intermediate", "Advanced"];

export function CourseGrid({ courses }: { courses: Course[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Featured");

  const visible = useMemo(() => {
    const normalized = query.toLowerCase();
    const result = courses.filter((course) => {
      const matchesQuery = `${course.title} ${course.description} ${course.skills.join(" ")}`.toLowerCase().includes(normalized);
      const matchesFilter = filter === "All" || course.category === filter || course.level.includes(filter) || (filter === "Backend" && course.skills.some((skill) => ["Node.js", "PostgreSQL", "APIs"].includes(skill)));
      return matchesQuery && matchesFilter;
    });
    return [...result].sort((a, b) => sort === "Price" ? a.price - b.price : sort === "Newest" ? b.id - a.id : a.id - b.id);
  }, [courses, filter, query, sort]);

  return (
    <div>
      <div className="grid gap-3 border-y border-[var(--line)] py-5 lg:grid-cols-[1fr_auto]">
        <label className="relative block"><span className="sr-only">Search courses</span><Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]" size={19} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search skills, tools, or courses" className="focus-ring h-12 w-full border border-[var(--line)] bg-[var(--panel)] pl-12 pr-4 text-sm outline-none placeholder:text-[var(--muted)]" /></label>
        <label className="flex items-center gap-3 border border-[var(--line)] bg-[var(--panel)] px-4"><SlidersHorizontal size={17} className="text-[var(--muted)]" /><span className="sr-only">Sort courses</span><select value={sort} onChange={(event) => setSort(event.target.value)} className="h-12 min-w-32 bg-transparent text-sm outline-none"><option className="bg-[var(--panel)]">Featured</option><option className="bg-[var(--panel)]">Newest</option><option className="bg-[var(--panel)]">Price</option></select></label>
      </div>
      <div className="my-7 flex flex-wrap gap-2" aria-label="Course filters">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`btn-motion focus-ring border px-4 py-2 text-sm ${filter === item ? "border-[var(--mint)] bg-[var(--mint)] text-[var(--ink)]" : "border-[var(--line)] text-[var(--muted)] hover:text-white"}`} aria-pressed={filter === item}>{item}</button>)}</div>
      <p className="mb-6 font-mono text-xs text-[var(--muted)]">{visible.length} {visible.length === 1 ? "course" : "courses"} found</p>
      {visible.length > 0 ? <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3" data-stagger>{visible.map((course) => <CourseCard course={course} key={course.id} />)}</div> : <div className="border border-[var(--line)] py-24 text-center"><p className="text-xl font-bold">No matching courses</p><p className="mt-2 text-[var(--muted)]">Try a different search or filter.</p></div>}
    </div>
  );
}
