"use client";

import categories from "../db/Categories.db.json";
import HomeTranslation from "../translations/Home";
import {
  useCategoryNavigationHook,
  useNavigationHook,
} from "../hooks/Navigation";

export default function Home() {
  const productsPath = useNavigationHook("products");
  const servicesPath = useNavigationHook("services");
  const aboutPath = useNavigationHook("about");
  const contactPath = useNavigationHook("contact");

  const categoryNavigation = useCategoryNavigationHook();

  const visibleCategories = categories.slice(0, 6);

  const navigate = (path) => {
    window.location.assign(path);
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden border-b border-emerald-100 bg-[#F1F7F3]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-emerald-200/40 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-emerald-100/80 blur-3xl" />

        <div className="pointer-events-none absolute right-[8%] top-[18%] hidden h-40 w-40 rounded-full border border-emerald-300/30 lg:block" />

        <div className="pointer-events-none absolute right-[13%] top-[29%] hidden h-20 w-20 rounded-full border border-emerald-300/30 lg:block" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 pb-16 pt-24 sm:px-8 sm:pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-28">
          {/* CONTENIDO */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-semibold text-emerald-700 sm:text-sm">
                {HomeTranslation.hero.tag}
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-bold leading-[1.02] tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl xl:text-8xl">
              {HomeTranslation.hero.title.first}
              <br />
              {HomeTranslation.hero.title.second}
              <span className="text-emerald-600">
                {HomeTranslation.hero.title.highlight}
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg">
              {HomeTranslation.hero.description}
            </p>

            {/* BOTONES */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => navigate(productsPath)}
                className="cursor-pointer rounded-xl bg-[#3F7D5A] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-[#356B4C] hover:shadow-xl"
              >
                {HomeTranslation.hero.buttons.products}
              </button>

              <button
                type="button"
                onClick={() => navigate(servicesPath)}
                className="cursor-pointer rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-emerald-700"
              >
                {HomeTranslation.hero.buttons.services}
              </button>
            </div>

            {/* ESTADÍSTICAS */}
            <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-emerald-200 pt-7">
              {HomeTranslation.hero.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={
                    index > 0
                      ? "border-l border-emerald-200 pl-5"
                      : ""
                  }
                >
                  <p className="text-2xl font-bold text-zinc-900">
                    {stat.value}
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* VISUAL HERO */}
          <div className="relative hidden lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-8 rounded-full bg-white shadow-2xl shadow-emerald-900/10" />

              <div className="absolute inset-16 rounded-full border border-emerald-200 bg-[#E8F3EC]" />

              {/* Cruz */}
              <div className="absolute left-1/2 top-1/2 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[2rem] bg-[#3F7D5A] text-7xl font-light text-white shadow-xl shadow-emerald-900/20">
                +
              </div>

              {/* Tarjeta superior */}
              <div className="absolute right-0 top-10 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                    💚
                  </div>

                  <div>
                    <p className="text-xs text-zinc-400">
                      {HomeTranslation.hero.visual.wellness.label}
                    </p>

                    <p className="text-sm font-bold text-zinc-900">
                      {HomeTranslation.hero.visual.wellness.title}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tarjeta inferior */}
              <div className="absolute bottom-14 left-0 rounded-2xl border border-emerald-100 bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                    🩺
                  </div>

                  <div>
                    <p className="text-xs text-zinc-400">
                      {HomeTranslation.hero.visual.attention.label}
                    </p>

                    <p className="text-sm font-bold text-zinc-900">
                      {HomeTranslation.hero.visual.attention.title}
                    </p>
                  </div>
                </div>
              </div>

              <span className="pointer-events-none absolute left-5 top-1/3 h-3 w-3 rounded-full bg-emerald-400" />

              <span className="pointer-events-none absolute bottom-1/4 right-5 h-4 w-4 rounded-full bg-emerald-300" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORÍAS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F7D5A]">
              {HomeTranslation.categories.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {HomeTranslation.categories.title}
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500 sm:text-base">
              {HomeTranslation.categories.description}
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate(productsPath)}
            className="w-fit cursor-pointer text-sm font-semibold text-[#3F7D5A] transition hover:text-[#356B4C]"
          >
            {HomeTranslation.categories.allProducts}
          </button>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() =>
                navigate(categoryNavigation(category))
              }
              className="group cursor-pointer rounded-2xl border border-zinc-200 bg-white p-5 text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-lg hover:shadow-emerald-900/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-2xl transition group-hover:bg-emerald-100">
                {category.icon}
              </div>

              <h3 className="mt-5 text-sm font-semibold text-zinc-900">
                {category.name}
              </h3>

              <p className="mt-2 text-xs leading-5 text-zinc-500">
                {category.description}
              </p>

              <span className="mt-4 block text-xs font-semibold text-[#3F7D5A]">
                {HomeTranslation.categories.explore}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRESENTACIÓN
      ========================================================== */}
      <section className="border-y border-zinc-200 bg-zinc-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:px-10 lg:py-28">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F7D5A]">
              {HomeTranslation.about.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl lg:text-5xl">
              {HomeTranslation.about.title}
              <br />

              <span className="text-zinc-400">
                {HomeTranslation.about.highlight}
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-zinc-600 sm:text-base">
              {HomeTranslation.about.description}
            </p>

            <button
              type="button"
              onClick={() => navigate(aboutPath)}
              className="mt-7 cursor-pointer rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-700 transition hover:border-emerald-300 hover:text-[#3F7D5A]"
            >
              {HomeTranslation.about.button}
            </button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {HomeTranslation.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-xl text-[#3F7D5A]">
                    {benefit.icon}
                  </div>

                  <div>
                    <span className="text-xs text-zinc-400">
                      {benefit.number}
                    </span>

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

      {/* =========================================================
          SERVICIOS
      ========================================================== */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-200 bg-[#E8F3EC]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-200/50 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-1/3 h-72 w-72 rounded-full bg-white/60 blur-3xl" />

          <div className="relative grid gap-10 px-7 py-10 sm:px-10 sm:py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-14 lg:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#3F7D5A]">
                {HomeTranslation.services.eyebrow}
              </p>

              <h2 className="mt-3 max-w-2xl text-3xl font-bold text-zinc-900 sm:text-4xl">
                {HomeTranslation.services.title}
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-600 sm:text-base">
                {HomeTranslation.services.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate(servicesPath)}
              className="w-full cursor-pointer rounded-xl bg-[#3F7D5A] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#356B4C] sm:w-fit"
            >
              {HomeTranslation.services.button}
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL
      ========================================================== */}
      <section className="px-5 pb-20 sm:px-8 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#356B4C]">
          <div className="pointer-events-none absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-32 left-[20%] h-64 w-64 rounded-full bg-emerald-300/20 blur-3xl" />

          <div className="relative px-7 py-14 text-center sm:px-12 sm:py-20">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-200">
              {HomeTranslation.cta.eyebrow}
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {HomeTranslation.cta.title}
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-emerald-100/80 sm:text-base">
              {HomeTranslation.cta.description}
            </p>

            <button
              type="button"
              onClick={() => navigate(contactPath)}
              className="mt-8 cursor-pointer rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-[#356B4C] transition hover:bg-emerald-50"
            >
              {HomeTranslation.cta.button}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}