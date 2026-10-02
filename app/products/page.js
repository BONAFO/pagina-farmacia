import ProductsContainer from "@/src/containers/ProductsContainer";
import { ProductsModalProvider } from "@/src/context/ProductsModalContext";

export default function ProductsPage() {
  return (
    <ProductsModalProvider>
        <ProductsContainer />
    </ProductsModalProvider>
  );
}

