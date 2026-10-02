// src/translations/Footer.js
// Textos fijos (y emojis) de src/components/Footer.jsx
//
// Solo texto e íconos: las clases y rutas quedan en el componente.
// Los datos de contacto vienen de ./ContactData.
// Los nombres de categorías y páginas no están acá: vienen de NavigationContext.

import ContactData from "./ContactData";

const Footer = {
  brand: {
    logo: "+",
    first: "FARMACIA",
    second: "SALUD",
  },

  tagline:
    "Salud, cuidado personal y bienestar para acompañarte todos los días.",

  categoriesTitle: "Categorías",
  infoTitle: "Información",

  contact: {
    title: "Contacto",
    items: ContactData,
  },

  copyright: "© 2026 FARMACIA SALUD. Todos los derechos reservados.",
  slogan: "Salud · Cuidado · Bienestar",
};

export default Footer;