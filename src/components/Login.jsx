// src/components/Login.jsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DemoModal from "../layouts/DemoModal";
import t from "@/src/translations/Login";
import { useNavigationHook } from "../hooks/Navigation";

/**
 * Login
 *
 * Los textos e íconos viven en src/translations/Login.js. Acá quedan las
 * clases, las rutas y la lógica.
 *
 * Demo: no hay inicio de sesión real. Enviar el formulario o tocar
 * "¿Olvidaste tu contraseña?" abre DemoModal con el texto
 * correspondiente (t.modal.login / t.modal.forgotPassword).
 */

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoContent, setDemoContent] = useState({
    title: "",
    message: "",
  });

  const router = useRouter();

  const homePath = useNavigationHook("home");
  const registerPath = useNavigationHook("register");

  const openModal = (title, message) => {
    setDemoContent({
      title,
      message,
    });

    setShowDemo(true);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    openModal(t.modal.login.title, t.modal.login.message);
  };

  const handleForgotPassword = () => {
    openModal(t.modal.forgotPassword.title, t.modal.forgotPassword.message);
  };

  return (
    <main className="min-h-[calc(100vh-80px)] bg-emerald-50/40 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-md justify-center">
        <section className="w-full rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm sm:p-9">
          {/* LOGO */}
          <div className="flex justify-center">
            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-600 text-3xl font-bold text-white shadow-sm">
                {t.brand.logo}
              </span>

              <div className="leading-none">
                <span className="block text-lg font-bold tracking-tight text-zinc-900">
                  {t.brand.first}
                </span>

                <span className="block text-lg font-bold tracking-tight text-emerald-600">
                  {t.brand.second}
                </span>
              </div>
            </div>
          </div>

          {/* TITLE */}
          <div className="mt-8 text-center">
            <h1 className="text-2xl font-bold text-zinc-900">{t.title}</h1>

            <p className="mt-2 text-sm text-zinc-500">{t.subtitle}</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleLogin} className="mt-8 space-y-5">
            {/* EMAIL */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                {t.email.label}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder={t.email.placeholder}
                className="h-12 w-full rounded-xl border border-emerald-200 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                {t.password.label}
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.password.placeholder}
                  className="h-12 w-full rounded-xl border border-emerald-200 bg-white px-4 pr-12 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={
                    showPassword ? t.password.hideLabel : t.password.showLabel
                  }
                >
                  {showPassword
                    ? t.password.iconVisible
                    : t.password.iconHidden}
                </button>
              </div>
            </div>

            {/* REMEMBER / FORGOT */}
            <div className="flex items-center justify-between gap-4">
              <label className="flex cursor-pointer items-center gap-2 text-sm text-zinc-500">
                <input
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer accent-emerald-600"
                />
                {t.remember}
              </label>

              <button
                type="button"
                onClick={handleForgotPassword}
                className="cursor-pointer text-sm font-medium text-emerald-600 transition hover:text-emerald-700"
              >
                {t.forgotPassword}
              </button>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              {t.submit}
            </button>
          </form>

          {/* CREATE ACCOUNT */}
          <button
            type="button"
            onClick={() => router.push(registerPath)}
            className="mt-4 w-full cursor-pointer rounded-xl border border-emerald-200 px-5 py-3.5 text-sm font-semibold text-emerald-700 transition hover:border-emerald-300 hover:bg-emerald-50"
          >
            {t.createAccount}
          </button>

          {/* HOME */}
          <button
            type="button"
            onClick={() => router.push(homePath)}
            className="mt-3 w-full cursor-pointer rounded-xl px-5 py-3 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-700"
          >
            {t.backHome}
          </button>

          {/* DEMO NOTICE */}
          <div className="mt-6 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-3">
            <p className="text-center text-xs leading-5 text-emerald-700">
              {t.demoNotice}
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
