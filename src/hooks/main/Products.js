import { useSearchParams } from "next/navigation";

import products from "../../db/Products.db.json";
import categories from "../../db/Categories.db.json";

import useRoutesHook from "./Routes";
import { useNavigate } from "../Navigation";


export default function useProductsHook() {

    const searchParams = useSearchParams();

    const categoryParam = searchParams.get("category");
    const sortParam = searchParams.get("sort");

    const { productPath } = useRoutesHook();
    const { navigate } = useNavigate();

    const getCategorySlug = (name) => {
        return name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
    };

    let filteredProducts = categoryParam
        ? products.filter((product) => {
            const category = categories.find(
                (category) => category.id === product.categoryId,
            );

            return category && getCategorySlug(category.name) === categoryParam;
        })
        : [...products];

    switch (sortParam) {
        case "1":
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name, "es"));
            break;

        case "2":
            filteredProducts.sort((a, b) => b.name.localeCompare(a.name, "es"));
            break;

        case "3":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "4":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "5":
            filteredProducts.sort((a, b) => b.id - a.id);
            break;

        case "6":
            filteredProducts.sort((a, b) => a.id - b.id);
            break;

        default:
            break;
    }
    return {
        searchParams,
        categoryParam,
        sortParam,
        getCategorySlug,
        filteredProducts,
        productPath,
navigate
    }
}