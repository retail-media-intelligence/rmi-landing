import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://retailmedia.cc';

  // 1. Rutas estáticas de tu web principal
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    }
  ];

  // 2. Rutas dinámicas (Extraídas automáticamente de tu Google Sheet)
  let dynamicRoutes: MetadataRoute.Sitemap = [];
  
  try {
    // Usamos tu API de Sheety
    const API_URL = 'https://api.sheety.co/e6a630f703aa492f0bfb2337e7290a74/maestroPaginasDinamicas/sheet1';
    
    // Aquí sí le damos un caché de 1 hora para no saturar la API cada vez que Google revise
    const res = await fetch(API_URL, { next: { revalidate: 3600 } }); 
    
    if (res.ok) {
      const json = await res.json();
      const rows = json.sheet1 || [];
      
      dynamicRoutes = rows.map((row: any) => ({
        url: `${baseUrl}/es/soluciones/${row.slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8, // Prioridad alta para SEO
      }));
    }
  } catch (error) {
    console.error('Error al generar el sitemap dinámico', error);
  }

  // 3. Unimos todo y se lo entregamos a Google
  return [...staticRoutes, ...dynamicRoutes];
}