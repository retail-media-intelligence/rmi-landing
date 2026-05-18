import { paginasData } from '@/app/data/data';

export async function GET() {
  const baseUrl = 'https://retailmedia.cc';

  // 1. Rutas estáticas principales
  const staticRoutes = [
    { url: `${baseUrl}/es`, priority: '1.0', changefreq: 'weekly' },
    { url: `${baseUrl}/en`, priority: '1.0', changefreq: 'weekly' },
  ];

  // 2. Rutas dinámicas (Tus 35 páginas de países)
  const seoRoutes = paginasData.map((pagina) => ({
    url: `${baseUrl}/es/soluciones/${pagina.slug}`,
    priority: '0.8',
    changefreq: 'monthly',
  }));

  const allRoutes = [...staticRoutes, ...seoRoutes];

  // 3. Construimos el XML en texto puro
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allRoutes
    .map(
      (route) => `
  <url>
    <loc>${route.url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
    )
    .join('')}
</urlset>`;

  // 4. Retornamos la respuesta forzando las cabeceras para Cloudflare / Googlebot
  return new Response(sitemapXml.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}