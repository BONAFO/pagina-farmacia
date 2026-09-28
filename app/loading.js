"use client"
export default function Loading() {
  return (
    <main className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        {/* LOGO */}
        <div className="flex items-center gap-4 animate-[heartbeat_1.4s_ease-in-out_infinite]">
          <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-600 text-5xl font-bold text-white shadow-lg">
            +
          </span>

          <div className="leading-none">
            <span className="block text-3xl font-bold tracking-tight text-zinc-900">
              FARMACIA
            </span>

            <span className="block text-3xl font-bold tracking-tight text-emerald-600">
              SALUD
            </span>
          </div>
        </div>

        {/* TEXTO */}
        <p className="mt-8 text-sm font-medium text-zinc-400">
          Cargando...
        </p>

        {/* ANIMACIÓN */}
        <style jsx>{`
          @keyframes heartbeat {
            0%,
            100% {
              transform: scale(1);
            }

            15% {
              transform: scale(1.06);
            }

            30% {
              transform: scale(1);
            }

            45% {
              transform: scale(1.04);
            }

            60% {
              transform: scale(1);
            }
          }
        `}</style>
      </div>
    </main>
  );
}

