"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import Button from "@/components/Button";

export default function EnHome() {
  const [openImg, setOpenImg] = useState<string | null>(null);
  const [openAlt, setOpenAlt] = useState<string>("");

  // Cierra con ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenImg(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const backofficeLabels = useMemo(
    () => [
      "Campaign creation",
      "SKU/category targeting",
      "Impression analytics",
      "Standby carousel playlists",
      "Multi-store control",
      "Regional distribution",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-rmi text-white">
      <Header lang="en" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm text-white/60">
            In-store scan-triggered retail media network
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Monetize Every In-Store Scan
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Every time a customer scans a product — at price checkers, kiosks, or
            assisted stations — a measurable advertising opportunity is activated
            in real time.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>• Scan-triggered selection (real-time)</li>
            <li>• Contextual delivery based on the product</li>
            <li>• Deployable across multiple in-store scan points</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#cta" variant="primary">
              Request a strategy call
            </Button>
            <Button href="#backoffice" variant="secondary">
              Watch platform demo
            </Button>
          </div>
        </div>

        {/* Columna visual */}
        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-white/5 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-3">
            <Image
              src="/assets/hero-device.png"
              alt="Retail Media Intelligence device"
              width={900}
              height={700}
              className="h-auto w-full rounded-2xl"
              priority
            />
          </div>
          <p className="mt-3 text-xs text-white/50">
            (Reemplazar por mockup real del verificador/kiosco)
          </p>
        </div>

        {/* mini diagram */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-black/40 p-6 text-sm text-white/70 backdrop-blur">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1">
              SCAN
            </span>
            <span className="text-white/40">→</span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              AUCTION / SELECTION
            </span>
            <span className="text-white/40">→</span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              AD SERVED
            </span>
            <span className="text-white/40">→</span>
            <span className="rounded-full border border-white/15 px-3 py-1">
              IMPRESSION LOGGED
            </span>
          </div>

          <p className="mt-4 text-xs text-white/50">
            Triggered at any in-store scan point (price checkers, kiosks, assisted
            lanes/stations).
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <Section
        id="problem"
        title="Thousands of product scans happen in-store every day. Most don’t generate revenue."
        subtitle="A price check is an active evaluation moment. Most retailers don’t monetize that decision point."
      >
        <ul className="space-y-2 text-sm text-white/70">
          <li>• Price checkers only display information</li>
          <li>• In-store screens run passive loops</li>
          <li>• Brands want presence at the exact evaluation moment</li>
          <li>• Each scan point can become measurable ad inventory</li>
        </ul>
      </Section>

      {/* DIFFERENTIATION */}
      <Section
        id="platform"
        title="Not digital signage. Revenue infrastructure."
        subtitle="The difference isn’t the screen — it’s what activates it and how it monetizes."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              Traditional signage
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Loop-based content</li>
              <li>• Not tied to the evaluated product</li>
              <li>• Hard to measure per event</li>
              <li>• “Presence” model</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">
              Scan-triggered retail media
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>• Activated by a real scan</li>
              <li>• Contextual to the evaluated product</li>
              <li>• Event-level impression logs</li>
              <li>• Revenue model you can measure</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="how"
        title="How it works"
        subtitle="Three steps. No friction. Built to scale across stores."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              1) In-store scan points
            </p>
            <p className="mt-3 text-sm text-white/70">
              Deployed on price checkers, kiosks and assisted stations. When idle,
              it runs a configurable standby carousel.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Secure Android APK</li>
              <li>• Store/region control</li>
              <li>• Measurable standby mode</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              2) Scan triggers selection
            </p>
            <p className="mt-3 text-sm text-white/70">
              A scan identifies context (SKU/category) and evaluates eligible
              campaigns for that moment.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Real-time selection</li>
              <li>• Product context</li>
              <li>• Instant creative delivery</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              3) Measurement & monetization
            </p>
            <p className="mt-3 text-sm text-white/70">
              Every event is logged. Backoffice analytics support reporting and
              billing under revenue-share or subscription models.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Event-level logs</li>
              <li>• Store/campaign reporting</li>
              <li>• Billing-ready foundation</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* BUSINESS MODEL */}
      <Section
        id="model"
        title="Business model"
        subtitle="Two deployment approaches depending on how much control the retailer wants."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              Option A — Revenue share
            </p>
            <p className="mt-3 text-sm text-white/70">
              Faster rollout and monetization with minimal friction.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• No upfront platform cost</li>
              <li>• Minimum advertising commitment</li>
              <li>• Shared monthly media revenue</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">
              Option B — SaaS + hardware
            </p>
            <p className="mt-3 text-sm text-white/70">
              Retailer operates and manages campaigns with full control.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Hardware deployment</li>
              <li>• Monthly platform subscription</li>
              <li>• Multi-store backoffice control</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        id="industries"
        title="Who it’s for"
        subtitle="Designed for chains that want a new revenue layer and measurable control in-store."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-medium">Target retailers</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Supermarkets (10+ stores)</li>
              <li>• Pharmacy chains</li>
              <li>• Big-box / department stores</li>
              <li>• Convenience chains</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-medium">Best fit if you want</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Monetize existing in-store touchpoints</li>
              <li>• Scale by store and region</li>
              <li>• Centralized reporting and control</li>
              <li>• A repeatable revenue model</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* METRICS */}
      <Section
        id="metrics"
        title="What gets measured"
        subtitle="Not ‘branding’. Measurable operations with billing-ready foundations."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Event-level impressions</li>
              <li>• Category/campaign activity</li>
              <li>• Distribution by store/region</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Inventory generated per scan point</li>
              <li>• Creative performance</li>
              <li>• Billing-ready metrics (per model)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* BACKOFFICE */}
      <Section
        id="backoffice"
        title="Backoffice platform"
        subtitle="Not just a screen — a network with multi-store control."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {backofficeLabels.map((label, idx) => {
            const n = idx + 1;
            const imgSrc = `/assets/backoffice${n}.png`; // EN naming: backoffice1.png, backoffice2.png ...

            return (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-medium">{label}</p>

                <button
                  type="button"
                  onClick={() => {
                    setOpenImg(imgSrc);
                    setOpenAlt(label);
                  }}
                  className="mt-3 w-full text-left"
                  aria-label={`Open screenshot: ${label}`}
                >
                  <div className="overflow-hidden rounded-xl border border-white/10 bg-black/20">
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={imgSrc}
                        alt={label}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 33vw, 100vw"
                      />
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* STANDBY */}
      <Section
        id="standby"
        title="Standby carousel — complementary"
        subtitle="When idle, the system maintains presence with measurable carousel playlists and store-level variation."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Dynamic carousel during idle state</li>
              <li>• Measurable impressions</li>
              <li>• Automated playlist variation</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Regional distribution</li>
              <li>• Store-level control</li>
              <li>• Complementary to scan-triggered mode</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Request an Executive Briefing"
        subtitle="Get the revenue model, deployment plan, and a private platform walkthrough."
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
              href="mailto:info@retailmedia.cc?subject=RMI%20Executive%20Briefing%20Request"
            >
              Email to schedule
            </a>
            <a
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/30"
              href="#backoffice"
            >
              View platform screenshots
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">
            (Later we can replace this with a form + Calendly.)
          </p>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/50">
          © {new Date().getFullYear()} Retail Media Intelligence. All rights
          reserved.
        </div>
      </footer>

      {/* LIGHTBOX */}
      {openImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setOpenImg(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenImg(null)}
              className="absolute right-3 top-3 z-10 rounded-lg bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
            >
              Close
            </button>

            <div className="relative h-[85vh] w-full">
              <Image
                src={openImg}
                alt={openAlt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}