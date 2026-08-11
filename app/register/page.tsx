import type { Metadata } from "next";
import Link from "next/link";
import { AuthForm } from "@/components/AuthForm";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = { title: "Create account" };
export default function RegisterPage() { return <main className="grid min-h-screen lg:grid-cols-2"><aside className="grid-bg hidden border-r border-[var(--line)] p-16 lg:flex lg:flex-col lg:justify-between"><p className="eyebrow text-[var(--mint)]">Start here</p><div><p className="text-6xl font-semibold leading-none text-[var(--mint)]">10,000+</p><p className="mt-4 max-w-sm text-xl text-[var(--muted)]">developers building the skills to create, launch, and lead.</p></div><p className="font-mono text-sm text-[var(--muted)]">ONE LESSON. THEN ONE PROJECT.</p></aside><section className="flex items-center justify-center p-6 sm:p-12"><div className="w-full max-w-md"><Logo /><p className="eyebrow mt-12 text-[var(--mint)]">Join DevForge</p><h1 className="mt-4 text-4xl font-bold">Build your next chapter.</h1><p className="mt-3 text-[var(--muted)]">Create a free account and start your first lesson.</p><AuthForm mode="register" /><p className="mt-7 text-center text-sm text-[var(--muted)]">Already have an account? <Link href="/login" className="focus-ring font-bold text-white hover:text-[var(--mint)]">Log in</Link></p></div></section></main>; }
