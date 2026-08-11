import { Plus } from "lucide-react";

const questions = [
  ["How long do I have access?", "Individual course enrollment includes lifetime access to the lessons and project materials."],
  ["Can I complete the course at my own pace?", "Yes. The weekly estimate is a suggested rhythm, not a fixed schedule."],
  ["Is a certificate included?", "You will receive a certificate after completing the lessons and required projects."],
];

export function CourseDetailFAQ() {
  return (
    <div className="mt-20 grid gap-8 border-t border-[var(--line)] pt-20 lg:grid-cols-[.6fr_1.4fr]">
      <div><p className="eyebrow text-[var(--mint)]">Course FAQ</p><h2 className="mt-4 text-3xl font-bold">Before you enroll.</h2></div>
      <div className="border-t border-[var(--line)]">
        {questions.map(([question, answer], index) => (
          <details className="group border-b border-[var(--line)]" key={question} open={index === 0}>
            <summary className="focus-ring flex cursor-pointer items-center justify-between gap-6 py-5 font-bold">{question}<Plus className="shrink-0 text-[var(--mint)] group-open:rotate-45" size={18} /></summary>
            <p className="max-w-2xl pb-5 leading-7 text-[var(--muted)]">{answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
