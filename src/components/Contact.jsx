// src/components/Contact.jsx
"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";
import t from "@/src/translations/Contact";

/**
 * Contact (página "Contacto")
 *
 * Los textos y emojis viven en src/translations/Contact.js. Acá quedan las
 * clases y las rutas.
 *
 * Las 4 tarjetas de información se generan con t.info.items y se asocian
 * por posición con INFO_STYLES (la misma alternancia de estilos que antes:
 * verde claro, blanca, blanca, verde claro). Hay que mantener el mismo orden.
 *
 * Los nombres "Inicio" y "Servicios" de pages.find(...) no son textos
 * visibles: son identificadores que deben coincidir con los de
 * NavigationContext, por eso se quedan acá.
 */

const INFO_STYLES = [
  "bg-emerald-50/50",
  "bg-white shadow-sm",
  "bg-white shadow-sm",
  "bg-emerald-50/50",
];

export default function Contact() {
  const router = useRouter();
  const { pages } = useNavigation();

  const homePath = pages.find((page) => page.name === "home")?.path || "/";

  const servicesPath =
    pages.find((page) => page.name === "services")?.path || "/services/";

  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              {t.hero.badge}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {t.hero.description}
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
              {t.info.badge}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900">
              {t.info.title}
            </h2>

            <p className="mt-4 max-w-xl leading-7 text-zinc-600">
              {t.info.description}
            </p>

            <div className="mt-8 space-y-4">
              {t.info.items.map((item, index) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 rounded-2xl border border-emerald-100 p-5 ${INFO_STYLES[index]}`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-xl">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-zinc-900">
                      {item.title}
                    </h3>

                    {/* Solo la primera línea lleva margen superior, como antes */}
                    {item.lines.map((line, lineIndex) => (
                      <p
                        key={line}
                        className={`text-sm text-zinc-600 ${
                          lineIndex === 0 ? "mt-1" : ""
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-emerald-100 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              {t.form.title}
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {t.form.description}
            </p>

            <form className="mt-7 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {t.form.name.label}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.form.name.placeholder}
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {t.form.email.label}
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.form.email.placeholder}
                  className="h-11 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {t.form.message.label}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder={t.form.message.placeholder}
                  className="w-full resize-none rounded-xl border border-emerald-200 bg-white px-4 py-3 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>

              <button
                type="submit"
                className="w-full cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="border-t border-emerald-100 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-5 py-12 text-center sm:px-8 lg:px-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {t.cta.title}
          </h2>

          <button
            type="button"
            onClick={() => router.push(servicesPath)}
            className="mt-6 cursor-pointer rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            {t.cta.buttons.services}
          </button>

          <button
            type="button"
            onClick={() => router.push(homePath)}
            className="ml-3 cursor-pointer rounded-xl border border-emerald-300 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            {t.cta.buttons.home}
          </button>
        </div>
      </div>
    </section>
  );
}