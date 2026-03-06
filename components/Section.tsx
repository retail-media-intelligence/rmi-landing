import React from "react";

export default function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-3xl text-white/70">{subtitle}</p>
      ) : null}
      {children ? <div className="mt-8">{children}</div> : null}
    </section>
  );
}