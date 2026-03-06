import Link from "next/link";

type Props = {
  href: string;
  label: string;
  flag: string;
  active?: boolean;
};

export default function LangPill({ href, label, flag, active }: Props) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs font-medium transition",
        "border backdrop-blur",
        active
          ? "border-white/20 bg-white/10 text-white"
          : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20 hover:bg-white/10",
      ].join(" ")}
    >
      <span className="emoji text-base leading-none">{flag}</span>
      <span>{label}</span>
    </Link>
  );
}