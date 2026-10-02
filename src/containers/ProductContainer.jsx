import Link from "next/link";
import products from "@/src/db/Products.db.json";
import Product from "@/src/components/Product";
import MainLayout from "../layouts/MainLayout";
import t from "@/src/translations/ProductContainer";

/**
 * ProductContainer
 *
 * Busca el producto por el id de la URL y muestra su detalle. Si no
 * existe, muestra una pantalla de "Producto no encontrado" con un botón
 * para volver al catálogo.
 *
 * Los textos e íconos de esa pantalla viven en
 * src/translations/ProductContainer.js. Acá quedan las clases, las rutas y
 * la lógica.
 */

export default async function ProductContainer({ params }) {
  const { id } = await params;

  const productId = Number(id);
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-5">
        <div className="text-center">
          <div className="mb-4 text-5xl">{t.notFound.icon}</div>

          <h1 className="text-2xl font-bold text-zinc-900">
            {t.notFound.title}
          </h1>

          <p className="mt-2 text-sm text-zinc-500">{t.notFound.message}</p>

          {/* Volver al catálogo */}
          <Link
            href="/products/"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#3F7D5A] px-6 py-3
                       text-sm font-semibold text-white shadow-sm transition
                       hover:bg-[#356B4C] hover:shadow-md
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3F7D5A]/40 focus-visible:ring-offset-2"
          >
            <span aria-hidden="true">{t.notFound.backIcon}</span>
            {t.notFound.backButton}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <MainLayout>
      <Product product={product} />
    </MainLayout>
  );
}