import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  children: React.ReactNode;
  className?: string;
};

export default function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-white/20";

  // ✅ Azul RMI (usa tu variable --rmi-accent)
const primary =
  "bg-[rgb(var(--rmi-accent))] text-white shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:brightness-110";

  const secondary =
    "border border-white/15 bg-white/5 text-white hover:border-white/25 hover:bg-white/10 backdrop-blur";

  const ghost = "text-white/80 hover:text-white";

  return (
    <Link
      href={href}
      className={`${base} ${
        variant === "primary" ? primary : variant === "secondary" ? secondary : ghost
      } ${className}`}
    >
      {children}
    </Link>
  );
}