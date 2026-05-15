import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '@/components/Header'; // Inyectamos tu Header original

// 1. Definimos la estructura de datos
interface SeoPageData {
  slug: string;
  servicio: string;
  pais: string;
  palabraclave: string;
  metatitle: string;
  metadescription: string;
  h1: string;
  parrafointro: string;
}

// 2. Fetch a la API
async function getSheetData(): Promise<SeoPageData[]> {
  const API_URL = 'https://api.sheety.co/e6a630f703aa492f0bfb2337e7290a74/maestroPaginasDinamicas/sheet1?v=1';
  
  const res = await fetch(API_URL, { next: { revalidate: 10 } }); 
  
  if (!res.ok) {
    console.error('Error al obtener datos');
    return [];
  }

  const json = await res.json();
  return json.sheet1 || []; 
}

// 3. Generación Estática
export async function generateStaticParams() {
  const data = await getSheetData();
  return data.map((row) => ({
    slug: row.slug,
  }));
}

// 4. METADATA 
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const data = await getSheetData();
  const pageData = data.find((row) => row.slug === resolvedParams.slug);

  if (!pageData) {
    return { title: 'Página no encontrada' };
  }

  return {
    title: pageData.metatitle,
    description: pageData.metadescription,
    keywords: pageData.palabraclave,
  };
}
// 5. FUNCION DE BANDERITAS
// Función blindada contra errores de filas vacías
const obtenerCodigoBandera = (pais?: string) => {
  if (!pais) return ''; // Si la celda del Excel está vacía, no hace nada y no se estrella
  
  const codigos: Record<string, string> = {
    'mexico': 'mx',
    'méxico': 'mx',
    'panama': 'pa',
    'panamá': 'pa',
    'colombia': 'co',
    'republica dominicana': 'do',
    'república dominicana': 'do',
    'guatemala': 'gt',
    'costa rica': 'cr',
    'el salvador': 'sv'
  };
  return codigos[pais.toLowerCase()] || '';
};

// 6. PÁGINA FRONTEND PREMIUM
export default async function SolucionSEO({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await getSheetData();
  
  const pageData = data.find((row) => row.slug === resolvedParams.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30">
      {/* Tu Header Oficial */}
      <Header lang="es" />

      <main>
        {/* Sección Hero con fondo oscuro y brillo sutil */}
        <section className="relative overflow-hidden py-24 px-6">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black -z-10"></div>
          <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium tracking-wide text-white/80 uppercase">
            <span>Soluciones para {pageData.pais}</span>
            {obtenerCodigoBandera(pageData.pais) && (
              <img 
                src={`https://flagcdn.com/w20/${obtenerCodigoBandera(pageData.pais)}.png`} 
                srcSet={`https://flagcdn.com/w40/${obtenerCodigoBandera(pageData.pais)}.png 2x`}
                width="20" 
                alt={`Bandera de ${pageData.pais}`}
                className="rounded-sm shadow-sm"
              />
            )}
          </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              {pageData.h1}
            </h1>
          </div>
        </section>

        {/* Sección de Contenido */}
        <section className="pb-24 px-6">
          <div className="mx-auto max-w-4xl">
            {/* Párrafo Intro */}
            <p className="text-xl md:text-2xl leading-relaxed text-white/70 font-light border-l-4 border-blue-500/50 pl-6 mb-16">
              {pageData.parrafointro}
            </p>

            {/* Caja de Beneficios (Card de cristal) */}
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 tracking-tight text-white">
                ¿Por qué elegir nuestra plataforma de {pageData.servicio}?
              </h2>
              <ul className="space-y-6 text-lg text-white/70">
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>Monetización inmediata a través de anuncios contextuales.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>Reportería automatizada para facturación a marcas CPG.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-blue-400 mt-1">✦</span>
                  <span>Soporte y despliegue especializado para el mercado de {pageData.pais}.</span>
                </li>
              </ul>
              
              {/* Botón CTA apuntando al home */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <a 
                  href="/es#cta" 
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Agendar briefing en {pageData.pais}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}