import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "Log in" };
export default function LoginPage() { return <main className="grid min-h-screen lg:grid-cols-2"><section className="flex items-center justify-center p-6 sm:p-12"><div className="w-full max-w-md"><Logo /><p className="eyebrow mt-16 text-[var(--mint)]">Welcome back</p><h1 className="mt-4 text-4xl font-bold">Continue building.</h1><p className="mt-3 text-[var(--muted)]">Sign in to resume your courses and projects.</p><AuthForm mode="login" /><p className="mt-7 text-center text-sm text-[var(--muted)]">New to DevForge? <Link href="/register" className="focus-ring font-bold text-white hover:text-[var(--mint)]">Create an account</Link></p></div></section><aside className="grid-bg hidden border-l border-[var(--line)] p-16 lg:flex lg:flex-col lg:justify-between"><p className="eyebrow text-[var(--mint)]">Current build</p><blockquote className="max-w-xl text-4xl font-semibold leading-tight">&quot;The fastest way to understand the system is to build the system.&quot;</blockquote><p className="font-mono text-sm text-[var(--muted)]">PROJECT 04 / FULL-STACK PATH</p></aside></main>; }
