"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function About() {
  const router = useRouter();
  const { pages } = useNavigation();

  const contactPath =
    pages.find((page) => page.name === "Contacto")?.path || "/contact/";

  const servicesPath =
    pages.find((page) => page.name === "Servicios")?.path || "/services/";

  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Nosotros
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              Cuidamos de vos y de tu familia.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              Somos una farmacia enfocada en brindar productos de salud, cuidado
              personal y atención cercana para acompañarte en cada momento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push(contactPath)}
                className="cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Contactanos
              </button>

              <button
                type="button"
                onClick={() => router.push(servicesPath)}
                className="cursor-pointer rounded-xl border border-emerald-200 bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                Ver servicios
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Nuestra farmacia
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              Salud, confianza y atención cercana.
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">
              Trabajamos para ofrecer una experiencia simple y accesible,
              poniendo a disposición productos de farmacia, higiene, cuidado
              personal y bienestar.
            </p>

            <p className="mt-4 leading-7 text-zinc-600">
              Nuestro objetivo es acompañar a cada persona con una atención
              clara y responsable, ayudando a encontrar los productos y
              servicios que necesita.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <span className="text-3xl">💚</span>

              <h3 className="mt-4 font-semibold text-zinc-900">
                Atención cercana
              </h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Buscamos brindar una atención clara, amable y personalizada.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <span className="text-3xl">🩺</span>

              <h3 className="mt-4 font-semibold text-zinc-900">Compromiso</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Priorizamos el cuidado y la información responsable.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <span className="text-3xl">🏠</span>

              <h3 className="mt-4 font-semibold text-zinc-900">Cercanía</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                Queremos ser una opción cercana para las necesidades diarias.
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-6">
              <span className="text-3xl">✨</span>

              <h3 className="mt-4 font-semibold text-zinc-900">Bienestar</h3>

              <p className="mt-2 text-sm leading-6 text-zinc-600">
                También acompañamos tus necesidades de cuidado personal.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-emerald-100 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Estamos para ayudarte.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-emerald-50 sm:text-base">
            Si necesitás información sobre nuestros productos o servicios, podés
            comunicarte con nosotros.
          </p>

          <button
            type="button"
            onClick={() => router.push(contactPath)}
            className="mt-7 cursor-pointer rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Contactanos
          </button>
        </div>
      </div>
    </section>
  );
}
