"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Props = {
  lang: "en" | "es";
};

export default function LangDropdown({ lang }: Props) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const current = lang === "en" ? "EN" : "ES";
  const other = lang === "en" ? "ES" : "EN";
  const otherHref = lang === "en" ? "/es" : "/en";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-medium text-white/80 backdrop-blur transition hover:border-white/25 hover:bg-white/10"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <span>{current}</span>
        <span className="text-white/50">▾</span>
      </button>

      {open && (
        <div
          className="absolute right-0 mt-2 w-28 overflow-hidden rounded-xl border border-white/10 bg-black/70 backdrop-blur"
          role="menu"
        >
          <Link
            href={`/${lang}`}
            className="block px-3 py-2 text-xs text-white/80 hover:bg-white/10"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            {current}
          </Link>

          <Link
            href={otherHref}
            className="block px-3 py-2 text-xs text-white/80 hover:bg-white/10"
            role="menuitem"
            onClick={() => setOpen(false)}
          >
            {other}
          </Link>
        </div>
      )}
    </div>
  );
}