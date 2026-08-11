type Props = { eyebrow?: string; title: React.ReactNode; description?: string; align?: "left" | "center" };

export function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow mb-5 text-[var(--mint)]">{eyebrow}</p>}
      <h2 className="section-title text-balance font-semibold">{title}</h2>
      {description && <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{description}</p>}
    </div>
  );
}
