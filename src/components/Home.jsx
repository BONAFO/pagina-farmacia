"use client";

import { useRouter } from "next/navigation";

const categories = [
  {
    icon: "💊",
    title: "Medicamentos",
    description: "Productos de farmacia para el cuidado de tu salud.",
  },
  {
    icon: "🧴",
    title: "Cuidado personal",
    description: "Higiene, cuidado corporal y productos para todos los días.",
  },
  {
    icon: "🧖",
    title: "Dermocosmética",
    description: "Cuidado especializado para mantener tu piel saludable.",
  },
  {
    icon: "👶",
    title: "Bebés",
    description: "Productos pensados para acompañar a los más pequeños.",
  },
  {
    icon: "💄",
    title: "Belleza",
    description: "Perfumería, maquillaje y productos de belleza.",
  },
  {
    icon: "🩹",
    title: "Primeros auxilios",
    description: "Lo esencial para tener siempre a mano.",
  },
];

const benefits = [
  {
    icon: "♡",
    title: "Cuidamos de vos",
    description:
      "Encontrá productos seleccionados para acompañar tu salud, cuidado y bienestar.",
  },
  {
    icon: "✓",
    title: "Todo en un solo lugar",
    description:
      "Farmacia, cuidado personal, belleza y bienestar en un mismo espacio.",
  },
  {
    icon: "⌂",
    title: "Cerca tuyo",
    description:
      "Una farmacia de cercanía pensada para que encuentres lo que necesitás.",
  },
];

export default function Home() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-200 bg-emerald-50">
        <div className="absolute right-[-120px] top-[-120px] h-[450px] w-[450px] rounded-full bg-emerald-200/40" />
        <div className="absolute bottom-[-180px] left-[-120px] h-[420px] w-[420px] rounded-full bg-emerald-100/80" />
        <div className="absolute right-[12%] top-[22%] hidden h-32 w-32 rounded-full border border-emerald-300/40 lg:block" />
        <div className="absolute right-[18%] top-[34%] hidden h-16 w-16 rounded-full border border-emerald-300/40 lg:block" />
        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-5 pb-16 pt-32 sm:px-8 lg:px-10">
          <div className="max-w-4xl">
            {/* TAG */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-semibold text-emerald-700 sm:text-sm">
                Salud · Cuidado personal · Bienestar
              </span>
            </div>

            {/* TITLE */}
            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-zinc-900 sm:text-6xl lg:text-8xl">
              Cuidarte también
              <br />
              es una forma de
              <span className="text-emerald-600"> quererte.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              Encontrá productos de farmacia, cuidado personal, belleza y
              bienestar para acompañarte todos los días.
            </p>

            {/* BUTTONS */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push("/products/")}
                className="rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-500"
              >
                Explorar productos
              </button>

              <button
                type="button"
                onClick={() => router.push("/services/")}
                className="rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                Conocé nuestros servicios
              </button>
            </div>

            {/* STATS */}
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-5 border-t border-emerald-200 pt-7">
              <div>
                <p className="text-2xl font-bold text-zinc-900">50+</p>

                <p className="mt-1 text-xs text-zinc-500">
                  Productos disponibles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-zinc-900">10</p>

                <p className="mt-1 text-xs text-zinc-500">Categorías</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-zinc-900">100%</p>

                <p className="mt-1 text-xs text-zinc-500">Enfocados en vos</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CATEGORÍAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              Explorá nuestro catálogo
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Todo lo que necesitás.
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              Encontrá rápidamente productos según lo que estés buscando.
            </p>
          </div>

          <button
            type="button"
            onClick={() => router.push("/products/")}
            className="w-fit text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
          >
            Ver todos los productos →
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <button
              key={category.title}
              type="button"
              onClick={() => router.push("/products/")}
              className="group rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl transition group-hover:bg-emerald-100">
                {category.icon}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-zinc-900">
                {category.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {category.description}
              </p>

              <span className="mt-4 block text-xs font-semibold text-emerald-600">
                Explorar →
              </span>
            </button>
          ))}
        </div>
      </section>
      {/* PRESENTACIÓN */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
              FARMACIA SALUD
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              Más que una farmacia.
              <br />
              <span className="text-zinc-400">Un lugar para cuidarte.</span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
              Queremos que encontrar lo que necesitás sea simple. Desde
              productos de farmacia y cuidado personal hasta belleza y
              bienestar, reunimos distintas opciones para acompañarte en cada
              etapa de tu día.
            </p>

            <button
              type="button"
              onClick={() => router.push("/about/")}
              className="mt-7 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
            >
              Conocé más sobre nosotros
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-emerald-600">
                    {benefit.icon}
                  </div>

                  <div>
                    <span className="text-xs text-zinc-400">0{index + 1}</span>

                    <h3 className="font-semibold text-zinc-900">
                      {benefit.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="overflow-hidden rounded-3xl border border-emerald-200 bg-emerald-50">
          <div className="grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-emerald-600">
                También podemos ayudarte
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-zinc-900 sm:text-4xl">
                Servicios pensados para acompañarte.
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                Conocé los diferentes servicios y espacios de atención que
                ofrecemos para hacer más simple tu experiencia en la farmacia.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/services/")}
              className="rounded-xl bg-emerald-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-500"
            >
              Ver servicios
            </button>
          </div>
        </div>
      </section>
      {/* CTA FINAL */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-emerald-700">
          <div className="absolute right-[-80px] top-[-100px] h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute bottom-[-100px] left-[20%] h-56 w-56 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative px-7 py-14 text-center sm:px-12 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-200">
              Estamos cerca cuando nos necesitás
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Tu bienestar empieza con pequeños cuidados.
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-emerald-100/80 sm:text-base">
              Conocé nuestros productos, servicios y formas de contacto.
            </p>

            <button
              type="button"
              onClick={() => router.push("/contact/")}
              className="mt-8 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50"
            >
              Contactanos
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
