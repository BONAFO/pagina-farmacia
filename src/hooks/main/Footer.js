import { useNavigation } from "@/src/context/NavigationContext";
import { useCategoryNavigationHook, useNavigate } from "../Navigation";
import categories from "../../db/Categories.db.json";
import products from "../../db/Products.db.json";
import useRoutesHook from "./Routes";


export default function useFooterHook() {


    const { pages } = useNavigation();


    const { homePath } = useRoutesHook();
    const { navigate } = useNavigate();

    const mainCategories = categories
        .map((category) => ({
            ...category,
            productCount: products.filter(
                (product) => product.categoryId === category.id,
            ).length,
        }))
        .filter(
            (category) =>
                category.productCount > 0 && category.name.toLowerCase() !== "ofertas",
        )
        .sort((a, b) => b.productCount - a.productCount)
        .slice(0, 6);


    const categoryNavigation = useCategoryNavigationHook();


    return {

        pages,
        mainCategories,
        categoryNavigation,
        homePath,
        navigate
    }
}