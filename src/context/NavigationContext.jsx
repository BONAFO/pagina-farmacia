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
    { name: "home", path: "/", slug: "Inicio" },
    { name: "services", path: "/services", slug: "Servicios" },
    { name: "about", path: "/about", slug: "Nosotros" },
    { name: "contact", path: "/contact", slug: "Contacto" },
    { name: "register", path: "/register", slug: "Registrarse" },
    { name: "login", path: "/login", slug: "Ingresar" },
    { name: "shipping", path: "/shipping", slug: "Envío" },
    { name: "products", path: "/products", slug: "Productos" },
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
