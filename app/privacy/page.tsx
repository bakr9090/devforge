import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Privacy", description: "DevForge privacy information." };

export default function PrivacyPage() {
  return <main><Navbar /><PageIntro eyebrow="Privacy" title="Your information should be handled with care." description="This page describes the current DevForge preview and will be updated as account, payment, and community services are introduced." /><article className="section-pad shell max-w-4xl"><p className="font-mono text-xs text-[var(--muted)]">Last updated: August 11, 2026</p><div className="mt-10 space-y-10">{[
    ["Current preview", "The current website presents course, account, contact, and checkout interfaces. Authentication and payment processing are not connected, and payment details entered into the preview are not transmitted or stored by DevForge."],
    ["Information you provide", "When production account or contact services are enabled, this notice will identify what information is collected, why it is needed, how long it is retained, and the providers that process it."],
    ["Cookies and analytics", "The current application does not intentionally add advertising trackers. Hosting infrastructure may process technical request information needed to deliver and protect the site."],
    ["Your choices", "You may contact hello@devforge.dev with privacy questions. Account access, correction, export, and deletion procedures will be published before persistent accounts are enabled."],
    ["Policy changes", "This notice may change when new production services are added. The date above will be revised whenever the policy changes."],
  ].map(([title, text]) => <section key={title}><h2 className="text-2xl font-bold">{title}</h2><p className="mt-4 leading-8 text-[var(--muted)]">{text}</p></section>)}</div></article><Footer /></main>;
}
