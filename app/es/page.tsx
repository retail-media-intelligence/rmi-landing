"use client";

import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Image from "next/image";
import Button from "@/components/Button";
import { ScanLine, Zap, Monitor, BarChart3, Target, TrendingUp, MonitorPlay, 
  CircleOff, CheckCircle2, XCircle, Smartphone, Sparkles, Database, ArrowRight,
 GalleryHorizontal, Eye, Shuffle, Map, Building2, Layers3 } from "lucide-react";


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
        <div className="grid gap-6 md:grid-cols-2">

          {/* Card 1 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
              <ScanLine size={20} />
            </div>

            <p className="text-sm font-semibold text-white">
              Verificadores de precio
            </p>

            <p className="mt-2 text-sm text-white/70">
              Hoy solo muestran información al cliente.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
              <Monitor size={20} />
            </div>

            <p className="text-sm font-semibold text-white">
              Pantallas en tienda
            </p>

            <p className="mt-2 text-sm text-white/70">
              Funcionan como loops pasivos sin relación con el producto evaluado.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
              <Target size={20} />
            </div>

            <p className="text-sm font-semibold text-white">
              Momento de evaluación
            </p>

            <p className="mt-2 text-sm text-white/70">
              Las marcas buscan presencia exactamente cuando el cliente evalúa un producto.
            </p>
          </div>

          {/* Card 4 */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-4 inline-flex rounded-lg bg-white/10 p-3">
              <TrendingUp size={20} />
            </div>

            <p className="text-sm font-semibold text-white">
              Inventario publicitario
            </p>

            <p className="mt-2 text-sm text-white/70">
              Cada punto de escaneo puede convertirse en impresiones publicitarias medibles.
            </p>
          </div>

        </div>
      </Section>

      {/* DIFFERENTIATION */}
      <Section
        id="platform"
        title="No es señalización digital. Es infraestructura de ingresos."
        subtitle="La diferencia no es la pantalla. Es lo que la activa y cómo se monetiza."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {/* Traditional signage */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-white/10 p-3">
                <MonitorPlay size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  Modelo tradicional
                </p>
                <p className="mt-1 text-base font-semibold text-white/80">
                  Señalización digital
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <XCircle size={18} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-sm font-medium text-white/85">Contenido en loop</p>
                  <p className="mt-1 text-sm text-white/60">
                    La pantalla reproduce contenido repetitivo sin activación por evento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CircleOff size={18} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Sin relación con el producto evaluado
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    El mensaje no responde al contexto real del cliente en ese momento.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 size={18} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Difícil de medir por evento
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    No existe trazabilidad clara entre interacción y exposición publicitaria.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp size={18} className="mt-0.5 shrink-0 text-white/35" />
                <div>
                  <p className="text-sm font-medium text-white/85">
                    Modelo basado en presencia visual
                  </p>
                  <p className="mt-1 text-sm text-white/60">
                    Genera visibilidad, pero no una infraestructura clara de ingresos medibles.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scan-activated retail media */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/10 to-cyan-400/10 p-6 backdrop-blur transition hover:border-cyan-300/30 hover:from-white/10 hover:to-cyan-400/15">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
                <ScanLine size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/70">
                  Modelo RMI
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  Retail Media activado por escaneo
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Activado por un escaneo real
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    La interacción parte de una acción concreta del cliente dentro de la tienda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Contextual al producto evaluado
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    El anuncio responde al SKU o categoría que el cliente está consultando.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <BarChart3 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Impresiones registradas por evento
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Cada exposición puede asociarse a una interacción específica y quedar registrada.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <TrendingUp size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Modelo basado en ingresos medibles
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Convierte puntos de escaneo en inventario publicitario con base operativa y comercial.
                  </p>
                </div>
              </div>
            </div>
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
          {/* Step 1 */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex rounded-xl bg-white/10 p-3">
                <Smartphone size={20} />
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/40">
                Paso 1
              </span>
            </div>

            <p className="text-base font-semibold text-white">
              Puntos de escaneo en tienda
            </p>

            <p className="mt-3 text-sm text-white/65">
              Se despliega en verificadores, kioscos y estaciones asistidas. En
              reposo, mantiene un carrusel configurable.
            </p>

            <div className="mt-5 space-y-2">
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                APK segura basada en Android
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                Control por tienda / región
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                Modo standby medible
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/10 to-cyan-400/10 p-6 backdrop-blur transition hover:border-cyan-300/30 hover:from-white/10 hover:to-cyan-400/15">
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
                <Sparkles size={20} />
              </div>
              <span className="rounded-full border border-cyan-300/20 px-3 py-1 text-xs font-medium text-cyan-200/70">
                Paso 2
              </span>
            </div>

            <p className="text-base font-semibold text-white">
              El escaneo activa la selección
            </p>

            <p className="mt-3 text-sm text-white/70">
              El sistema detecta SKU o categoría y evalúa qué campañas aplican a ese
              momento específico.
            </p>

            <div className="mt-5 space-y-2">
              <div className="rounded-xl border border-cyan-300/15 bg-black/10 px-3 py-2 text-sm text-white/75">
                Selección en tiempo real
              </div>
              <div className="rounded-xl border border-cyan-300/15 bg-black/10 px-3 py-2 text-sm text-white/75">
                Contexto por producto
              </div>
              <div className="rounded-xl border border-cyan-300/15 bg-black/10 px-3 py-2 text-sm text-white/75">
                Entrega inmediata del creativo
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-5 flex items-center justify-between">
              <div className="inline-flex rounded-xl bg-white/10 p-3">
                <Database size={20} />
              </div>
              <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-white/40">
                Paso 3
              </span>
            </div>

            <p className="text-base font-semibold text-white">
              Medición y monetización
            </p>

            <p className="mt-3 text-sm text-white/65">
              Cada evento queda registrado y alimenta analítica, reporting y base
              operativa para facturación.
            </p>

            <div className="mt-5 space-y-2">
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                Logs por evento
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                Reportes por tienda y campaña
              </div>
              <div className="rounded-xl border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/70">
                Base para facturación
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 hidden items-center justify-center gap-3 text-white/25 md:flex">
          <ArrowRight size={16} />
          <ArrowRight size={16} />
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
          {/* Left side */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20 hover:bg-white/10">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-white/10 p-3">
                <GalleryHorizontal size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                  Presencia continua
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  Carrusel medible mientras está inactivo
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Eye size={18} className="mt-0.5 shrink-0 text-white/45" />
                <div>
                  <p className="text-sm font-medium text-white/90">
                    Carrusel dinámico
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Mantiene presencia visual mientras el punto no está siendo utilizado.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Eye size={18} className="mt-0.5 shrink-0 text-white/45" />
                <div>
                  <p className="text-sm font-medium text-white/90">
                    Impresiones medibles
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Permite registrar exposición aun cuando no hay interacción de escaneo.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Shuffle size={18} className="mt-0.5 shrink-0 text-white/45" />
                <div>
                  <p className="text-sm font-medium text-white/90">
                    Variación automática
                  </p>
                  <p className="mt-1 text-sm text-white/65">
                    Reduce repetición visual mediante playlists dinámicas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-white/10 to-cyan-400/10 p-6 backdrop-blur transition hover:border-cyan-300/30 hover:from-white/10 hover:to-cyan-400/15">
            <div className="mb-5 flex items-center gap-3">
              <div className="inline-flex rounded-xl bg-cyan-400/15 p-3 text-cyan-300">
                <Layers3 size={20} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-200/70">
                  Operación distribuida
                </p>
                <p className="mt-1 text-base font-semibold text-white">
                  Control por tienda y región
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Map size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Distribución regional
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Las campañas pueden variar según ubicación, región o grupo de tiendas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building2 size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Control por tienda
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Permite ajustar playlists y presencia según cada punto de despliegue.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ArrowRight size={18} className="mt-0.5 shrink-0 text-cyan-300" />
                <div>
                  <p className="text-sm font-medium text-white">
                    Complementa el escaneo
                  </p>
                  <p className="mt-1 text-sm text-white/70">
                    Aporta presencia continua, pero no reemplaza el núcleo activado por evento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        id="cta"
        title="Solicite un Briefing Ejecutivo"
        subtitle="Reciba el modelo de ingresos, plan de despliegue y demo privada de la plataforma."
      >
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur md:p-10">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute -bottom-12 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative z-10 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-white/40">
                Próximo paso
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                Conozca el modelo, el despliegue y la operación de la red
              </h3>

              <p className="mt-4 max-w-2xl text-sm text-white/65 md:text-base">
                Presentamos una vista ejecutiva del modelo de ingresos, el esquema de
                implementación y una demostración privada del backoffice y la lógica
                de activación por escaneo.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/50">
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Modelo de ingresos
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Plan de despliegue
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1.5">
                  Demo privada
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/10 p-5">
              <p className="text-sm font-medium text-white">
                Agende una conversación inicial
              </p>
              <p className="mt-2 text-sm text-white/60">
                Reciba una presentación ejecutiva enfocada en monetización, operación
                y escalabilidad.
              </p>

              <div className="mt-5 flex flex-col gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--rmi-accent))] px-6 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(59,130,246,0.25)] transition hover:brightness-110"
                  href="mailto:info@retailmedia.cc?subject=Solicitud%20Briefing%20Ejecutivo%20RMI"
                >
                  Enviar correo para agendar
                </a>

                <a
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white transition hover:border-white/30 hover:bg-white/10"
                  href="#backoffice"
                >
                  Ver plataforma / screenshots
                </a>
              </div>

              <p className="mt-4 text-xs text-white/45">
                Luego puede migrarse a formulario o integración con Calendly.
              </p>
            </div>
          </div>
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