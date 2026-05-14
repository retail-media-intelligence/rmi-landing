import Link from "next/link";

const footerLinks = [
  {
    title: "Retail Media LATAM",
    links: [
      { name: "Plataforma México", href: "/es/soluciones/plataforma-retail-media-mexico" },
      { name: "Retail Media Colombia", href: "/es/soluciones/plataforma-retail-media-colombia" },
      { name: "Monetización Panamá", href: "/es/soluciones/plataforma-retail-media-panama" },
    ],
  },
  {
    title: "Digital Signage",
    links: [
      { name: "Pasillos México", href: "/es/soluciones/publicidad-pantallas-pasillos-mexico" },
      { name: "Signage Colombia", href: "/es/soluciones/digital-signage-anuncios-contextuales-colombia" },
      { name: "Pantallas Dominicana", href: "/es/soluciones/digital-signage-anuncios-contextuales-dominicana" },
    ],
  },
  {
    title: "Operaciones",
    links: [
      { name: "Verificadores México", href: "/es/soluciones/verificadores-precios-publicidad-mexico" },
      { name: "Verificadores El Salvador", href: "/es/soluciones/verificadores-precios-publicidad-elsalvador" },
      { name: "Monetización Costa Rica", href: "/es/soluciones/monetizacion-espacios-tienda-costarica" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-16 text-sm text-white/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <Link href="/es" className="flex items-center gap-3 mb-6">
              <img src="/assets/LogoC-DarkBG.svg" alt="RMI" className="h-8 w-auto grayscale opacity-70" />
              <span className="font-semibold text-white">Retail Media Intelligence</span>
            </Link>
            <p className="max-w-[240px]">
              Plataforma de Retail Media impulsada por escaneo para supermercados en Latinoamérica.
            </p>
          </div>
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-white">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} Retail Media Intelligence. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}