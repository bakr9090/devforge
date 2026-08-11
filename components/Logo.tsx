import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="focus-ring inline-flex items-center gap-2" aria-label="DevForge home">
      <span className="grid size-8 place-items-center bg-[var(--mint)] font-mono text-sm font-black text-[var(--ink)]">D_</span>
      <span className="text-lg font-bold tracking-[0]">DevForge</span>
    </Link>
  );
}
