"use client";

import { useRouter } from "next/navigation";
import services from "../db/Services.db.json";
import { useNavigation } from "../context/NavigationContext";

export default function Services() {
  const router = useRouter();
  const { pages } = useNavigation();

  const contactPath = pages.find(
    (page) => page.name === "Contacto"
  )?.path;

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-emerald-100 bg-emerald-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_40%)]" />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 lg:px-10 lg:pt-40">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-600">
            Servicios
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            Más que una farmacia,
            <span className="text-emerald-600">
              estamos para ayudarte.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
            Ofrecemos servicios pensados para acompañarte en el cuidado de tu
            salud y bienestar, con atención cercana y personalizada.
          </p>
        </div>
      </section>

      {/* Servicios */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg sm:p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50 text-2xl transition duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-100">
                {service.icon}
              </div>

              <h2 className="mt-6 text-xl font-bold text-zinc-900">
                {service.name}
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                {service.description}
              </p>

              <div className="mt-6 h-px bg-zinc-100 transition duration-300 group-hover:bg-emerald-200" />

              <button
                type="button"
                onClick={() => router.push(contactPath)}
                className="mt-5 cursor-pointer text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
              >
                Consultar servicio →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Proceso */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Cómo trabajamos
            </p>

            <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
              Atención simple y cercana.
            </h2>

            <p className="mt-4 text-sm leading-7 text-zinc-600 sm:text-base">
              Buscamos que cada consulta sea clara y que puedas encontrar lo
              que necesitás de manera sencilla.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="text-4xl font-bold text-emerald-500/30">
                01
              </span>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Nos contás
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Contanos qué necesitás o qué consulta querés realizar.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="text-4xl font-bold text-emerald-500/30">
                02
              </span>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Te orientamos
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Buscamos ayudarte a encontrar el producto o servicio adecuado.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
              <span className="text-4xl font-bold text-emerald-500/30">
                03
              </span>

              <h3 className="mt-4 text-lg font-semibold text-zinc-900">
                Te acompañamos
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Seguimos disponibles para ayudarte durante todo el proceso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50 p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-emerald-200/40 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                ¿Necesitás ayuda?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-zinc-900 sm:text-4xl">
                Estamos para ayudarte.
              </h2>

              <p className="mt-4 text-zinc-600">
                Si tenés alguna consulta sobre nuestros servicios o productos,
                podés contactarnos.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push(contactPath)}
              className="shrink-0 cursor-pointer rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Contactarnos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

