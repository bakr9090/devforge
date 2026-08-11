import type { Metadata } from "next";
import { Check, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { Logo } from "@/components/Logo";
import { PaymentForm } from "@/components/PaymentForm";
import { courses, getCourseBySlug } from "@/data/courses";
import { getPlanBySlug, pricingPlans } from "@/data/plans";

export const metadata: Metadata = { title: "Checkout", robots: { index: false, follow: false } };
type PageProps = { params: Promise<{ course: string }> };
export function generateStaticParams() { return [...courses.map(({ slug }) => ({ course: slug })), ...pricingPlans.filter((plan) => plan.price > 0).map(({ slug }) => ({ course: slug }))]; }

export default async function CheckoutPage({ params }: PageProps) {
  const key = (await params).course;
  const course = getCourseBySlug(key);
  const plan = getPlanBySlug(key);
  if (!course && !plan) notFound();
  const item = plan ? { title: `DevForge ${plan.name}`, description: plan.description, price: plan.price, features: plan.features } : { title: course!.title, description: course!.shortDescription, price: course!.price, features: [`${course!.duration} guided path`, `${course!.projects} portfolio projects`, "Certificate of completion", "Lifetime course access"] };
  return <main className="min-h-screen"><header className="border-b border-[var(--line)] py-5"><div className="shell flex items-center justify-between"><Logo /><span className="flex items-center gap-2 text-xs text-[var(--muted)]"><ShieldCheck size={16} className="text-[var(--mint)]" />Secure checkout preview</span></div></header><div className="shell grid gap-12 py-12 lg:grid-cols-[1fr_420px] lg:py-20"><section><p className="eyebrow text-[var(--mint)]">Order summary</p><h1 className="mt-4 text-4xl font-bold">{item.title}</h1><p className="mt-4 max-w-xl leading-7 text-[var(--muted)]">{item.description}</p><ul className="mt-9 grid gap-4 sm:grid-cols-2">{item.features.map((feature) => <li className="flex items-center gap-3 border-t border-[var(--line)] pt-4 text-sm" key={feature}><Check size={16} className="text-[var(--mint)]" />{feature}</li>)}</ul><div className="mt-12 border-y border-[var(--line)] py-6"><div className="flex items-center justify-between"><span className="text-[var(--muted)]">Subtotal</span><span>${item.price}.00</span></div><div className="mt-3 flex items-center justify-between"><span className="text-[var(--muted)]">Tax</span><span>Calculated at payment</span></div><div className="mt-6 flex items-center justify-between border-t border-[var(--line)] pt-6 text-xl font-bold"><span>Total</span><span>${item.price}.00</span></div></div></section><PaymentForm /></div></main>;
}
