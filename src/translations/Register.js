const Register = {
    brand: {
        logo: "+",
        first: "FARMACIA",
        second: "SALUD",
    },

    title: "Crear cuenta",
    subtitle: "Completá tus datos para crear tu espacio en Farmacia Salud.",

    fields: {
        name: { label: "Nombre", placeholder: "Tu nombre" },
        lastName: { label: "Apellido", placeholder: "Tu apellido" },
        dni: { label: "DNI", placeholder: "Ej. 12345678" },
        phone: { label: "Teléfono", placeholder: "+54 9 ..." },
        birthDate: { label: "Fecha de nacimiento" }, // el campo de fecha no tiene placeholder
        address: { label: "Dirección", placeholder: "Calle y número" },
        city: { label: "Ciudad", placeholder: "Tu ciudad" },
        email: { label: "Correo electrónico", placeholder: "correo@ejemplo.com" },
        password: { label: "Contraseña", placeholder: "Creá una contraseña" },
        confirmPassword: {
            label: "Repetir contraseña",
            placeholder: "Repetí tu contraseña",
        },
    },

    // Botón del ojo: lo usan los dos campos de contraseña
    passwordToggle: {
        iconVisible: "◉",
        iconHidden: "○",
        hideLabel: "Ocultar contraseña", // se usa cuando la contraseña está visible
        showLabel: "Mostrar contraseña", // se usa cuando la contraseña está oculta
    },

    terms: "Acepto los términos y condiciones y la política de privacidad.",
    submit: "Crear cuenta",

    haveAccount: "¿Ya tenés una cuenta?",
    login: "Ingresar",
    backHome: "← Volver al inicio",

    demoNotice:
        "Esta sección corresponde a una demostración. La creación de cuentas todavía no está conectada.",

    // Textos que se le pasan al DemoModal
    modal: {
        lockedField: {
            title: "Dato no disponible",
            message:
                "Este campo forma parte de la demostración y todavía no se puede completar.",
        },
        register: {
            title: "Crear cuenta",
            message: "La creación de cuentas no está disponible en esta demostración.",
        },
    },
};

export default Register;