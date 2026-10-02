"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";
import categories from "../db/Categories.db.json";
import products from "../db/Products.db.json";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const { pages } = useNavigation();

  const getCategorySlug = (name) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  // 6 categorías con más productos, excluyendo Ofertas
  const mainCategories = categories
    .map((category) => ({
      ...category,
      productCount: products.filter(
        (product) => product.categoryId === category.id,
      ).length,
    }))
    .filter(
      (category) =>
        category.productCount > 0 && category.name.toLowerCase() !== "ofertas",
    )
    .sort((a, b) => b.productCount - a.productCount)
    .slice(0, 6);

  // Ofertas siempre va última
  const offersCategory = categories.find(
    (category) => category.name.toLowerCase() === "ofertas",
  );

  const visibleCategories = offersCategory
    ? [...mainCategories, offersCategory]
    : mainCategories;

  const navigate = (path) => {
    setIsOpen(false);
    router.push(path);
  };

  const navigateCategory = (category) => {
    const slug = getCategorySlug(category.name);

    navigate(`/products?category=${slug}`);
  };

  return (
    <header className="relative z-10 w-full bg-white">
      {/* Barra superior */}
      <div className="bg-[#3F7D5A] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => navigate("/shipping/")}
              className="cursor-pointer transition hover:text-emerald-100"
            >
              Envío
            </button>
          </div>
          <button
            type="button"
            onClick={() => navigate("/contact/")}
            className="hidden sm:block cursor-pointer transition hover:text-emerald-100"
          >
            <span>Atención al cliente</span>
          </button>
        </div>
      </div>

      {/* Header principal */}
      <div className="border-b border-[#D7E8DC] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <button
              type="button"
              onClick={() => navigate("/")}
              className="flex shrink-0 cursor-pointer items-center gap-2"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#3F7D5A] text-lg text-white">
                ✚
              </span>

              <span className="hidden text-lg font-bold text-zinc-900 sm:block">
                FARMACIA <span className="text-[#3F7D5A]">SALUD</span>
              </span>
            </button>

            {/* Buscador desktop */}
            <div className="hidden flex-1 md:block">
              <div className="mx-auto max-w-2xl">
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3F7D5A]">
                    🔎
                  </span>

                  <input
                    type="text"
                    placeholder="¿Qué estás buscando?"
                    className="h-11 w-full rounded-xl border border-[#D7E8DC] bg-[#F1F7F3] pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-[#3F7D5A] focus:ring-4 focus:ring-[#3F7D5A]/10"
                  />
                </div>
              </div>
            </div>

            {/* Acciones */}
            <div className="ml-auto flex items-center gap-2">
              <button
                type="button"
                onClick={() => navigate("/shipping/")}
                className="hidden cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A] lg:flex"
              >
                <span>🚚</span>
                <span>Envío</span>
              </button>

              <button
                type="button"
                onClick={() => navigate("/login/")}
                className="hidden cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-sm text-zinc-600 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A] sm:flex"
              >
                <span>👤</span>
                <span>Ingresar</span>
              </button>

              {/* Menú mobile */}
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-[#D7E8DC] bg-[#F1F7F3] text-zinc-700 transition hover:border-[#BFD8C7] hover:bg-[#E8F2EB] md:hidden"
              >
                {isOpen ? "✕" : "☰"}
              </button>
            </div>
          </div>

          {/* Buscador mobile */}
          <div className="mt-4 md:hidden">
            <div className="relative">
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3F7D5A]">
                🔎
              </span>

              <input
                type="text"
                placeholder="¿Qué estás buscando?"
                className="h-11 w-full rounded-xl border border-[#D7E8DC] bg-[#F1F7F3] pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 focus:border-[#3F7D5A] focus:ring-4 focus:ring-[#3F7D5A]/10"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Categorías */}
      <div className="hidden border-b border-[#D7E8DC] bg-white md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-1 overflow-x-auto px-4 sm:px-6 lg:px-8">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => navigateCategory(category)}
              className={`shrink-0 cursor-pointer px-4 py-3 text-sm font-medium transition ${
                category.name.toLowerCase() === "ofertas"
                  ? "text-red-500 hover:bg-red-50 hover:text-red-600"
                  : "text-zinc-600 hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Menú mobile */}
      {isOpen && (
        <div className="border-b border-[#D7E8DC] bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            {/* Categorías */}
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#3F7D5A]">
                Categorías
              </p>

              <div className="grid grid-cols-2 gap-2">
                {visibleCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => navigateCategory(category)}
                    className={`cursor-pointer rounded-xl border px-3 py-3 text-left text-sm font-medium transition ${
                      category.name.toLowerCase() === "ofertas"
                        ? "border-red-200 bg-red-50 text-red-500 hover:border-red-300 hover:bg-red-100"
                        : "border-[#D7E8DC] bg-[#F1F7F3] text-zinc-700 hover:border-[#BFD8C7] hover:text-[#3F7D5A]"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Navegación */}
            <div className="mt-5 border-t border-[#D7E8DC] pt-4">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#3F7D5A]">
                Navegación
              </p>

              <div className="flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => navigate("/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  Inicio
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/products/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  Productos
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/services/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  Servicios
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/about/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  Nosotros
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/contact/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  Contacto
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/shipping/")}
                  className="cursor-pointer rounded-xl px-3 py-3 text-left text-sm text-zinc-700 transition hover:bg-[#F1F7F3] hover:text-[#3F7D5A]"
                >
                  🚚  
                </button>
              </div>
            </div>

            {/* Ingresar mobile */}
            <div className="mt-4 border-t border-[#D7E8DC] pt-4">
              <button
                type="button"
                onClick={() => navigate("/login/")}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#3F7D5A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#356B4C]"
              >
                <span>👤</span>
                <span>Ingresar</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navegación inferior desktop */}
      <div className="border-b border-[#D7E8DC] bg-[#F1F7F3]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Inicio
          </button>

          <button
            type="button"
            onClick={() => navigate("/products/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Productos
          </button>

          <button
            type="button"
            onClick={() => navigate("/services/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Servicios
          </button>

          <button
            type="button"
            onClick={() => navigate("/about/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Nosotros
          </button>

          <button
            type="button"
            onClick={() => navigate("/contact/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Contacto
          </button>

          <button
            type="button"
            onClick={() => navigate("/shipping/")}
            className="cursor-pointer px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-[#3F7D5A]"
          >
            Envío
          </button>
        </div>
      </div>
    </header>
  );
}
