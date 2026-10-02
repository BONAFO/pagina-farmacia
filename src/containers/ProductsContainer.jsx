"use client";
import Products from "../components/Products";
import ProductFilterMenu from "../components/ProductFilterMenu";
import MainLayout from "../layouts/MainLayout";
import { useProductsModal } from "../context/ProductsModalContext";

export default function ProductsContainer() {
  const { modalVisible } = useProductsModal();

  return (
    <>
      <MainLayout>
        <main className="min-h-screen w-full bg-white">
          <section className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <ProductFilterMenu />

            <div className="mt-8">
              <Products />
            </div>
          </section>
        </main>
      </MainLayout>
      {modalVisible}
    </>
  );
}
