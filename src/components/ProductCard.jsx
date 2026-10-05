"use client";

import useProductCardHook from "../hooks/main/ProductCard";

export default function ProductCard({ product }) {
  const { navigate, productPath } = useProductCardHook();
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D7E8DC] bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-[#BFD8C7] hover:shadow-md">
      {/* IMAGE */}
      <button
        type="button"
        onClick={() => navigate(`${productPath}/${product.id}/`)}
        className="cursor-pointer bg-[#F1F7F3] p-4"
      >
        <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-white">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
          />
        </div>
      </button>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-medium text-[#3F7D5A]">{product.brand}</p>

        <h2 className="mt-1 line-clamp-2 text-sm font-semibold leading-5 text-zinc-900 sm:text-base">
          {product.name}
        </h2>

        <div className="mt-auto pt-4">
          <p className="text-lg font-bold text-zinc-900">
            ${product.price.toLocaleString("es-AR")}
          </p>

          <button
            type="button"
            onClick={() => navigate(`${productPath}/${product.id}/`)}
            className="mt-3 w-full cursor-pointer rounded-xl bg-[#3F7D5A] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#356B4C]"
          >
            Ver producto
          </button>
        </div>
      </div>
    </article>
  );
}
