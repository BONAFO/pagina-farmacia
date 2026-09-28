"use client";
import { createContext, useContext, useState } from "react";

const ProductsModalContext = createContext();

export function ProductsModalProvider({ children }) {
  const [modalVisible, setModalVisible] = useState("");
  return (
    <ProductsModalContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </ProductsModalContext.Provider>
  );
}
export function useProductsModal() {
  return useContext(ProductsModalContext);
}
