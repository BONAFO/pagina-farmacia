const Shipping = {
hero: {
badge: "Envío",
title: "Cómo recibís tus productos",
description:
"Elegí la opción que mejor te quede para recibir tu pedido de la farmacia.",
},

deliveryOptions: [
{
icon: "🚚",
title: "Envío a domicilio",
description: "Recibí tu pedido en la dirección que elijas.",
},
{
icon: "🏪",
title: "Retiro en sucursal",
description:
"Retirá tu pedido por la farmacia cuando te quede cómodo.",
},
],

process: {
title: "Cómo funciona",
steps: [
{
title: "Elegí tus productos",
description: "Recorré el catálogo y encontrá lo que necesitás.",
},
{
title: "Confirmá tu pedido",
description:
"Elegí cómo querés recibirlo: a domicilio o retirando.",
},
{
title: "Recibilo o retiralo",
description:
"Te lo llevamos o lo pasás a buscar, según tu elección.",
},
],
},

notes: {
title: "A tener en cuenta",
items: [
"Los plazos y costos de envío pueden variar según tu zona.",
"Los medicamentos de venta bajo receta requieren presentar la receta correspondiente.",
"Ante cualquier duda sobre tu pedido, consultá con nuestro equipo.",
],
},

contact: {
title: "¿Tenés dudas sobre tu envío?",
description:
"Escribinos o acercate a la farmacia, con gusto te ayudamos.",
},

buttons: {
contact: "Ir a contacto",
products: "Ver productos",
},

notice: {
text: "Esta sección corresponde a una demostración. La información de envío es ilustrativa.",
},
};

export default Shipping;