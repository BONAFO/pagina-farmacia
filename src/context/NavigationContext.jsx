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
    { name: "services", path: "/services", slug: "Servicios", inFoot: true },
    { name: "about", path: "/about", slug: "Nosotros", inFoot: true },
    { name: "contact", path: "/contact", slug: "Contacto", inFoot: true },
    { name: "register", path: "/register", slug: "Registrarse", inFoot: false },
    { name: "login", path: "/login", slug: "Ingresar", inFoot: true },
    { name: "shipping", path: "/shipping", slug: "Envío", inFoot: true },
    { name: "products", path: "/products", slug: "Productos", inFoot: true },
    { name: "product", path: "/product", slug: "", inFoot: false },

    
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
