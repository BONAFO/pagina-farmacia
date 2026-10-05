import t from "@/src/translations/Footer";
import useFooterHook from "../hooks/main/Footer";

export default function Footer() {
  const { categoryNavigation, mainCategories, pages,homePath,navigate } = useFooterHook();

  return (
    <footer className="border-t border-emerald-900 bg-emerald-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4">
          {/* MARCA */}
          <div>
            <button
              type="button"
              onClick={() => navigate(homePath)}
              className="flex cursor-pointer items-center gap-2 text-left text-lg font-bold"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500 text-lg">
                {t.brand.logo}
              </span>

              <span>
                {t.brand.first}{" "}
                <span className="text-emerald-400">{t.brand.second}</span>
              </span>
            </button>

            <p className="mt-4 max-w-sm text-sm leading-6 text-emerald-100/60">
              {t.tagline}
            </p>
          </div>

          {/* CATEGORÍAS */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.categoriesTitle}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {mainCategories.map((category) => (
                <button
                  key={category.path}
                  type="button"
                  onClick={() => navigate(categoryNavigation(category))}
                  className="w-fit cursor-pointer text-left text-sm text-emerald-100/60 transition hover:text-emerald-400"
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.infoTitle}
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {pages.map((page) =>
                page.inFoot ? (
                  <button
                    key={page.slug}
                    type="button"
                    onClick={() => navigate(page.path)}
                    className="w-fit cursor-pointer text-left text-sm text-emerald-100/60 transition hover:text-emerald-400"
                  >
                    {page.slug}
                  </button>
                ) : (
                  ""
                ),
              )}
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t.contact.title}
            </h3>

            <div className="mt-4 space-y-3 text-sm text-emerald-100/60">
              {t.contact.items.map((item) => (
                <div key={item.title} className="flex items-start gap-2">
                  <span aria-hidden="true">{item.icon}</span>

                  {/* Los horarios tienen dos líneas, una debajo de la otra */}
                  <div>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-emerald-900 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p className="text-xs text-emerald-100/40">{t.copyright}</p>

            <p className="text-xs text-emerald-100/30">{t.slogan}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
