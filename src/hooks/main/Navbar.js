
"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

import categories from "../../db/Categories.db.json";
import products from "../../db/Products.db.json";
import useRoutesHook from "./Routes";
import { useNavigate } from "../Navigation";

export default function useNavbarHook() {

    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");

    const router = useRouter();

    const { navigate } = useNavigate();
    const pathname = usePathname();


    const {
        productPath,
        contactPath,
        homePath,
        productsPath,
        servicesPath,
        aboutPath,
        loginPath,
        shippingPath,
    } = useRoutesHook();

    const categoriesWithProducts = categories.map((category) => ({
        ...category,
        productCount: products.filter(
            (product) => product.categoryId === category.id,
        ).length,
    }));

    const offersCategory = categoriesWithProducts.find(
        (category) => category.name.toLowerCase() === "ofertas",
    );

    const mainCategories = categoriesWithProducts
        .filter(
            (category) =>
                category.productCount > 0 && category.name.toLowerCase() !== "ofertas",
        )
        .sort((a, b) => b.productCount - a.productCount)
        .slice(0, 6);

    const visibleCategories = offersCategory
        ? [...mainCategories, offersCategory]
        : mainCategories;

    const getCategorySlug = (name) => {
        return name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
    };

    const goToCategory = (category) => {
        const slug = getCategorySlug(category.name);
        navigate(`${productsPath}?category=${slug}`);
    };



    const searchResults =
        search.trim() === ""
            ? []
            : products
                .filter((product) => {
                    const value = search.toLowerCase().trim();

                    return (
                        product.name.toLowerCase().includes(value) ||
                        product.brand?.toLowerCase().includes(value)
                    );
                })
                .slice(0, 10);

    const handleProductClick = (id) => {


        navigate(`${productPath}/${id}`, () => {
            setSearch("");
            setIsOpen(false);
        });
    };

    const isActive = (path) => {
        const current = pathname.replace(/\/$/, "") || "/";
        const target = path.replace(/\/$/, "") || "/";

        return current === target;
    };



    return {
        isOpen,
        setIsOpen,
        search,
        setSearch,
        navigate,
        categoriesWithProducts,
        offersCategory,
        mainCategories,
        visibleCategories,
        getCategorySlug,
        goToCategory,
        searchResults,
        handleProductClick,
        productPath,
        contactPath,
        homePath,
        productsPath,
        servicesPath,
        aboutPath,
        loginPath,
        shippingPath,
        isActive
    }

}