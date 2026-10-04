import ContactData from "./ContactData";

const Contact = {
  hero: {
    badge: "Contacto",
    title: "Estamos para ayudarte.",
    description:
      "Comunicate con nosotros para consultar sobre productos, servicios, disponibilidad o cualquier otra información que necesites.",
  },

  info: {
    badge: "Encontranos",
    title: "¿Cómo podemos ayudarte?",
    description:
      "Nuestro equipo está disponible para ayudarte con consultas sobre nuestros productos y servicios.",
    items: ContactData,
  },

  form: {
    title: "Enviá tu consulta",
    description: "Completá el formulario y nos pondremos en contacto con vos.",
    name: { label: "Nombre", placeholder: "Tu nombre" },
    email: { label: "Email", placeholder: "tu@email.com" },
    message: { label: "Mensaje", placeholder: "¿En qué podemos ayudarte?" },
    submit: "Enviar consulta",
  },

  cta: {
    title: "También podés conocer nuestros servicios.",
    buttons: {
      services: "Ver servicios",
      home: "Volver al inicio",
    },
  },
};

export default Contact;