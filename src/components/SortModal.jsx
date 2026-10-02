"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useProductsModal } from "../context/ProductsModalContext";
import sortOptions from "../db/Sort.db.json";

export default function SortModal() {
  const { setModalVisible } = useProductsModal();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSort = searchParams.get("sort");

  const handleSort = (option) => {
    const params = new URLSearchParams(searchParams.toString());

    params.set("sort", option.id);

    router.push(`/products?${params.toString()}`);
    setModalVisible("");
  };

  const clearSort = () => {
    const params = new URLSearchParams(searchParams.toString());

    params.delete("sort");

    const query = params.toString();

    router.push(query ? `/products?${query}` : "/products");
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
      <aside className="fixed right-0 top-0 z-50 h-full w-full max-w-sm border-l border-emerald-200 bg-white shadow-2xl animate-[slideIn_0.25s_ease-out]">
        {/* HEADER */}
        <div className="flex h-16 items-center justify-between border-b border-emerald-100 px-5">
          <h2 className="text-lg font-semibold text-zinc-900">Ordenar</h2>

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

        {/* OPCIONES */}
        <div className="p-5">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-zinc-800">Ordenar por</h3>

            {currentSort && (
              <button
                type="button"
                onClick={clearSort}
                className="cursor-pointer text-xs font-medium text-emerald-600 transition hover:text-emerald-700"
              >
                Limpiar
              </button>
            )}
          </div>

          <div className="space-y-2">
            {sortOptions.map((option) => {
              const isActive = currentSort === String(option.id);

              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => handleSort(option)}
                  className={`flex w-full cursor-pointer items-center rounded-xl border px-4 py-3 text-left text-sm transition ${
                    isActive
                      ? "border-emerald-400 bg-emerald-50 font-semibold text-emerald-700"
                      : "border-emerald-100 bg-white text-zinc-600 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                  }`}
                >
                  {option.name}
                </button>
              );
            })}
          </div>
        </div>
      </aside>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
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
