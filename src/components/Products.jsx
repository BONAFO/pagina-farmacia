"use client";

import ProductCard from "./ProductCard";
import ProductsTranslation from "../translations/Products";
import useProductsHook from "../hooks/main/Products";

export default function Products() {
  const { filteredProducts, productPath, navigate } = useProductsHook();
  return (
    <section className="w-full">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#3F7D5A]">
          {ProductsTranslation.hero.badge}
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          {ProductsTranslation.hero.title}
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600 sm:text-base">
          {ProductsTranslation.hero.description}
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
            {ProductsTranslation.empty.icon}
          </div>

          <h2 className="mt-5 text-xl font-bold text-zinc-900">
            {ProductsTranslation.empty.title}
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-600">
            {ProductsTranslation.empty.description}
          </p>

          <button
            type="button"
            onClick={() => {
              navigate(productPath);
            }}
            className="mt-6 cursor-pointer rounded-xl bg-[#3F7D5A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#356B4C]"
          >
            {ProductsTranslation.empty.button}
          </button>
        </div>
      )}
    </section>
  );
}
