
import { useSearchParams } from "next/navigation";
import { useProductsModal } from "../../context/ProductsModalContext";
import { useNavigate } from "../Navigation";
import useRoutesHook from "../main/Routes";


export default function useSortModalHook() {

    const { setModalVisible } = useProductsModal();

    const searchParams = useSearchParams();

    const currentSort = searchParams.get("sort");

    const { productsPath } = useRoutesHook();

    const { navigate } = useNavigate();

    const handleSort = (option) => {
        const params = new URLSearchParams(searchParams.toString());

        params.set("sort", option.id);

        navigate(`${productsPath}?${params.toString()}`);
        setModalVisible("");
    };

    const clearSort = () => {
        const params = new URLSearchParams(searchParams.toString());

        params.delete("sort");

        const query = params.toString();

        navigate(query ? `${productsPath}?${query}` : productsPath);
        setModalVisible("");
    };

    return {
        setModalVisible,
        searchParams,
        currentSort,
        productsPath,
        navigate,
        handleSort,
        clearSort,
    }
}