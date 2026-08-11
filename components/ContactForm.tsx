"use client";

import { Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); }
  return <form className="surface p-6 sm:p-8" onSubmit={submit} data-reveal="right"><div className="grid gap-5 sm:grid-cols-2"><Field label="Name" type="text" placeholder="Your name" /><Field label="Email" type="email" placeholder="you@example.com" /></div><label className="mt-5 block"><span className="mb-2 block text-sm font-bold">Topic</span><select className="focus-ring h-12 w-full border border-[var(--line)] bg-[#0b0f0e] px-4"><option>Course question</option><option>Account support</option><option>Partnership</option><option>Other</option></select></label><label className="mt-5 block"><span className="mb-2 block text-sm font-bold">Message</span><textarea required rows={6} placeholder="How can we help?" className="focus-ring w-full resize-y border border-[var(--line)] bg-[#0b0f0e] p-4 outline-none placeholder:text-[#68716e]" /></label><button className="btn-motion focus-ring mt-5 flex min-h-12 items-center gap-2 bg-[var(--mint)] px-6 font-bold text-[var(--ink)] hover:bg-white" type="submit">Send message<Send size={16} /></button>{sent && <p className="form-alert mt-5 border border-[var(--yellow)]/40 bg-[var(--yellow)]/10 p-3 text-sm text-[var(--yellow)]" role="status">Message delivery is not enabled yet. Email hello@devforge.dev instead.</p>}</form>;
}
function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) { return <label><span className="mb-2 block text-sm font-bold">{label}</span><input required className="focus-ring h-12 w-full border border-[var(--line)] bg-[#0b0f0e] px-4 outline-none placeholder:text-[#68716e]" {...props} /></label>; }
