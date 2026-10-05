
const Login = {
  brand: {
    logo: "+",
    first: "FARMACIA",
    second: "SALUD",
  },

  title: "Ingresar",
  subtitle: "Accedé a tu espacio en Farmacia Salud.",

  email: {
    label: "Correo electrónico",
    placeholder: "correo@ejemplo.com",
  },

  password: {
    label: "Contraseña",
    placeholder: "Ingresá tu contraseña",
    // Botón del ojo: ícono y etiqueta según si la contraseña está visible
    iconVisible: "◉",
    iconHidden: "○",
    hideLabel: "Ocultar contraseña", // se usa cuando la contraseña está visible
    showLabel: "Mostrar contraseña", // se usa cuando la contraseña está oculta
  },

  remember: "Recordarme",
  forgotPassword: "¿Olvidaste tu contraseña?",
  submit: "Ingresar",
  createAccount: "Crear cuenta",
  backHome: "← Volver al inicio",

  demoNotice:
    "Esta sección corresponde a una demostración. El inicio de sesión todavía no está conectado.",

  // Textos que se le pasan al DemoModal
  modal: {
    login: {
      title: "Inicio de sesión",
      message: "El inicio de sesión no está disponible en esta demostración.",
    },
    forgotPassword: {
      title: "Recuperar contraseña",
      message:
        "La recuperación de contraseña no está disponible en esta demostración.",
    },
  },
};

export default Login;