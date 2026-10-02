"use client";

import { useSearchParams } from "next/navigation";
import products from "../db/Products.db.json";
import categories from "../db/Categories.db.json";
import ProductCard from "./ProductCard";

export default function Products() {
  const searchParams = useSearchParams();

  const categoryParam = searchParams.get("category");
  const sortParam = searchParams.get("sort");

  const getCategorySlug = (name) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-");
  };

  let filteredProducts = categoryParam
    ? products.filter((product) => {
        const category = categories.find(
          (category) => category.id === product.categoryId,
        );

        return category && getCategorySlug(category.name) === categoryParam;
      })
    : [...products];

  switch (sortParam) {
    case "1":
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name, "es"));
      break;

    case "2":
      filteredProducts.sort((a, b) => b.name.localeCompare(a.name, "es"));
      break;

    case "3":
      filteredProducts.sort((a, b) => a.price - b.price);
      break;

    case "4":
      filteredProducts.sort((a, b) => b.price - a.price);
      break;

    case "5":
      filteredProducts.sort((a, b) => b.id - a.id);
      break;

    case "6":
      filteredProducts.sort((a, b) => a.id - b.id);
      break;

    default:
      break;
  }

  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3F7D5A]">
          Catálogo
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Nuestros productos
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          Encontrá productos de farmacia, cuidado personal y bienestar.
        </p>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-2xl border border-[#D7E8DC] bg-[#F1F7F3] px-6 py-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
            🔍
          </div>

          <h2 className="mt-5 text-xl font-bold text-zinc-900">
            No encontramos productos
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
            No hay productos disponibles para los filtros seleccionados. Probá
            con otra categoría u ordenamiento.
          </p>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/product";
            }}
            className="mt-6 cursor-pointer rounded-xl bg-[#3F7D5A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#356B4C]"
          >
            Ver todos los productos
          </button>
        </div>
      )}
    </section>
  );
}
