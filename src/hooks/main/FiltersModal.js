import { useProductsModal } from "@/src/context/ProductsModalContext";
import { useSearchParams } from "next/navigation";
import useRoutesHook from "./Routes";
import { useNavigate } from "../Navigation";

export default function useFiltersModalHook() {


    const { navigate } = useNavigate();

    const { setModalVisible } = useProductsModal();


    const searchParams = useSearchParams();
    const currentCategory = searchParams.get("category");


    const { productsPath } = useRoutesHook();

    const getCategorySlug = (name) => {
        return name
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/\s+/g, "-");
    };

    const handleCategory = (category) => {
        const slug = getCategorySlug(category.name);

        const params = new URLSearchParams(searchParams.toString());
        params.set("category", slug);

        navigate(`${productsPath}?${params.toString()}`);
        setModalVisible("");
    };

    const clearFilters = () => {
        const params = new URLSearchParams(searchParams.toString());
        params.delete("category");

        const query = params.toString();

        navigate(query ? `${productsPath}}?${query}` : "/products");
        setModalVisible("");
    };

    return {
        clearFilters,
        handleCategory,
        getCategorySlug,
        setModalVisible,
        searchParams,
        currentCategory,

    }
}