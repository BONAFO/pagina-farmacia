"use client";

import { createContext, useContext } from "react";

const NavigationContext = createContext();

const navigation = {
  categories: [
    { name: "Farmacia", slug: "farmacia" },
    { name: "Cuidado personal", slug: "cuidado-personal" },
    { name: "Dermocosmética", slug: "dermocosmetica" },
    { name: "Belleza", slug: "belleza" },
    { name: "Bebés y maternidad", slug: "bebes-maternidad" },
    { name: "Bienestar", slug: "bienestar" },
    { name: "Ofertas", slug: "ofertas" },
  ],

  pages: [
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
    { name: "La farmacia", path: "/about" },
    { name: "contact", path: "/contact" },
        { name: "Products", path: "/contact" },

  ],
};


export function NavigationProvider({ children }) {
  return (
    <NavigationContext.Provider value={navigation}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  return useContext(NavigationContext);
}



