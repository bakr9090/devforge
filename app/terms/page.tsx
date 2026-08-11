import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Terms", description: "Terms for using the DevForge website and learning materials." };

export default function TermsPage() {
  return <main><Navbar /><PageIntro eyebrow="Terms" title="Clear expectations for using DevForge." description="These terms cover the current public preview. Purchase, subscription, refund, and account terms must be finalized before paid services are enabled." /><article className="section-pad shell max-w-4xl"><p className="font-mono text-xs text-[var(--muted)]">Last updated: August 11, 2026</p><div className="mt-10 space-y-10">{[
    ["Using the website", "You may use the DevForge preview for personal, lawful evaluation. Do not interfere with the service, attempt unauthorized access, or misuse site content."],
    ["Learning materials", "DevForge branding, course descriptions, written materials, and original project briefs may not be republished or sold without permission."],
    ["Preview functionality", "Account creation, contact submission, and checkout are interface previews until their respective services are connected. They should not be treated as completed transactions."],
    ["Educational outcomes", "Courses are designed to develop practical skills, but enrollment does not guarantee employment, income, certification by a third party, or a specific career result."],
    ["Changes and contact", "Features and these terms may change as DevForge launches production services. Questions can be sent to hello@devforge.dev."],
  ].map(([title, text]) => <section key={title}><h2 className="text-2xl font-bold">{title}</h2><p className="mt-4 leading-8 text-[var(--muted)]">{text}</p></section>)}</div></article><Footer /></main>;
}
