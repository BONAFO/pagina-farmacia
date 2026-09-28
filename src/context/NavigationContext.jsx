"use client";

import { createContext, useContext } from "react";

const NavigationContext = createContext();

const navigation = {
  categories: [
    {
      name: "Farmacia",
      path: "/products/?category=farmacia",
    },
    {
      name: "Cuidado personal",
      path: "/products/?category=cuidado-personal",
    },
    {
      name: "Dermocosmética",
      path: "/products/?category=dermocosmetica",
    },
    {
      name: "Belleza",
      path: "/products/?category=belleza",
    },
    {
      name: "Bebés y maternidad",
      path: "/products/?category=bebes-maternidad",
    },
    {
      name: "Bienestar",
      path: "/products/?category=bienestar",
    },
    {
      name: "Ofertas",
      path: "/products/?category=ofertas",
    },
  ],

  pages: [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Servicios",
      path: "/services/",
    },
    {
      name: "La farmacia",
      path: "/about/",
    },
    {
      name: "Ayuda",
      path: "/contact/",
    },
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
