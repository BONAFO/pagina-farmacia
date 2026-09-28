"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DemoModal from "../layouts/DemoModal";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [showDemo, setShowDemo] = useState(false);
  const [demoContent, setDemoContent] = useState({
    title: "",
    message: "",
  });

  const router = useRouter();

  const openModal = (title, message) => {
    setDemoContent({
      title,
      message,
    });

    setShowDemo(true);
  };

  const handleLockedFieldFocus = (event) => {
    event.currentTarget.blur();

    openModal(
      "Dato no disponible",
      "Este campo forma parte de la demostración y todavía no se puede completar.",
    );
  };

  const handleRegister = (event) => {
    event.preventDefault();

    openModal(
      "Crear cuenta",
      "La creación de cuentas no está disponible en esta demostración.",
    );
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-emerald-50/40 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-2xl justify-center">
        <section className="w-full rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm sm:p-9">
          {/* LOGO */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-3xl font-bold text-white shadow-sm">
                +
              </span>

              <div className="leading-none">
                <span className="block text-lg font-bold tracking-tight text-zinc-900">
                  FARMACIA
                </span>

                <span className="block text-lg font-bold tracking-tight text-emerald-600">
                  SALUD
                </span>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">Crear cuenta</h1>

            <p className="mt-2 text-sm text-zinc-500">
              Completá tus datos para crear tu espacio en Farmacia Salud.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            {/* NAME / LAST NAME */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Nombre
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  readOnly
                  onFocus={handleLockedFieldFocus}
                  className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Apellido
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Tu apellido"
                  readOnly
                  onFocus={handleLockedFieldFocus}
                  className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
                />
              </div>
            </div>

            {/* DNI / PHONE */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="dni"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  DNI
                </label>

                <input
                  id="dni"
                  name="dni"
                  type="text"
                  inputMode="numeric"
                  placeholder="Ej. 12345678"
                  readOnly
                  onFocus={handleLockedFieldFocus}
                  className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  Teléfono
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+54 9 ..."
                  readOnly
                  onFocus={handleLockedFieldFocus}
                  className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
                />
              </div>
            </div>

            {/* BIRTH DATE */}
            <div>
              <label
                htmlFor="birthDate"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Fecha de nacimiento
              </label>

              <input
                id="birthDate"
                name="birthDate"
                type="date"
                readOnly
                onFocus={handleLockedFieldFocus}
                className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
              />
            </div>

            {/* ADDRESS */}
            <div>
              <label
                htmlFor="address"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Dirección
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder="Calle y número"
                readOnly
                onFocus={handleLockedFieldFocus}
                className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
              />
            </div>

            {/* CITY */}
            <div>
              <label
                htmlFor="city"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Ciudad
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder="Tu ciudad"
                readOnly
                onFocus={handleLockedFieldFocus}
                className="h-12 w-full cursor-pointer rounded-xl border border-emerald-200 bg-zinc-50 px-4 text-sm text-zinc-500 outline-none transition hover:border-emerald-300 focus:border-emerald-400"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Correo electrónico
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="correo@ejemplo.com"
                className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Contraseña
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Creá una contraseña"
                  className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 pr-12 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={
                    showPassword ? "Ocultar contraseña" : "Mostrar contraseña"
                  }
                >
                  {showPassword ? "◉" : "○"}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                Repetir contraseña
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Repetí tu contraseña"
                  className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 pr-12 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={
                    showConfirmPassword
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"
                  }
                >
                  {showConfirmPassword ? "◉" : "○"}
                </button>
              </div>
            </div>

            {/* TERMS */}
            <label className="flex cursor-pointer items-start gap-3 pt-1">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 cursor-pointer accent-emerald-600"
              />

              <span className="text-xs leading-5 text-zinc-500">
                Acepto los términos y condiciones y la política de privacidad.
              </span>
            </label>

            {/* REGISTER */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Crear cuenta
            </button>
          </form>

          {/* LOGIN */}
          <div className="mt-6 text-center">
            <span className="text-sm text-zinc-500">¿Ya tenés una cuenta?</span>

            <button
              type="button"
              onClick={() => router.push("/login/")}
              className="ml-1 cursor-pointer text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              Ingresar
            </button>
          </div>

          {/* HOME */}
          <button
            type="button"
            onClick={() => router.push("/")}
            className="mt-4 w-full cursor-pointer rounded-xl px-5 py-3 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-700"
          >
            ← Volver al inicio
          </button>

          {/* DEMO NOTICE */}
          <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p className="text-center text-xs leading-5 text-emerald-700">
              Esta sección corresponde a una demostración. La creación de
              cuentas todavía no está conectada.
            </p>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <DemoModal
        isOpen={showDemo}
        onClose={() => setShowDemo(false)}
        title={demoContent.title}
        message={demoContent.message}
      />
    </main>
  );
}
