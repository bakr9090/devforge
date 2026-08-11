import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const steps = ["Programming Fundamentals", "Web Development", "Backend Development", "Databases", "APIs", "Full-Stack Projects", "Deployment", "Career / Freelancing"];

export function LearningPath() {
  return (
    <div className="mt-16 grid gap-0 lg:grid-cols-4">
      {steps.map((step, index) => (
        <div className="relative" key={step}>
          <Link href="/courses" className="focus-ring group flex min-h-40 flex-col justify-between border border-[var(--line)] bg-[#0d1110] p-6 hover:border-[var(--mint)] lg:-ml-px lg:-mt-px">
            <span className="font-mono text-sm text-[var(--mint)]">{String(index + 1).padStart(2, "0")}</span>
            <span className="flex items-end justify-between gap-4 text-lg font-bold">{step}<ArrowUpRight className="shrink-0 text-[var(--muted)] group-hover:text-[var(--mint)]" size={18} /></span>
          </Link>
          {index < steps.length - 1 && <ArrowDown className="absolute -bottom-3 left-1/2 z-10 -translate-x-1/2 bg-[var(--ink)] text-[var(--muted)] lg:hidden" size={22} />}
        </div>
      ))}
    </div>
  );
}
