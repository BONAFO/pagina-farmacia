import Link from "next/link";
import t from "@/src/translations/not-found";

/**
 * NotFound (página 404)
 *
 * Los textos e íconos viven en src/translations/NotFound.js. Acá quedan las
 * clases y las rutas.
 */

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full items-center justify-center bg-white px-5 py-16">
      <div className="w-full max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50 text-4xl font-bold text-emerald-600">
          {t.icon}
        </div>

        <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-emerald-600">
          {t.code}
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
          {t.title}
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-zinc-600">
          {t.message}
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="cursor-pointer rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white transition hover:bg-emerald-700"
          >
            {t.buttons.home}
          </Link>

          <Link
            href="/products/"
            className="cursor-pointer rounded-xl border border-emerald-200 bg-white px-6 py-3 font-semibold text-emerald-700 transition hover:bg-emerald-50"
          >
            {t.buttons.products}
          </Link>
        </div>
      </div>
    </main>
  );
}