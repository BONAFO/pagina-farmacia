"use client";

import DemoModal from "../layouts/DemoModal";
import t from "@/src/translations/Register";
import useRegisterHook from "../hooks/main/Register";

export default function Register() {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    showDemo,
    setShowDemo,
    demoContent,
    handleLockedFieldFocus,
    handleRegister,
    homePath,
    loginPath,
    navigate,
  } = useRegisterHook();

  return (
    <main className="min-h-[calc(100vh-80px)] bg-emerald-50/40 px-5 py-12 sm:px-8">
      <div className="mx-auto flex max-w-2xl justify-center">
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
          <form onSubmit={handleRegister} className="mt-8 space-y-5">
            {/* NAME / LAST NAME */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-zinc-700"
                >
                  {t.fields.name.label}
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder={t.fields.name.placeholder}
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
                  {t.fields.lastName.label}
                </label>

                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder={t.fields.lastName.placeholder}
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
                  {t.fields.dni.label}
                </label>

                <input
                  id="dni"
                  name="dni"
                  type="text"
                  inputMode="numeric"
                  placeholder={t.fields.dni.placeholder}
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
                  {t.fields.phone.label}
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder={t.fields.phone.placeholder}
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
                {t.fields.birthDate.label}
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
                {t.fields.address.label}
              </label>

              <input
                id="address"
                name="address"
                type="text"
                placeholder={t.fields.address.placeholder}
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
                {t.fields.city.label}
              </label>

              <input
                id="city"
                name="city"
                type="text"
                placeholder={t.fields.city.placeholder}
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
                {t.fields.email.label}
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder={t.fields.email.placeholder}
                className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                {t.fields.password.label}
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder={t.fields.password.placeholder}
                  className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 pr-12 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={
                    showPassword
                      ? t.passwordToggle.hideLabel
                      : t.passwordToggle.showLabel
                  }
                >
                  {showPassword
                    ? t.passwordToggle.iconVisible
                    : t.passwordToggle.iconHidden}
                </button>
              </div>
            </div>

            {/* CONFIRM PASSWORD */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-medium text-zinc-700"
              >
                {t.fields.confirmPassword.label}
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder={t.fields.confirmPassword.placeholder}
                  className="h-12 w-full rounded-xl border border-emerald-300 bg-white px-4 pr-12 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-emerald-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-lg text-zinc-400 transition hover:bg-emerald-50 hover:text-emerald-600"
                  aria-label={
                    showConfirmPassword
                      ? t.passwordToggle.hideLabel
                      : t.passwordToggle.showLabel
                  }
                >
                  {showConfirmPassword
                    ? t.passwordToggle.iconVisible
                    : t.passwordToggle.iconHidden}
                </button>
              </div>
            </div>

            {/* TERMS */}
            <label className="flex cursor-pointer items-start gap-3 pt-1">
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 cursor-pointer accent-emerald-600"
              />

              <span className="text-xs leading-5 text-zinc-500">{t.terms}</span>
            </label>

            {/* REGISTER */}
            <button
              type="submit"
              className="w-full cursor-pointer rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              {t.submit}
            </button>
          </form>

          {/* LOGIN */}
          <div className="mt-6 text-center">
            <span className="text-sm text-zinc-500">{t.haveAccount}</span>

            <button
              type="button"
              onClick={() => navigate(loginPath)}
              className="ml-1 cursor-pointer text-sm font-semibold text-emerald-600 transition hover:text-emerald-700"
            >
              {t.login}
            </button>
          </div>

          {/* HOME */}
          <button
            type="button"
            onClick={() => navigate(homePath)}
            className="mt-4 w-full cursor-pointer rounded-xl px-5 py-3 text-sm font-medium text-zinc-500 transition hover:bg-zinc-50 hover:text-zinc-700"
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
