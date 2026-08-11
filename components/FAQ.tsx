import { Plus } from "lucide-react";

const faqs = [
  ["Are the courses beginner friendly?", "Yes. Beginner courses assume no coding experience and build each concept through guided practice before independent projects."],
  ["Do I need prior programming experience?", "Not for the beginner paths. Intermediate courses clearly list the skills you should already have."],
  ["Do I get lifetime access?", "Individual course purchases and the Lifetime plan include ongoing access. Pro access remains active while your subscription is current."],
  ["Are certificates included?", "Certificates are included with Pro, Lifetime, and eligible individual course purchases after completing the required projects."],
  ["Can I learn at my own pace?", "Absolutely. Lessons are on demand and project milestones are flexible, so you can build around your schedule."],
  ["What technologies will I learn?", "Paths cover HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Python, databases, APIs, deployment, and applied AI."],
  ["Can I cancel my subscription?", "Yes. You can cancel Pro at any time and keep access through the end of your current billing period."],
];

export function FAQ() {
  return <div className="mt-12 border-t border-[var(--line)]">{faqs.map(([question, answer], index) => <details className="group border-b border-[var(--line)]" key={question} open={index === 0}><summary className="focus-ring flex cursor-pointer items-center justify-between gap-6 py-6 text-left text-lg font-bold"><span>{question}</span><Plus className="shrink-0 text-[var(--mint)] transition-transform group-open:rotate-45" size={20} /></summary><p className="max-w-3xl pb-6 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div>;
}
