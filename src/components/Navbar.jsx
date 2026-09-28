"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { categories, pages } = useNavigation();

  const navigate = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  return (
    <nav className="relative z-50 w-full bg-white">
      {/* TOP BAR */}
      <div className="bg-emerald-700">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-xs text-white sm:px-8 lg:px-10">
          <p className="font-medium">Salud, cuidado y bienestar cerca tuyo.</p>

          <div className="hidden items-center gap-6 md:flex">
            <button
              type="button"
              onClick={() => navigate("/services/")}
              className="cursor-pointer transition hover:text-emerald-100"
            >
              Envíos
            </button>

            <button
              type="button"
              onClick={() => navigate("/services/")}
              className="cursor-pointer transition hover:text-emerald-100"
            >
              Retiro en tienda
            </button>

            <button
              type="button"
              onClick={() => navigate("/contact/")}
              className="cursor-pointer transition hover:text-emerald-100"
            >
              Atención al cliente
            </button>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <div className="border-b border-emerald-100 bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[78px] items-center gap-5">
            {/* LOGO */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex shrink-0 cursor-pointer items-center gap-3 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-2xl font-bold text-white shadow-sm">
                +
              </span>

              <span className="leading-none">
                <span className="block text-sm font-bold tracking-tight text-zinc-900 sm:text-base">
                  FARMACIA
                </span>

                <span className="block text-sm font-bold tracking-tight text-emerald-600 sm:text-base">
                  SALUD
                </span>
              </span>
            </button>

            {/* SEARCH DESKTOP */}
            <div className="mx-auto hidden min-w-0 max-w-2xl flex-1 md:block">
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-4-4" />
                  </svg>
                </span>

                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="h-11 w-full rounded-xl border border-emerald-300 bg-white pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />
              </div>
            </div>

            {/* ACTIONS */}
            <div className="ml-auto hidden items-center gap-1 md:flex">
              {/* DELIVERY */}
              <button
                type="button"
                onClick={() => navigate("/services/")}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-emerald-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>

                <span className="hidden text-left xl:block">
                  <span className="block text-[10px] text-zinc-400">
                    Entrega
                  </span>

                  <span className="block text-xs font-semibold text-zinc-700">
                    Elegir método
                  </span>
                </span>
              </button>

              {/* ACCOUNT */}
              <button
                type="button"
                onClick={() => navigate("/login/")}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-emerald-50"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <circle cx="12" cy="8" r="3.2" />
                    <path d="M5 20c.8-3.4 3.1-5.4 7-5.4s6.2 2 7 5.4" />
                  </svg>
                </span>

                <span className="hidden text-left xl:block">
                  <span className="block text-[10px] text-zinc-400">
                    Mi espacio
                  </span>

                  <span className="block text-xs font-semibold text-zinc-700">
                    Ingresar
                  </span>
                </span>
              </button>
            </div>

            {/* MOBILE BUTTON */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-emerald-200 bg-white text-zinc-700 transition hover:border-emerald-400 hover:text-emerald-600 md:hidden"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <span className="text-2xl leading-none">
                {isOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH MOBILE */}
      <div className="border-b border-emerald-100 bg-emerald-50/40 px-5 py-3 md:hidden">
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-emerald-600">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </span>

          <input
            type="text"
            placeholder="¿Qué estás buscando?"
            className="h-11 w-full rounded-xl border border-emerald-300 bg-white pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
          />
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="hidden border-b border-emerald-100 bg-white md:block">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-10">
          <div className="flex min-w-0 items-center gap-7">
            {categories.map((category, index) => (
              <button
                key={category.path}
                type="button"
                onClick={() => navigate(category.path)}
                className={`cursor-pointer whitespace-nowrap text-sm transition ${
                  index === 0
                    ? "font-semibold text-emerald-700 hover:text-emerald-800"
                    : category.name === "Ofertas"
                      ? "font-semibold text-emerald-600 hover:text-emerald-700"
                      : "font-medium text-zinc-600 hover:text-emerald-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div className="hidden border-b border-zinc-100 bg-emerald-50/40 md:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-6">
            {pages.map((page) => (
              <button
                key={page.path}
                type="button"
                onClick={() => navigate(page.path)}
                className={`cursor-pointer text-xs transition ${
                  page.name === "Inicio"
                    ? "font-semibold text-emerald-700 hover:text-emerald-800"
                    : "font-medium text-zinc-500 hover:text-emerald-700"
                }`}
              >
                {page.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-b border-emerald-100 bg-white shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[720px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          {/* CATEGORIES */}
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            Categorías
          </p>

          {categories.map((category, index) => (
            <button
              key={category.path}
              type="button"
              onClick={() => navigate(category.path)}
              className={`cursor-pointer border-b border-emerald-50 py-4 text-left text-sm transition ${
                index === 0
                  ? "font-semibold text-emerald-700"
                  : category.name === "Ofertas"
                    ? "font-semibold text-emerald-600"
                    : "font-medium text-zinc-700"
              }`}
            >
              {category.name}
            </button>
          ))}

          {/* INFORMATION */}
          <div className="mt-5 border-t border-emerald-50 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Información
            </p>

            {pages.map((page) => (
              <button
                key={page.path}
                type="button"
                onClick={() => navigate(page.path)}
                className="block cursor-pointer py-3 text-left text-sm font-medium text-zinc-600 transition hover:text-emerald-700"
              >
                {page.name}
              </button>
            ))}
          </div>

          {/* ACCOUNT */}
          <button
            type="button"
            onClick={() => navigate("/login/")}
            className="mt-4 flex w-full cursor-pointer items-center gap-3 rounded-xl border border-emerald-100 p-4 text-left transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="12" cy="8" r="3.2" />
                <path d="M5 20c.8-3.4 3.1-5.4 7-5.4s6.2 2 7 5.4" />
              </svg>
            </span>

            <span>
              <span className="block text-xs text-zinc-400">Mi espacio</span>

              <span className="mt-0.5 block text-sm font-semibold text-zinc-800">
                Ingresar
              </span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
