"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import Button from "@/components/Button";
import { ScanLine, Zap, Monitor, BarChart3 } from "lucide-react";

export default function EsHome() {
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
      "Creación de campañas",
      "Segmentación por SKU / categoría",
      "Analítica de impresiones",
      "Gestión de carrusel (standby)",
      "Control multi-tienda",
      "Distribución regional",
    ],
    []
  );

  return (
    <div className="min-h-screen bg-rmi text-white">
      <Header lang="es" />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-sm text-white/60">
            Red de retail media activada por escaneos en tienda
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            Monetiza Cada Escaneo en Tu Tienda
          </h1>

          <p className="mt-5 max-w-2xl text-base text-white/70 md:text-lg">
            Cada vez que un cliente escanea un producto — ya sea en verificadores
            de precio, kioscos o puntos de asistencia — se activa una oportunidad
            publicitaria medible en tiempo real.
          </p>

          <ul className="mt-6 space-y-2 text-sm text-white/70">
            <li>• Selección automática activada por escaneo</li>
            <li>• Entrega contextual basada en el producto</li>
            <li>• Desplegable en múltiples puntos dentro de la tienda</li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#cta" variant="primary">
              Solicitar llamada estratégica
            </Button>
            <a
              href="#backoffice"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/30"
            >
              Ver demo de plataforma
            </a>
          </div>
        </div>

        {/* Columna visual */}
        <div className="relative mt-12">
        <div className="absolute -inset-6 rounded-3xl bg-white/5 blur-2xl" />
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
          <video
            className="block h-auto w-full"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/assets/hero-device.png"
          >
            <source src="/videos/Rmi-Video-landing.webm" type="video/webm" />
            <source src="/videos/Rmi-Video-landing.mp4" type="video/mp4" />
            Tu navegador no soporta video HTML5.
          </video>
        </div>
      </div>

        {/* FLOW DIAGRAM */}
        <div className="mt-14">
          <div className="grid gap-6 md:grid-cols-4">

            {/* ESCANEO */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <ScanLine size={22} />
              </div>

              <p className="text-sm font-semibold text-white">Escaneo</p>

              <p className="mt-2 text-xs text-white/60">
                Cliente escanea un producto en verificador, kiosco o punto de asistencia.
              </p>
            </div>

            {/* SUBASTA */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <Zap size={22} />
              </div>

              <p className="text-sm font-semibold text-white">
                Selección en tiempo real
              </p>

              <p className="mt-2 text-xs text-white/60">
                El sistema identifica SKU o categoría y evalúa campañas elegibles.
              </p>
            </div>

            {/* ANUNCIO */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <Monitor size={22} />
              </div>

              <p className="text-sm font-semibold text-white">
                Entrega de anuncio
              </p>

              <p className="mt-2 text-xs text-white/60">
                El creativo seleccionado se muestra inmediatamente en la pantalla.
              </p>
            </div>

            {/* REGISTRO */}
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
                <BarChart3 size={22} />
              </div>

              <p className="text-sm font-semibold text-white">
                Registro y analítica
              </p>

              <p className="mt-2 text-xs text-white/60">
                Cada evento queda registrado para reportes y facturación.
              </p>
            </div>

          </div>

          <p className="mt-6 text-center text-xs text-white/50">
            Activado en cualquier punto de escaneo en tienda: verificadores, kioscos o estaciones asistidas.
          </p>
        </div>

      </section>

      {/* PROBLEM */}
      <Section
        id="problem"
        title="Miles de escaneos ocurren cada día en tu tienda. Hoy no generan ingresos."
        subtitle="Cada verificación de precio es un momento activo donde el cliente está evaluando un producto. Sin embargo, la mayoría de retailers no monetizan ese punto de decisión."
      >
        <ul className="space-y-2 text-sm text-white/70">
          <li>• Los verificadores de precio solo muestran información</li>
          <li>• Las pantallas en tienda funcionan como loops pasivos</li>
          <li>
            • Las marcas buscan presencia en el momento exacto de evaluación
          </li>
          <li>
            • Cada punto de escaneo puede convertirse en inventario publicitario
            medible
          </li>
        </ul>
      </Section>

      {/* DIFFERENTIATION */}
      <Section
        id="platform"
        title="No es señalización digital. Es infraestructura de ingresos."
        subtitle="La diferencia no es la pantalla. Es lo que la activa y cómo se monetiza."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              Señalización tradicional
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Contenido en loop</li>
              <li>• Sin relación con el producto evaluado</li>
              <li>• Difícil de medir por evento</li>
              <li>• Modelo basado en presencia visual</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">
              Retail Media activado por escaneo
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white">
              <li>• Activado por un escaneo real</li>
              <li>• Contextual al producto evaluado</li>
              <li>• Impresiones registradas por evento</li>
              <li>• Modelo basado en ingresos medibles</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section
        id="how"
        title="Cómo funciona"
        subtitle="Tres pasos. Sin fricción. Diseñado para operar en tienda y escalar por sucursal."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              1) Puntos de escaneo en tienda
            </p>
            <p className="mt-3 text-sm text-white/70">
              Se despliega en verificadores de precio, kioscos y estaciones
              asistidas. En reposo, muestra un carrusel (standby) configurable.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• APK segura basada en Android</li>
              <li>• Control por tienda / región</li>
              <li>• Modo standby medible</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              2) Escaneo activa selección del anuncio
            </p>
            <p className="mt-3 text-sm text-white/70">
              Cuando el cliente escanea un producto, el sistema identifica el
              contexto (SKU/categoría) y evalúa campañas elegibles para ese
              momento.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Selección en tiempo real</li>
              <li>• Contexto por producto</li>
              <li>• Entrega inmediata del creativo</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              3) Medición y monetización
            </p>
            <p className="mt-3 text-sm text-white/70">
              Cada evento queda registrado. El backoffice muestra analítica y
              soporta facturación y modelos de revenue share o suscripción.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Logs por evento</li>
              <li>• Reportes por tienda y campaña</li>
              <li>• Base para facturación</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* BUSINESS MODEL */}
      <Section
        id="model"
        title="Modelo de negocio"
        subtitle="Dos formas de implementarlo, dependiendo del nivel de control que quiera el retailer."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-white/50">
              Opción A — Revenue Share
            </p>
            <p className="mt-3 text-sm text-white/70">
              Enfoque para acelerar despliegue y monetización sin fricción.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Sin costo inicial de plataforma</li>
              <li>• Compromiso mínimo de inversión publicitaria</li>
              <li>• Ingresos compartidos mensualmente</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6">
            <p className="text-sm font-semibold text-white">
              Opción B — SaaS + Hardware
            </p>
            <p className="mt-3 text-sm text-white/70">
              El retailer gestiona y opera su red de campañas con control total.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>• Despliegue de hardware</li>
              <li>• Suscripción mensual de plataforma</li>
              <li>• Gestión multi-tienda desde backoffice</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section
        id="industries"
        title="Para quién es"
        subtitle="Pensado para cadenas que quieren una nueva fuente de ingresos y control medible en tienda."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-medium">Retailers objetivo</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Supermercados (10+ tiendas)</li>
              <li>• Farmacias</li>
              <li>• Big-box / Departamentales</li>
              <li>• Conveniencia</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="font-medium">Ideal si buscas</p>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Monetizar puntos existentes en tienda</li>
              <li>• Escalar por sucursal y región</li>
              <li>• Reportes y control centralizado</li>
              <li>• Un modelo de ingresos repetible</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* METRICS */}
      <Section
        id="metrics"
        title="Lo que se mide"
        subtitle="No es ‘branding’. Es operación medible con base para facturación y optimización."
      >
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Impresiones por evento</li>
              <li>• Actividad de campañas por categoría</li>
              <li>• Distribución por tienda / región</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Inventario generado por punto de escaneo</li>
              <li>• Rendimiento por creativo</li>
              <li>• Base para facturación (según modelo)</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* BACKOFFICE */}
      <Section
        id="backoffice"
        title="Backoffice de plataforma"
        subtitle="Esto no es solo una pantalla. Es una red con control multi-tienda."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {backofficeLabels.map((label, idx) => {
            const n = idx + 1;
            const imgSrc = `/assets/backoffice-${n}.png`; // ES naming: backoffice-1.png, backoffice-2.png ...

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
                  aria-label={`Abrir screenshot: ${label}`}
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

        <p className="mt-6 text-sm text-white/60">
          Tip: cuando tengas los screenshots, reemplazamos estos placeholders por
          imágenes reales (grid) y queda “enterprise-ready”.
        </p>
      </Section>

      {/* STANDBY */}
      <Section
        id="standby"
        title="Modo Standby (carrusel) — complemento"
        subtitle="Cuando no hay escaneo, el sistema mantiene presencia con un carrusel medible y playlists dinámicas por tienda."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Carrusel dinámico mientras está inactivo</li>
              <li>• Impresiones medibles</li>
              <li>• Variación automática para evitar repetición</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-2 text-sm text-white/70">
              <li>• Distribución regional de campañas</li>
              <li>• Control por tienda</li>
              <li>• Complementa (no reemplaza) el escaneo</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Solicite un Briefing Ejecutivo"
        subtitle="Reciba el modelo de ingresos, plan de despliegue y demo privada de la plataforma."
      >
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:opacity-90"
              href="mailto:info@retailmedia.cc?subject=Solicitud%20Briefing%20Ejecutivo%20RMI"
            >
              Enviar correo para agendar
            </a>
            <a
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white hover:border-white/30"
              href="#backoffice"
            >
              Ver plataforma / screenshots
            </a>
          </div>
          <p className="mt-4 text-xs text-white/50">
            (Luego podemos cambiar esto por un formulario + Calendly.)
          </p>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 text-sm text-white/50">
          © {new Date().getFullYear()} Retail Media Intelligence. Todos los
          derechos reservados.
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
              Cerrar
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