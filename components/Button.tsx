import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", arrow = false }: ButtonProps) {
  const styles = {
    primary: "bg-[var(--mint)] text-[var(--ink)] hover:bg-white border-transparent",
    secondary: "border-[var(--line)] bg-transparent text-white hover:border-[var(--mint)]",
    quiet: "border-transparent bg-transparent text-white hover:text-[var(--mint)]",
  };

  return (
    <Link href={href} className={`btn-motion focus-ring inline-flex min-h-11 items-center justify-center gap-2 border px-5 py-3 text-sm font-bold ${styles[variant]} ${className}`}>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </Link>
  );
}
