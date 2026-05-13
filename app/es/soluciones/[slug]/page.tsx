import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// 1. Definimos la estructura de datos que viene de tu Google Sheet
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

// 2. Función para obtener los datos de tu Sheet (Reemplaza la URL)
async function getSheetData(): Promise<SeoPageData[]> {
  // Reemplaza esta URL con la que te dio Sheety o SteinHQ
  const API_URL = 'https://api.sheety.co/e6a630f703aa492f0bfb2337e7290a74/maestroPaginasDinamicas/sheet1';
  
  // Hacemos fetch a los datos. Al estar en Next.js, esto ocurre en el servidor.
  const res = await fetch(API_URL, { next: { revalidate: 3600 } }); // Se actualiza cada hora
  
  if (!res.ok) {
    console.error('Error al obtener datos del Google Sheet');
    return [];
  }

  const json = await res.json();
  // Sheety devuelve los datos dentro de un objeto con el nombre de la hoja (ej. json.hoja1)
  return json.sheet1 || []; 
}

// 3. GENERACIÓN ESTÁTICA PARA SEO (El truco para Cloudflare Pages)
// Esto le dice a Next.js qué URLs existen antes de que el usuario entre,
// generando las 35 páginas de golpe a máxima velocidad.
export async function generateStaticParams() {
  const data = await getSheetData();
  
  return data.map((row) => ({
    slug: row.slug,
  }));
}

// 4. METADATA DINÁMICA (Para que Google vea títulos y descripciones distintos en cada página)
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const data = await getSheetData();
  const pageData = data.find((row) => row.slug === params.slug);

  if (!pageData) {
    return { title: 'Página no encontrada' };
  }

  return {
    title: pageData.metatitle,
    description: pageData.metadescription,
    keywords: pageData.palabraclave,
  };
}

// 5. EL DISEÑO DE LA PÁGINA (Lo que ve el gerente de retail)
export default async function SolucionSEO({ params }: { params: { slug: string } }) {
  const data = await getSheetData();
  
  // Buscamos la fila exacta que coincide con la URL actual
  const pageData = data.find((row) => row.slug === params.slug);

  // Si alguien escribe una URL que no está en tu Sheet, le da error 404
  if (!pageData) {
    notFound();
  }

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Sección Hero (Cabecera) */}
      <section className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Aquí inyectamos el H1 de tu Sheet */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {pageData.h1}
          </h1>
          <div className="inline-block bg-blue-800 px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase mb-6">
            Soluciones para {pageData.pais}
          </div>
        </div>
      </section>

      {/* Sección de Contenido Principal */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Aquí inyectamos el Párrafo B2B Persuasivo */}
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