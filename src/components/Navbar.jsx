"use client";

import useNavbarHook from "../hooks/main/Navbar";
import NavbarText from "../translations/Navbar";

export default function Navbar() {
  const {
    isOpen,
    setIsOpen,
    search,
    setSearch,
    navigate,
    visibleCategories,
    goToCategory,
    searchResults,
    handleProductClick,
    aboutPath,
    contactPath,
    homePath,
    loginPath,
    productsPath,
    servicesPath,
    shippingPath,
    isActive,
  } = useNavbarHook();

  return (
    <nav className="relative z-10 w-full bg-white">
      <div className="bg-[#3F7D5A] text-white">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-5 text-xs sm:px-8 lg:px-10">
          <button
            type="button"
            onClick={() => navigate(shippingPath)}
            className="cursor-pointer transition hover:text-emerald-100"
          >
            {NavbarText.topBar.shipping}
          </button>

          <button
            type="button"
            onClick={() => navigate(contactPath)}
            className="hidden cursor-pointer transition hover:text-emerald-100 sm:block"
          >
            {NavbarText.topBar.customerService}
          </button>
        </div>
      </div>

      <div className="border-b border-[#D7E8DC] bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex min-h-[78px] items-center gap-5">
            {/* LOGO */}

            <button
              type="button"
              onClick={() => navigate(homePath)}
              className="flex shrink-0 cursor-pointer items-center gap-3 text-left"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3F7D5A] text-2xl font-bold text-white">
                +
              </span>

              <span className="leading-none">
                <span className="block text-sm font-bold tracking-tight text-zinc-900 sm:text-base">
                  {NavbarText.logo.first}
                </span>

                <span className="block text-sm font-bold tracking-tight text-[#3F7D5A] sm:text-base">
                  {NavbarText.logo.second}
                </span>
              </span>
            </button>

            {/* SEARCH DESKTOP */}

            <div className="mx-auto hidden min-w-0 max-w-2xl flex-1 md:block">
              <Search
                search={search}
                setSearch={setSearch}
                searchResults={searchResults}
                onProductClick={handleProductClick}
              />
            </div>

            {/* ACTIONS */}

            <div className="ml-auto hidden items-center gap-1 md:flex">
              <button
                type="button"
                onClick={() => navigate(shippingPath)}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-[#F1F7F3]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F7F3] text-[#3F7D5A]">
                  🚚
                </span>

                <span className="hidden text-left xl:block">
                  <span className="block text-[10px] text-zinc-400">
                    {NavbarText.actions.shipping.label}
                  </span>

                  <span className="block text-xs font-semibold text-zinc-700">
                    {NavbarText.actions.shipping.description}
                  </span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => navigate(loginPath)}
                className="flex cursor-pointer items-center gap-2 rounded-xl px-3 py-2 transition hover:bg-[#F1F7F3]"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F1F7F3] text-[#3F7D5A]">
                  👤
                </span>

                <span className="hidden text-left xl:block">
                  <span className="block text-[10px] text-zinc-400">
                    {NavbarText.actions.account.label}
                  </span>

                  <span className="block text-xs font-semibold text-zinc-700">
                    {NavbarText.actions.account.description}
                  </span>
                </span>
              </button>
            </div>

            {/* MOBILE */}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[#D7E8DC] bg-white text-zinc-700 transition hover:border-[#BFD8C7] hover:text-[#3F7D5A] md:hidden"
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={isOpen}
            >
              <span className="text-2xl leading-none">
                {isOpen ? "×" : "☰"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH MOBILE */}

      <div className="border-b border-[#D7E8DC] bg-[#F1F7F3] px-5 py-3 md:hidden">
        <Search
          search={search}
          setSearch={setSearch}
          searchResults={searchResults}
          onProductClick={handleProductClick}
        />
      </div>

      {/* CATEGORIES */}

      <div className="hidden border-b border-[#D7E8DC] bg-white md:block">
        <div className="mx-auto flex min-h-12 max-w-7xl items-center gap-7 overflow-x-auto px-5 sm:px-8 lg:px-10">
          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => goToCategory(category)}
              className={`cursor-pointer whitespace-nowrap text-sm font-medium transition ${
                category.name.toLowerCase() === "ofertas"
                  ? "font-semibold text-emerald-600 hover:text-emerald-700"
                  : "text-zinc-600 hover:text-[#3F7D5A]"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* NAV DESKTOP */}

      <div className="hidden border-b border-zinc-100 bg-[#F1F7F3] md:block">
        <div className="mx-auto flex min-h-10 max-w-7xl items-center px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-6">
            <NavButton
              onClick={() => navigate(homePath)}
              active={isActive(homePath)}
            >
              {NavbarText.navigation.home}
            </NavButton>

            <NavButton
              onClick={() => navigate(productsPath)}
              active={isActive(productsPath)}
            >
              {NavbarText.navigation.products}
            </NavButton>

            <NavButton
              onClick={() => navigate(servicesPath)}
              active={isActive(servicesPath)}
            >
              {NavbarText.navigation.services}
            </NavButton>

            <NavButton
              onClick={() => navigate(aboutPath)}
              active={isActive(aboutPath)}
            >
              {NavbarText.navigation.about}
            </NavButton>

            <NavButton
              onClick={() => navigate(contactPath)}
              active={isActive(contactPath)}
            >
              {NavbarText.navigation.contact}
            </NavButton>

            <NavButton
              onClick={() => navigate(shippingPath)}
              active={isActive(shippingPath)}
            >
              {NavbarText.navigation.shipping}
            </NavButton>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}

      <div
        className={`overflow-hidden border-b border-[#D7E8DC] bg-white shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
            {NavbarText.mobile.categories}
          </p>

          {visibleCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => goToCategory(category)}
              className={`cursor-pointer border-b border-[#EEF5F0] py-4 text-left text-sm font-medium transition ${
                category.name.toLowerCase() === "ofertas"
                  ? "text-emerald-600"
                  : "text-zinc-700 hover:text-[#3F7D5A]"
              }`}
            >
              {category.name}
            </button>
          ))}

          <div className="mt-5 border-t border-[#EEF5F0] pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {NavbarText.mobile.navigation}
            </p>

            <MobileButton
              onClick={() => navigate(homePath)}
              active={isActive(homePath)}
            >
              {NavbarText.navigation.home}
            </MobileButton>

            <MobileButton
              onClick={() => navigate(productsPath)}
              active={isActive(productsPath)}
            >
              {NavbarText.navigation.products}
            </MobileButton>

            <MobileButton
              onClick={() => navigate(servicesPath)}
              active={isActive(servicesPath)}
            >
              {NavbarText.navigation.services}
            </MobileButton>

            <MobileButton
              onClick={() => navigate(aboutPath)}
              active={isActive(aboutPath)}
            >
              {NavbarText.navigation.about}
            </MobileButton>

            <MobileButton
              onClick={() => navigate(contactPath)}
              active={isActive(contactPath)}
            >
              {NavbarText.navigation.contact}
            </MobileButton>

            <MobileButton
              onClick={() => navigate(shippingPath)}
              active={isActive(shippingPath)}
            >
              {NavbarText.navigation.shipping}
            </MobileButton>
          </div>

          <button
            type="button"
            onClick={() => navigate(loginPath)}
            className="mt-4 flex w-full cursor-pointer items-center gap-3 rounded-xl border border-[#D7E8DC] p-4 text-left transition hover:border-[#BFD8C7] hover:bg-[#F1F7F3]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F7F3] text-[#3F7D5A]">
              👤
            </span>

            <span>
              <span className="block text-xs text-zinc-400">
                {NavbarText.actions.account.label}
              </span>

              <span className="mt-0.5 block text-sm font-semibold text-zinc-800">
                {NavbarText.actions.account.description}
              </span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function Search({ search, setSearch, searchResults, onProductClick }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#3F7D5A]">
        🔎
      </span>

      <input
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={NavbarText.search.placeholder}
        className="h-11 w-full rounded-xl border border-[#D7E8DC] bg-white pl-11 pr-4 text-sm text-zinc-800 outline-none transition placeholder:text-zinc-400 hover:border-[#BFD8C7] focus:border-[#3F7D5A] focus:ring-4 focus:ring-[#3F7D5A]/10"
      />

      {search.trim() !== "" && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-[#D7E8DC] bg-white shadow-xl">
          {searchResults.length > 0 ? (
            <div className="max-h-[500px] overflow-y-auto">
              {searchResults.map((product) => (
                <button
                  key={product.id}
                  type="button"
                  onClick={() => onProductClick(product.id)}
                  className="flex w-full cursor-pointer items-center gap-3 border-b border-[#EEF5F0] px-4 py-3 text-left transition last:border-b-0 hover:bg-[#F1F7F3]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-[#F1F7F3]">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-1"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium text-zinc-900">
                      {product.name}
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      {product.brand}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-[#3F7D5A]">
                    ${product.price.toLocaleString("es-AR")}
                  </span>
                </button>
              ))}
            </div>
          ) : (
            <div className="px-4 py-6 text-center">
              <p className="text-sm text-zinc-500">
                {NavbarText.search.noResults}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function NavButton({ children, onClick, active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer text-xs font-medium transition ${
        active
          ? "font-semibold text-[#3F7D5A]"
          : "text-zinc-500 hover:text-[#3F7D5A]"
      }`}
    >
      {children}
    </button>
  );
}

function MobileButton({ children, onClick, active = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`block w-full cursor-pointer py-3 text-left text-sm font-medium transition ${
        active
          ? "font-semibold text-[#3F7D5A]"
          : "text-zinc-600 hover:text-[#3F7D5A]"
      }`}
    >
      {children}
    </button>
  );
}
