import Link from "next/link";
import Button from "@/components/Button";
import LangDropdown from "@/components/LangDropdown";

export default function Header({ lang }: { lang: "en" | "es" }) {
  const t =
    lang === "en"
      ? {
          navProblem: "Opportunity",
          navPlatform: "Differentiation",
          navHow: "How it works",
          navModel: "Business model",
          navIndustries: "Industries",
          navPlatformUI: "Backoffice",
          cta: "Request briefing",
        }
      : {
          navProblem: "Oportunidad",
          navPlatform: "Diferenciación",
          navHow: "Cómo funciona",
          navModel: "Modelo",
          navIndustries: "Para quién es",
          navPlatformUI: "Backoffice",
          cta: "Agendar briefing",
        };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center gap-3">
          
            {/* Si no tienes logo-mark.svg, cambia a /assets/logo.png */}
            <img
  src="/assets/LogoC-DarkBG.svg"
  alt="RMI"
  className="h-10 w-auto"
/>
          

          <div className="leading-tight">
            <div className="flex items-baseline gap-2">
              <span className="text-base font-semibold tracking-tight text-white">
                Retail Media Intelligence
              </span>
        
            </div>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#problem" className="hover:text-white">
            {t.navProblem}
          </a>
          <a href="#platform" className="hover:text-white">
            {t.navPlatform}
          </a>
          <a href="#how" className="hover:text-white">
            {t.navHow}
          </a>
          <a href="#model" className="hover:text-white">
            {t.navModel}
          </a>
          <a href="#industries" className="hover:text-white">
            {t.navIndustries}
          </a>
          <a href="#backoffice" className="hover:text-white">
            {t.navPlatformUI}
          </a>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Lang pills */}
          <LangDropdown lang={lang} />

          {/* CTA */}
          <Button href="#cta" variant="primary" className="accent-glow">
            {t.cta}
          </Button>
        </div>
      </div>
    </header>
  );
}