"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useProductsModal } from "../context/ProductsModalContext";
import categories from "../db/Categories.db.json";
import { useNavigationHook } from "../hooks/Navigation";

export default function FiltersModal() {
  const { setModalVisible } = useProductsModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  const productsPath = useNavigationHook("products");

  const currentCategory = searchParams.get("category");

  const getCategorySlug = (name) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  const handleCategory = (category) => {
    const slug = getCategorySlug(category.name);

    const params = new URLSearchParams(searchParams.toString());
    params.set("category", slug);

    router.push(`${productsPath}?${params.toString()}`);
    setModalVisible("");
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("category");

    const query = params.toString();

    router.push(query ? `${productsPath}}?${query}` : "/products");
    setModalVisible("");
  };

  return (
    <>
      {/* FONDO */}
      <div
        className="fixed inset-0 z-40 cursor-pointer bg-black/40 backdrop-blur-sm"
        onClick={() => {
          setModalVisible("");
        }}
      />

      {/* PANEL */}
      <aside className="fixed left-0 top-0 z-50 h-full w-full max-w-sm border-r border-emerald-200 bg-white shadow-2xl animate-[slideIn_0.25s_ease-out]">
        {/* HEADER */}
        <div className="flex h-16 items-center justify-between border-b border-emerald-100 px-5">
          <h2 className="text-lg font-semibold text-zinc-900">Filtros</h2>

          <button
            type="button"
            onClick={() => {
              setModalVisible("");
            }}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-emerald-200 bg-white text-zinc-500 transition hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-700"
          >
            ✕
          </button>
        </div>

        {/* CATEGORÍAS */}
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-800">Categorías</h3>

            {currentCategory && (
              <button
                type="button"
                onClick={clearFilters}
                className="cursor-pointer text-xs font-medium text-emerald-600 transition hover:text-emerald-700"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {categories.map((category) => {
              const slug = getCategorySlug(category.name);
              const isActive = currentCategory === slug;

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategory(category)}
                  className={`flex w-full cursor-pointer items-center rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-emerald-400 bg-emerald-50 font-semibold text-emerald-700"
                      : "border-emerald-100 bg-white text-zinc-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }

          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
