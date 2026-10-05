"use client";

import Link from "next/link";
import ShippingTranslation from "../translations/Shipping";
import ContactData from "../translations/ContactData";
import useShippingHook from "../hooks/main/Shipping";

export default function Shipping() {
  const { contactPath, productsPath } = useShippingHook();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6FAF7] to-white">
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        {/* ENCABEZADO */}
        <header className="text-center">
          <span className="rounded-full bg-[#E8F3EC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3F7D5A]">
            {ShippingTranslation.hero.badge}
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
            {ShippingTranslation.hero.title}
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-500 sm:text-base">
            {ShippingTranslation.hero.description}
          </p>
        </header>

        {/* FORMAS DE RECIBIR EL PEDIDO */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-6">
          {ShippingTranslation.deliveryOptions.map((option) => (
            <article
              key={option.title}
              className="rounded-2xl border border-[#D7E8DC] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#9CC5AB] hover:shadow-lg hover:shadow-[#3F7D5A]/10"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F3EC] text-2xl"
              >
                {option.icon}
              </span>

              <h2 className="mt-4 text-lg font-semibold text-zinc-900">
                {option.title}
              </h2>

              <p className="mt-1 text-sm leading-6 text-zinc-500">
                {option.description}
              </p>
            </article>
          ))}
        </div>

        {/* CÓMO FUNCIONA */}
        <section className="mt-12 rounded-3xl border border-[#D7E8DC] bg-[#F1F7F3] p-6 sm:p-8">
          <h2 className="text-center text-xl font-bold tracking-tight text-zinc-900">
            {ShippingTranslation.process.title}
          </h2>

          <ol className="mt-6 grid gap-6 sm:grid-cols-3">
            {ShippingTranslation.process.steps.map((step, index) => (
              <li
                key={step.title}
                className="flex gap-4 sm:flex-col sm:items-center sm:text-center"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#3F7D5A] text-base font-bold text-white">
                  {index + 1}
                </span>

                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-zinc-500">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* A TENER EN CUENTA */}
        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            {ShippingTranslation.notes.title}
          </h2>

          <ul className="mt-4 space-y-3">
            {ShippingTranslation.notes.items.map((note) => (
              <li
                key={note}
                className="flex items-start gap-3 rounded-xl border border-[#D7E8DC] bg-white px-4 py-3 text-sm leading-6 text-zinc-600"
              >
                <span aria-hidden="true" className="mt-0.5 text-[#3F7D5A]">
                  ✓
                </span>

                {note}
              </li>
            ))}
          </ul>
        </section>

        {/* DATOS DE CONTACTO */}
        <section className="mt-12">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900">
            {ShippingTranslation.contact.title}
          </h2>

          <p className="mt-2 text-sm leading-6 text-zinc-500">
            {ShippingTranslation.contact.description}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {ContactData.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-[#D7E8DC] bg-white p-5 shadow-sm"
              >
                <div
                  aria-hidden="true"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F3EC] text-xl"
                >
                  {item.icon}
                </div>

                <div>
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>

                  {item.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm text-zinc-600">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BOTONES */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={contactPath}
            className="inline-flex w-full items-center justify-center rounded-xl bg-[#3F7D5A] px-8 py-3 text-sm font-semibold text-white shadow-sm transition sm:w-auto
                   hover:bg-[#356B4C] hover:shadow-md
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F7D5A]/40 focus-visible:ring-offset-2"
          >
            {ShippingTranslation.buttons.contact}
          </Link>

          <Link
            href={productsPath}
            className="inline-flex w-full items-center justify-center rounded-xl border border-[#3F7D5A] bg-white px-8 py-3 text-sm font-semibold text-[#3F7D5A] transition sm:w-auto
                   hover:bg-[#E8F3EC]
                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F7D5A]/40 focus-visible:ring-offset-2"
          >
            {ShippingTranslation.buttons.products}
          </Link>
        </div>

        {/* AVISO DE DEMOSTRACIÓN */}
        <div className="mt-10 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
          <p className="text-center text-xs leading-5 text-emerald-700">
            {ShippingTranslation.notice.text}
          </p>
        </div>
      </section>
    </main>
  );
}
