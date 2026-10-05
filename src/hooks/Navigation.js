"use client"

import { useRouter } from "next/navigation";
import { useNavigation } from "../context/NavigationContext";

/**
 * @param {"home" | "services" | "contact" | "register" | "login" | "shipping" | "products" | "about" | "product"} path
 */

export const useNavigationHook = (path) => {
    const { pages } = useNavigation();


    switch (path) {
        case "home":
            return pages.find((page) => page.name === "home")?.path;

        case "services":
            return pages.find((page) => page.name === "services")?.path;

        case "contact":
            return pages.find((page) => page.name === "contact")?.path;

        case "register":
            return pages.find((page) => page.name === "register")?.path;

        case "login":
            return pages.find((page) => page.name === "login")?.path;

        case "shipping":
            return pages.find((page) => page.name === "shipping")?.path;

        case "products":
            return pages.find((page) => page.name === "products")?.path;

        case "product":
            return pages.find((page) => page.name === "product")?.path;

        case "about":
            return pages.find((page) => page.name === "about")?.path;
    }
}



export const useCategoryNavigationHook = () => {
    const productsPath = useNavigationHook("products");

    const getCategorySlug = (name) => {
        return name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
    };

    return (category) => {
        const slug = getCategorySlug(category.name);
        return `${productsPath}?category=${slug}`;
    };
};

export const useNavigate = () => {

    const router = useRouter();

    return {
        navigate: (path, cb = () => { }, after = false) => {
            if (after) {
                router.push(path)
                cb()
                return ""
            }
            cb()
            router.push(path)
        }
    }
}