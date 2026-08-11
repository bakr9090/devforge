export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <section className="grid-bg border-b border-[var(--line)] py-20 sm:py-28"><div className="shell"><p className="eyebrow text-[var(--mint)]">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[.96] sm:text-7xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p></div></section>;
}
