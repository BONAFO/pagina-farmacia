"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DemoModal from "../layouts/DemoModal";

const MAX_QTY = 99;

export default function Product({ product }) {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [showDemo, setShowDemo] = useState(false);

  if (!product) {
    return null;
  }

  const { name, brand, price, image } = product;

  const decrease = () => setQuantity((q) => Math.max(1, q - 1));
  const increase = () => setQuantity((q) => Math.min(MAX_QTY, q + 1));

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#F6FAF7] to-white">
      <section className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* Volver */}
        <button
          type="button"
          onClick={() => router.back()}
          className="mb-6 inline-flex cursor-pointer items-center gap-2 rounded-full px-3 py-1.5
                     text-sm font-medium text-[#3F7D5A] transition
                     hover:bg-[#E8F3EC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F7D5A]/40"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 0 1-.75.75H5.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L5.56 9.25h10.69A.75.75 0 0 1 17 10Z"
              clipRule="evenodd"
            />
          </svg>
          Volver
        </button>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-14">
          {/* IMAGEN */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="rounded-3xl border border-[#D7E8DC] bg-gradient-to-b from-[#F1F7F3] to-[#E4F0E8] p-3 shadow-sm sm:p-6">
              <div className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-white p-6 sm:p-10">
                <img
                  src={image}
                  alt={name}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div className="flex flex-col justify-center">
            {brand && (
              <span className="w-fit rounded-full bg-[#E8F3EC] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#3F7D5A]">
                {brand}
              </span>
            )}

            <h1 className="mt-3 text-balance text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl lg:text-4xl">
              {name}
            </h1>

            {/* Precio */}
            <div className="mt-6 border-y border-[#D7E8DC] py-6">
              <p className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                ${price.toLocaleString("es-AR")}
              </p>
            </div>

            {/* Cantidad + acción */}
            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-stretch">
              {/* Selector de cantidad */}
              <div
                className="flex w-full items-center justify-between rounded-xl border border-[#D7E8DC] bg-white sm:w-auto"
                role="group"
                aria-label="Cantidad"
              >
                <button
                  type="button"
                  onClick={decrease}
                  disabled={quantity <= 1}
                  aria-label="Disminuir cantidad"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-l-xl text-xl text-[#3F7D5A]
                             transition hover:bg-[#E8F3EC] disabled:cursor-not-allowed disabled:text-zinc-300 disabled:hover:bg-transparent"
                >
                  −
                </button>
                <span
                  className="min-w-12 select-none text-center text-base font-semibold text-zinc-900"
                  aria-live="polite"
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={increase}
                  disabled={quantity >= MAX_QTY}
                  aria-label="Aumentar cantidad"
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-r-xl text-xl text-[#3F7D5A]
                             transition hover:bg-[#E8F3EC] disabled:cursor-not-allowed disabled:text-zinc-300 disabled:hover:bg-transparent"
                >
                  +
                </button>
              </div>

              {/* Botón principal: abre el aviso de demostración */}
              <button
                type="button"
                onClick={() => setShowDemo(true)}
                className="flex h-12 flex-1 cursor-pointer items-center justify-center rounded-xl bg-[#3F7D5A] px-6
                           text-base font-semibold text-white shadow-sm transition
                           hover:bg-[#356B4C] hover:shadow-md active:scale-[0.99]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F7D5A]/40 focus-visible:ring-offset-2"
              >
                Agregar al carrito
              </button>
            </div>

            {/* Subtotal (solo si hay más de 1 unidad) */}
            {quantity > 1 && (
              <p className="mt-3 text-sm text-zinc-500">
                Subtotal:{" "}
                <span className="font-semibold text-zinc-900">
                  ${(price * quantity).toLocaleString("es-AR")}
                </span>
              </p>
            )}
          </div>
        </div>
      </section>

      {/* MODAL */}
      <DemoModal
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title="Agregar al carrito"
        message="Agregar productos al carrito no está disponible en esta demostración."
      />
    </main>
  );
}
