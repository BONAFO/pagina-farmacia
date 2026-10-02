
"use client";

export default function DemoModal({ isOpen, onClose, title, message }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-5 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-7 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* ICON */}
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600">
          +
        </div>

        {/* CONTENT */}
        <div className="mt-5 text-center">
          <h2 className="text-xl font-bold text-zinc-900">
            {title}
          </h2>

          <p className="mt-3 text-sm leading-6 text-zinc-500">
            {message}
          </p>
        </div>

        {/* BUTTON */}
        <button
          type="button"
          onClick={onClose}
          className="mt-7 w-full cursor-pointer rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Entendido
        </button>
      </div>
    </div>
  );
}

