"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FiltersModal from "./FiltersModal";
import SortModal from "./SortModal";
import { useProductsModal } from "../context/ProductsModalContext";
import products from "../db/Products.db.json";

export default function ProductFilterMenu() {
  const { setModalVisible } = useProductsModal();
  const router = useRouter();
  const [search, setSearch] = useState("");

  const searchResults =
    search.trim() === ""
      ? []
      : products
          .filter((product) => {
            const value = search.toLowerCase().trim();

            return (
              product.name.toLowerCase().includes(value) ||
              product.brand.toLowerCase().includes(value)
            );
          })
          .slice(0, 10);

  const handleProductClick = (id) => {
    setSearch("");
    router.push(`/product?id=${id}`);
  };

  const clearFilters = () => {
    setSearch("");
    router.push("/products");
  };

  return (
    <section className="relative w-full rounded-2xl border border-[#D7E8DC] bg-white p-4 shadow-sm sm:p-5">
      {/* BUSCADOR */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3F7D5A]">
          🔎
        </span>

        <input
          type="text"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Buscar productos..."
          className="h-12 w-full rounded-xl border border-[#D7E8DC] bg-white pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-[#BFD8C7] focus:border-[#3F7D5A] focus:ring-4 focus:ring-[#3F7D5A]/10"
        />

        {/* RESULTADOS */}
        {search.trim() !== "" && (
          <div className="absolute left-0 right-0 top-full z-30 mt-2 overflow-hidden rounded-xl border border-[#D7E8DC] bg-white shadow-xl">
            {searchResults.length > 0 ? (
              <div className="max-h-[500px] overflow-y-auto">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => handleProductClick(product.id)}
                    className="flex w-full cursor-pointer items-center gap-3 border-b border-[#EEF5F0] px-4 py-3 text-left transition last:border-b-0 hover:bg-[#F1F7F3]"
                  >
                    {/* IMAGEN */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F1F7F3]">
                      <img
                        src={product.image}
                        alt={product.name}
                        loading="lazy"
                        className="h-full w-full object-contain p-1"
                      />
                    </div>

                    {/* INFORMACIÓN */}
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-zinc-900">
                        {product.name}
                      </p>

                      <p className="mt-1 text-xs text-zinc-500">
                        {product.brand}
                      </p>
                    </div>

                    {/* PRECIO */}
                    <span className="shrink-0 text-sm font-semibold text-[#3F7D5A]">
                      ${product.price.toLocaleString("es-AR")}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="px-4 py-6 text-center">
                <p className="text-sm text-zinc-500">
                  No se encontraron productos.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* BOTONES */}
      <div className="mt-3 grid grid-cols-3 gap-3">
        {/* FILTROS */}
        <button
          type="button"
          onClick={() => setModalVisible(<FiltersModal />)}
          className="flex h-12 cursor-pointer items-center justify-between rounded-xl border border-[#D7E8DC] bg-[#F1F7F3] px-3 text-sm font-medium text-zinc-800 transition hover:border-[#BFD8C7] hover:bg-[#E8F2EB] sm:px-4"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#3F7D5A]">⚙</span>
            <span>Filtros</span>
          </span>

          <span className="hidden text-xs text-zinc-400 sm:inline">▾</span>
        </button>

        {/* ORDENAR */}
        <button
          type="button"
          onClick={() => setModalVisible(<SortModal />)}
          className="flex h-12 cursor-pointer items-center justify-between rounded-xl border border-[#D7E8DC] bg-[#F1F7F3] px-3 text-sm font-medium text-zinc-800 transition hover:border-[#BFD8C7] hover:bg-[#E8F2EB] sm:px-4"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#3F7D5A]">↕</span>
            <span>Ordenar</span>
          </span>

          <span className="hidden text-xs text-zinc-400 sm:inline">▾</span>
        </button>

        {/* LIMPIAR */}
        <button
          type="button"
          onClick={clearFilters}
          className="flex h-12 cursor-pointer items-center justify-center rounded-xl border border-[#D7E8DC] bg-white px-3 text-sm font-medium text-zinc-600 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:px-4"
        >
          Limpiar
        </button>
      </div>
    </section>
  );
}
