import type { Metadata } from "next";
import { Mail, MessageSquare, Timer } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Contact", description: "Contact the DevForge learning team." };
export default function ContactPage() { return <main><Navbar /><PageIntro eyebrow="Contact" title="Let's solve it together." description="Questions about a path, your account, or a potential partnership? Send a note to the DevForge team." /><section className="section-pad shell grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><aside><h2 className="text-2xl font-bold">Talk to a human.</h2><p className="mt-4 leading-7 text-[var(--muted)]">We keep support practical, clear, and focused on getting you back to building.</p><div className="mt-10 space-y-6">{[[Mail, "Email", "hello@devforge.demo"], [Timer, "Response time", "Within 2 business days"], [MessageSquare, "Course guidance", "Personal recommendations"]].map(([Icon, label, value]) => { const I = Icon as typeof Mail; return <div className="flex gap-4" key={label as string}><I className="text-[var(--mint)]" size={20} /><p><strong className="block text-sm">{label as string}</strong><span className="text-sm text-[var(--muted)]">{value as string}</span></p></div>; })}</div></aside><ContactForm /></section><Footer /></main>; }
