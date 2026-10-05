import { useProductsModal } from "../../context/ProductsModalContext";
import { useNavigate } from "../Navigation";
import { useProductSearch } from "../ProductSearch";
import useRoutesHook from "./Routes";

export default function useProductFilterMenuHook() {
  const { setModalVisible } = useProductsModal();

  const { productsPath, productPath } = useRoutesHook();
  const { navigate } = useNavigate();

  const { search, setSearch, searchResults, clearSearch } = useProductSearch();

  const handleProductClick = (id) => {
    navigate(`${productPath}/${id}`, () => {
      clearSearch();
    });
  };

  const clearFilters = () => {
    navigate(productsPath, () => {
      clearSearch();
    });
  };
  return {
    search,
    setSearch,
    searchResults,
    clearSearch,
    handleProductClick,
    clearFilters,
    navigate,
    productsPath,
    productPath,
    setModalVisible,
  };
}
