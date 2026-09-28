
"use client";

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function Footer() {
  const router = useRouter();

  const { categories, pages } = useNavigation();

  const navigate = (path) => {
    router.push(path);
  };

  return (
    <footer className="border-t border-emerald-900 bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* MARCA */}
          <div>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex cursor-pointer items-center gap-2 text-left text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-lg">
                +
              </span>

              <span>
                FARMACIA{" "}
                <span className="text-emerald-400">
                  SALUD
                </span>
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-100/60">
              Salud, cuidado personal y bienestar para acompañarte todos los
              días.
            </p>
          </div>

          {/* CATEGORÍAS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Categorías
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {categories.map((category) => (
                <button
                  key={category.path}
                  type="button"
                  onClick={() => navigate(category.path)}
                  className="w-fit cursor-pointer text-left text-sm text-emerald-100/60 transition hover:text-emerald-400"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Información
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {pages.map((page) => (
                <button
                  key={page.path}
                  type="button"
                  onClick={() => navigate(page.path)}
                  className="w-fit cursor-pointer text-left text-sm text-emerald-100/60 transition hover:text-emerald-400"
                >
                  {page.name}
                </button>
              ))}
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <div className="mt-4 space-y-3 text-sm text-emerald-100/60">
              <p>📍 Centro de la ciudad</p>
              <p>📞 +54 9 0000 0000</p>
              <p>✉️ contacto@farmaciasalud.com</p>
              <p>🕐 Lun - Vie · 9:00 a 18:00</p>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-emerald-900 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-emerald-100/40">
              © 2026 FARMACIA SALUD. Todos los derechos reservados.
            </p>

            <p className="text-xs text-emerald-100/30">
              Salud · Cuidado · Bienestar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

