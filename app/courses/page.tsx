import type { Metadata } from "next";
import { CourseGrid } from "@/components/CourseGrid";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { courses } from "@/data/courses";

export const metadata: Metadata = { title: "Courses", description: "Browse practical, project-based software development courses." };

export default function CoursesPage() {
  return <main><Navbar /><section className="grid-bg border-b border-[var(--line)] py-20 sm:py-28"><div className="shell"><SectionHeading eyebrow="Course catalog" title="Choose your next skill." description="Pick a focused course, build useful software, and leave with proof of what you can do." /></div></section><section className="section-pad shell"><CourseGrid courses={courses} /></section><Footer /></main>;
}
