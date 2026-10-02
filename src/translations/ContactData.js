// src/translations/ContactData.js
// Datos de contacto de la farmacia (dirección, teléfono, email y horarios).
//
// Cada item tiene: icon (emoji), title y lines (una o más líneas de texto).
// Hoy los carga src/translations/Footer.js.

const ContactData = [
  { icon: "📍", title: "Dirección", lines: ["Av. Principal 1234"] },
  { icon: "📞", title: "Teléfono", lines: ["(000) 1234-5678"] },
  { icon: "✉️", title: "Email", lines: ["contacto@farmaciasalud.com"] },
  {
    icon: "🕐",
    title: "Horarios",
    lines: ["Lunes a viernes: 8:00 a 20:00", "Sábados: 9:00 a 14:00"],
  },
];

export default ContactData;