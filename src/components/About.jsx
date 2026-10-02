// src/components/About.jsx
"use client";

import { useRouter } from "next/navigation";
import t from "@/src/translations/About";
import { useNavigationHook } from "../hooks/Navigation";

export default function About() {
  const CARD_STYLES = [
    "bg-emerald-50",
    "bg-white shadow-sm",
    "bg-white shadow-sm",
    "bg-emerald-50",
  ];
  const router = useRouter();

  const contactPath = useNavigationHook("contact");
  const servicesPath = useNavigationHook("services");

  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="border-b border-emerald-100 bg-emerald-50/40">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-emerald-600">
              {t.hero.badge}
            </p>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {t.hero.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => router.push(contactPath)}
                className="cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
              >
                {t.buttons.contact}
              </button>

              <button
                type="button"
                onClick={() => router.push(servicesPath)}
                className="cursor-pointer rounded-xl border border-emerald-200 bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
              >
                {t.buttons.services}
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
              {t.about.badge}
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {t.about.title}
            </h2>

            <p className="mt-5 leading-7 text-zinc-600">{t.about.paragraph1}</p>

            <p className="mt-4 leading-7 text-zinc-600">{t.about.paragraph2}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.cards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl border border-emerald-100 p-6 ${CARD_STYLES[index]}`}
              >
                <span className="text-3xl">{card.icon}</span>
                <h3 className="mt-4 font-semibold text-zinc-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-emerald-100 bg-emerald-600">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-16 lg:px-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            {t.cta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-emerald-50 sm:text-base">
            {t.cta.description}
          </p>
          <button
            type="button"
            onClick={() => router.push(contactPath)}
            className="mt-7 cursor-pointer rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            {t.buttons.contact}
          </button>
        </div>
      </div>
    </section>
  );
}
