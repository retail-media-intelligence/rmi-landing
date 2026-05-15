import { MetadataRoute } from 'next';
import { paginasData } from '@/app/data/data'; // Asegúrate de que la ruta apunte a tu archivo data.ts

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://retailmedia.cc';

  // 1. Rutas estáticas principales (Tus Homepages)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/es`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0, // Prioridad máxima para el home
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
  ];

  // 2. Rutas dinámicas de SEO (Tus 35 páginas de países generadas automáticamente)
  const seoRoutes: MetadataRoute.Sitemap = paginasData.map((pagina) => ({
    url: `${baseUrl}/es/soluciones/${pagina.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly', // Mensual es ideal para contenido SEO estático
    priority: 0.8, // Prioridad alta, pero por debajo del home
  }));

  // 3. Combinamos todo en un solo Sitemap poderoso
  return [...staticRoutes, ...seoRoutes];
}