"use client"

import { useMemo, useState } from "react";

import products from "../db/Products.db.json";

export function useProductSearch() {
const [search, setSearch] = useState("");

const searchResults = useMemo(() => {
const value = search.trim().toLowerCase();

if (!value) {
  return [];
}

return products
  .filter((product) => {
    return (
      product.name.toLowerCase().includes(value) ||
      product.brand.toLowerCase().includes(value)
    );
  })
  .slice(0, 10);


}, [search]);

const clearSearch = () => {
setSearch("");
};

return {
search,
setSearch,
searchResults,
clearSearch,
};
}