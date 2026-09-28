"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function Contact() {
  const router = useRouter();
  const { pages } = useNavigation();

  const homePath = pages.find((page) => page.name === "Inicio")?.path || "/";

  const servicesPath =
    pages.find((page) => page.name === "Servicios")?.path || "/services/";

  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Contacto
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              Estamos para ayudarte.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              Comunicate con nosotros para consultar sobre productos, servicios,
              disponibilidad o cualquier otra información que necesites.
            </p>
          </div>
        </div>
      </div>

      {/* CONTACT INFO */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* INFO */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              Encontranos
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              ¿Cómo podemos ayudarte?
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-600">
              Nuestro equipo está disponible para ayudarte con consultas sobre
              nuestros productos y servicios.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900">Dirección</h3>

                  <p className="mt-1 text-sm text-zinc-600">
                    Av. Principal 1234
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900">Teléfono</h3>

                  <p className="mt-1 text-sm text-zinc-600">(000) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                  ✉️
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900">Email</h3>

                  <p className="mt-1 text-sm text-zinc-600">
                    contacto@farmaciasalud.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-emerald-100 bg-emerald-50/50 p-5">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                  🕐
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900">Horarios</h3>

                  <p className="mt-1 text-sm text-zinc-600">
                    Lunes a viernes: 8:00 a 20:00
                  </p>

                  <p className="text-sm text-zinc-600">Sábados: 9:00 a 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Enviá tu consulta
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Completá el formulario y nos pondremos en contacto con vos.
            </p>

            <form className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Mensaje
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full resize-none rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                Enviar consulta
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="border-t border-emerald-100 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            También podés conocer nuestros servicios.
          </h2>

          <button
            type="button"
            onClick={() => router.push(servicesPath)}
            className="mt-6 cursor-pointer rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            Ver servicios
          </button>

          <button
            type="button"
            onClick={() => router.push(homePath)}
            className="ml-3 cursor-pointer rounded-xl border border-emerald-300 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    </section>
  );
}
