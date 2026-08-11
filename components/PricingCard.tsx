import { Check } from "lucide-react";
import { Button } from "./Button";

export function PricingCard({ name, price, suffix, features, featured = false, href }: { name: string; price: string; suffix?: string; features: string[]; featured?: boolean; href: string }) {
  return (
    <article className={`relative flex h-full flex-col border p-7 ${featured ? "border-[var(--mint)] bg-[#101a17]" : "border-[var(--line)] bg-[var(--panel)]"}`}>
      {featured && <span className="eyebrow absolute right-0 top-0 bg-[var(--mint)] px-3 py-2 font-bold text-[var(--ink)]">Recommended</span>}
      <p className="eyebrow text-[var(--muted)]">{name}</p><p className="mt-6 text-5xl font-semibold">{price}<span className="text-base font-normal text-[var(--muted)]">{suffix}</span></p>
      <ul className="my-8 flex-1 space-y-4">{features.map((feature) => <li className="flex items-center gap-3 text-sm" key={feature}><Check size={16} className="text-[var(--mint)]" />{feature}</li>)}</ul>
      <Button href={href} variant={featured ? "primary" : "secondary"} className="w-full">Choose {name.toLowerCase()}</Button>
    </article>
  );
}
