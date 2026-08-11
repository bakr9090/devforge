"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FormEvent, useState } from "react";

export function AuthForm({ mode }: { mode: "login" | "register" }) {
  const [submitted, setSubmitted] = useState(false);
  const isLogin = mode === "login";
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true); }
  return <form className="mt-8 space-y-5" onSubmit={submit}>
    {!isLogin && <Field label="Full name" type="text" placeholder="Alex Morgan" autoComplete="name" />}
    <Field label="Email address" type="email" placeholder="alex@example.com" autoComplete="email" />
    <Field label="Password" type="password" placeholder="At least 8 characters" autoComplete={isLogin ? "current-password" : "new-password"} />
    {!isLogin && <Field label="Confirm password" type="password" placeholder="Repeat your password" autoComplete="new-password" />}
    {isLogin && <div className="flex items-center justify-between gap-4 text-sm"><label className="flex items-center gap-2 text-[var(--muted)]"><input type="checkbox" className="accent-[var(--mint)]" />Remember me</label><Link href="/contact" className="focus-ring text-[var(--mint)] hover:text-white">Forgot password?</Link></div>}
    <button className="btn-motion focus-ring flex min-h-12 w-full items-center justify-center gap-2 bg-[var(--mint)] px-5 font-bold text-[var(--ink)] hover:bg-white" type="submit">{isLogin ? "Log in" : "Create account"}<ArrowRight size={17} /></button>
    {submitted && <p className="form-alert border border-[var(--yellow)]/40 bg-[var(--yellow)]/10 p-3 text-sm text-[var(--yellow)]" role="status">Account access is not enabled yet. No account information was submitted.</p>}
  </form>;
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return <label className="block"><span className="mb-2 block text-sm font-bold">{label}</span><input required className="focus-ring h-12 w-full border border-[var(--line)] bg-[#0b0f0e] px-4 outline-none placeholder:text-[#68716e]" {...props} /></label>;
}
