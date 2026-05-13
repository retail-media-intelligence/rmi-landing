import { notFound } from 'next/navigation';
import { Metadata } from 'next';

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

// 4. METADATA (Corregido para Next.js 15/16 con await params)
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

// 5. PÁGINA FRONTEND (Corregido para Next.js 15/16 con await params)
export default async function SolucionSEO({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = await getSheetData();
  
  const pageData = data.find((row) => row.slug === resolvedParams.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {pageData.h1}
          </h1>
          <div className="inline-block bg-blue-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Soluciones para {pageData.pais}
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light border-l-4 border-blue-500 pl-6 mb-12">
            {pageData.parrafointro}
          </p>

          <div className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">¿Por qué elegir nuestra plataforma de {pageData.servicio}?</h2>
            <ul className="space-y-4 text-lg text-gray-600">
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                Monetización inmediata a través de anuncios contextuales.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                Reportería automatizada para facturación a marcas CPG.
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-3">✓</span>
                Soporte y despliegue especializado para el mercado de {pageData.pais}.
              </li>
            </ul>
            
            <div className="mt-10">
              <a href="/es/contacto" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-colors duration-200">
                Agendar una Demo en {pageData.pais}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}